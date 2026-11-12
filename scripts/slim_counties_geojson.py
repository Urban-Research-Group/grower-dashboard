"""Shrink public/counties.geojson for faster loading.

- Rounds coordinates to 5 decimal places (about 1 m; the source is the
  Census 1:20,000,000 cartographic boundary file, so no visible change).
- Keeps only the properties the app reads: STATEFP, COUNTYFP, GEOID, NAME.
- Writes compact JSON with no indentation.

Usage: python scripts/slim_counties_geojson.py
"""
import json
from pathlib import Path

PATH = Path(__file__).resolve().parent.parent / "public" / "counties.geojson"
KEEP = ("STATEFP", "COUNTYFP", "GEOID", "NAME")


def round_coords(value):
    if isinstance(value, float):
        return round(value, 5)
    if isinstance(value, list):
        return [round_coords(v) for v in value]
    return value


def main():
    data = json.loads(PATH.read_text())
    before = PATH.stat().st_size
    data.pop("crs", None)
    for feature in data["features"]:
        props = feature.get("properties") or {}
        feature["properties"] = {k: props[k] for k in KEEP if k in props}
        geom = feature.get("geometry")
        if geom:
            geom["coordinates"] = round_coords(geom["coordinates"])
    PATH.write_text(json.dumps(data, separators=(",", ":")))
    print(f"{before / 1e6:.2f} MB -> {PATH.stat().st_size / 1e6:.2f} MB")


if __name__ == "__main__":
    main()
