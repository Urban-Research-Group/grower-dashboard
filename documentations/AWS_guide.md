# AWS Guide

How to set up AWS access locally and inspect the S3 data behind the dashboard.

## Where the data lives

```
urg-power-outage (raw scrapes)  →  grower-data-pipeline (daily CI)  →  state-metrics  →  dashboard
```

All buckets are in `us-east-1`.

| Bucket | Contents | Written by |
|---|---|---|
| `urg-power-outage` | Raw per-county outage scrapes, one folder per state (`al/`, `tx/`, …) | Cloud Computing team scrapers |
| `state-metrics` | Production output: `<ST>_DATA.csv` (current snapshot) and `historical/<ST>/YYYY_MM.csv` (monthly) | `grower-data-pipeline` on `main` |
| `state-metrics-dev` | Same layout, from the pipeline's `dev` branch. The dashboard does not read it. | `grower-data-pipeline` on `dev` |

The dashboard's CI job ([retrieveS3ForDash.py](retrieveS3ForDash.py)) copies `state-metrics/<ST>_DATA.csv` into `public/states/<ST>/` twice a day, for each state listed in `STATES`.

## 1. Install the AWS CLI

Install it system-wide, not inside a conda env. It's a standalone tool that bundles its own Python, and `pip install awscli` only gets the outdated v1.

```bash
brew install awscli
aws --version    # should print aws-cli/2.x
```

Without Homebrew, use the macOS installer from https://aws.amazon.com/cli/.

## 2. Configure credentials

Ask a project maintainer for an access key ID and secret access key, then run:

```bash
aws configure
```

```
AWS Access Key ID [None]:       <your access key ID>
AWS Secret Access Key [None]:   <your secret access key>
Default region name [None]:     us-east-1
Default output format [None]:   json
```

The CLI saves the keys to `~/.aws/credentials`, outside the repo. boto3 (the AWS library for Python) reads the same file.

Check that they work:

```bash
aws sts get-caller-identity    # prints the account and user the keys belong to
```

### Using a `.env` file instead

[retrieveS3ForDash.py](retrieveS3ForDash.py) also loads credentials from a `.env` file in the repo root, which is git-ignored. The variable names **must** have the `AWS_` prefix, because boto3 ignores any other names:

```
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

Never commit keys or paste them into issues, PRs or chat.

## 3. Browse the data

```bash
# What the dashboard reads
aws s3 ls s3://state-metrics/
aws s3 ls s3://state-metrics/historical/NC/

# Which states have raw data
aws s3 ls s3://urg-power-outage/

# How much raw data a state has (file count + total size at the end)
aws s3 ls s3://urg-power-outage/tx/ --recursive --human-readable --summarize | tail -5

# Print a file to the terminal without saving it
aws s3 cp s3://state-metrics/NC_DATA.csv - | head
```

> ⚠️ **Read-only by default.** Stick to `aws s3 ls` and `aws s3 cp s3://... -`. Commands such as `aws s3 rm`, `aws s3 sync`, `aws s3 mv` and `aws s3 cp` with a bucket as the destination can change or delete shared data that the pipeline and dashboard depend on.

## 4. From Python

Set up an environment for this project once:

```bash
conda create -n grower python=3.11 -y
conda activate grower
pip install boto3 pandas python-dotenv
```

List the files under a prefix. Use the paginator, because a single list call returns at most 1,000 files:

```python
from dotenv import load_dotenv; load_dotenv(".env")   # optional if ~/.aws/credentials is set up
import boto3

s3 = boto3.client("s3")
bucket, prefix = "urg-power-outage", "tx/"

for page in s3.get_paginator("list_objects_v2").paginate(Bucket=bucket, Prefix=prefix):
    for o in page.get("Contents", []):
        print(o["Key"], o["Size"], o["LastModified"].date())
```

Refresh the dashboard's local snapshot CSVs from `state-metrics`. This overwrites `public/states/<ST>/<ST>_DATA.csv`:

```bash
python retrieveS3ForDash.py
```

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `Unable to locate credentials` / `NoCredentialsError` | `aws configure` hasn't been run, or the `.env` names lack the `AWS_` prefix |
| `InvalidAccessKeyId` / `SignatureDoesNotMatch` | Key pasted incorrectly. Re-run `aws configure` |
| `AccessDenied` | Your keys don't have permission for that bucket or action. Ask a maintainer |
| A state is missing from `state-metrics` | It isn't in `ALL_STATES` in `grower-data-pipeline/.github/workflows/pipeline.yml`, so the pipeline never produces it. See [DEVELOPMENT.md](DEVELOPMENT.md) for adding a state |
