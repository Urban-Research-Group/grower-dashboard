"""Sync dashboard data from s3://state-metrics into public/.

- Current metrics:  {STATE}_DATA.csv              -> public/states/{STATE}/{STATE}_DATA.csv
- Historical data:  historical/{STATE}/YYYY_MM.csv -> public/historical/{STATE}/YYYY_MM.csv

States and months are discovered from the bucket, so a new state or month
published by the pipeline shows up without editing this script or the
frontend (vite.config.js builds the file list from public/ at build time).

Historical files are only downloaded when they are new or changed on S3.
Local files are never deleted.
"""
import hashlib
import io
import os
import re

import boto3
import pandas as pd
from dotenv import load_dotenv

BUCKET = "state-metrics"
PUBLIC_DIR = "public"

CURRENT_KEY = re.compile(r"^([A-Z]{2})_DATA\.csv$")
HISTORICAL_KEY = re.compile(r"^historical/([A-Z]{2})/(\d{4}_\d{2})\.csv$")

# Load AWS credentials from .env (optional when ~/.aws/credentials is set up)
load_dotenv()


def list_keys(s3, prefix=""):
    """Yield every object under a prefix (paginated: one call returns max 1,000)."""
    paginator = s3.get_paginator("list_objects_v2")
    for page in paginator.paginate(Bucket=BUCKET, Prefix=prefix):
        yield from page.get("Contents", [])


def is_valid_csv(body: bytes) -> bool:
    """Reject empty files so a bad upload never replaces good local data."""
    try:
        return not pd.read_csv(io.BytesIO(body)).empty
    except Exception:
        return False


def is_unchanged(local_path: str, obj: dict) -> bool:
    """True if the local file already matches the S3 object."""
    if not os.path.exists(local_path):
        return False
    if os.path.getsize(local_path) != obj["Size"]:
        return False

    etag = obj["ETag"].strip('"')
    if "-" in etag:
        # Multipart upload: ETag is not an MD5, so size has to be enough
        return True
    with open(local_path, "rb") as f:
        return hashlib.md5(f.read()).hexdigest() == etag


def download(s3, key: str, local_path: str) -> bool:
    try:
        body = s3.get_object(Bucket=BUCKET, Key=key)["Body"].read()
    except Exception as e:
        print(f"  ! Error downloading {key}: {e}. Local file was not replaced.")
        return False

    if not is_valid_csv(body):
        print(f"  ! {key} is empty or unreadable. Local file was not replaced.")
        return False

    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    with open(local_path, "wb") as f:
        f.write(body)
    return True


def sync_current(s3):
    print("Current metrics:")
    for obj in list_keys(s3):
        match = CURRENT_KEY.match(obj["Key"])
        if not match:
            continue
        state = match.group(1)
        local_path = os.path.join(PUBLIC_DIR, "states", state, f"{state}_DATA.csv")
        if is_unchanged(local_path, obj):
            print(f"  = {obj['Key']} (unchanged)")
        elif download(s3, obj["Key"], local_path):
            print(f"  + {obj['Key']} -> {local_path}")


def sync_historical(s3):
    print("Historical data:")
    updated = skipped = 0
    for obj in list_keys(s3, "historical/"):
        match = HISTORICAL_KEY.match(obj["Key"])
        if not match:
            continue
        state, month = match.groups()
        local_path = os.path.join(PUBLIC_DIR, "historical", state, f"{month}.csv")
        if is_unchanged(local_path, obj):
            skipped += 1
        elif download(s3, obj["Key"], local_path):
            updated += 1
            print(f"  + {obj['Key']} -> {local_path}")
    print(f"  {updated} downloaded, {skipped} already up to date")


def main():
    s3 = boto3.client("s3")
    sync_current(s3)
    sync_historical(s3)


if __name__ == "__main__":
    main()
