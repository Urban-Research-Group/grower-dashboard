# Development Guide

This is a Vite + React dashboard that visualizes utility outage metrics (SAIDI/SAIFI) on a 3D US map, plus historical trend charts. It's deployed to GitHub Pages and its data is refreshed automatically from S3.

## Stack

- **React 19** + **Vite 7**, JSX for app code, TSX for shadcn/radix-based UI components
- **Tailwind CSS 4** (via `@tailwindcss/vite`), shadcn-style components (`components.json`, `new-york` style) under `src/components/ui/`
- **deck.gl** (`@deck.gl/react`, `@deck.gl/layers`) + **react-map-gl/maplibre** for the 3D choropleth map
- **Recharts** for the historical line charts
- **react-router-dom** is a dependency but the app currently does client-side view switching via `useState` in [App.jsx](src/App.jsx), not routes
- Path alias `@/*` → `src/*` (configured in both [vite.config.js](vite.config.js) and [tsconfig.json](tsconfig.json))

## Getting started

```bash
npm install
npm run dev       # start Vite dev server (you can run this dashboard to test everything locally before you push your code)
npm run build     # production build to dist/
npm run preview   # preview a production build
npm run lint      # eslint
```

There's no test suite currently configured.

## Project structure

```
src/
  App.jsx                  # top-level view switch: home (map) / data / team
  pages/
    Map3D.jsx               # deck.gl choropleth (states zoomed out, counties zoomed in)
    Data.jsx                # historical SAIDI/SAIFI line chart by state/county
    Team.jsx                # static team page
  components/
    dashboard-components.tsx  # navbar (page switch + search)
    SearchCommand.jsx         # cmdk-based search, feeds Map3D's searchTerm
    ui/                        # shadcn-generated primitives (button, select, dialog, etc.)
  lib/utils.ts              # cn() helper etc.

public/
  counties.geojson          # US county boundaries
  us-states.json            # US state boundaries
  states/<ST>/<ST>_DATA.csv # current snapshot metrics per state (map layer)
  historical/<ST>/YYYY_MM.csv # monthly historical metrics per state (Data page charts)

retrieveS3ForDash.py        # pulls public/states/<ST>_DATA.csv from S3 (CI job)
.github/workflows/
  dashboard.yml             # runs retrieveS3ForDash.py on a schedule, commits data changes
  deploy-pages.yml          # builds and deploys to gh-pages after dashboard.yml succeeds
```

## Data model

Two independent CSV datasets live under `public/`, both fetched client-side at runtime (no build-time bundling):

1. **Current snapshot** — `public/states/<ST>/<ST>_DATA.csv`, columns `County, SAIDI, FIPS, State`. Loaded by [Map3D.jsx](src/pages/Map3D.jsx) and joined to GeoJSON features by zero-padded 5-digit FIPS code. This is what drives the map's fill color / extrusion height.
2. **Historical series** — `public/historical/<ST>/YYYY_MM.csv`, one file per state per month, columns include `Date, County, State, SAIDI, SAIFI`. Loaded by [Data.jsx](src/pages/Data.jsx) for the trend chart. Note the state/month file list is currently **hardcoded** in `HISTORICAL_FILES_BY_STATE` — adding a new month's file means updating that list, it isn't auto-discovered.

### Adding a new state to the map

Documented in [README.md](README.md):
1. Create `public/states/<ST>/` and add `<ST>_DATA.csv` following the `County, SAIDI, FIPS, State` format (FIPS zero-padded to 5 digits — cross-check against `public/counties.geojson`).
2. Add the state to `READY_STATES` in [Map3D.jsx](src/pages/Map3D.jsx#L12) (this auto-derives the CSV URL).
3. If you also want it on the Data page, add it to `STATE_OPTIONS` and `HISTORICAL_FILES_BY_STATE` in [Data.jsx](src/pages/Data.jsx#L22).
4. If you want CI to auto-refresh it from S3, add the abbreviation to `STATES` in [retrieveS3ForDash.py](retrieveS3ForDash.py#L8) (expects an S3 object `<ST>_DATA.csv` in the `state-metrics` bucket).

## Data refresh pipeline (CI)

- `.github/workflows/dashboard.yml` runs `retrieveS3ForDash.py` on a cron (00:00 and 12:00 UTC) and on push to `dev`/`main`/`allison-dev`. It downloads each state's CSV from the `state-metrics` S3 bucket, overwrites `public/states/<ST>/<ST>_DATA.csv` if the new file is non-empty, and commits/pushes as `github-actions[bot]` with the message `chore: update daily dashboard files` (this is what the recent commit history is).
- `.github/workflows/deploy-pages.yml` triggers after `dashboard` succeeds on `main`, builds with `npm run build`, and publishes `dist/` to the `gh-pages` branch.
- Locally, `retrieveS3ForDash.py` needs `boto3`, `pandas`, `python-dotenv` and AWS credentials (via `.env` or environment) with read access to the `state-metrics` bucket.
- `npm run deploy` also exists as a manual fallback (`vite build && gh-pages -d dist`).

## Conventions

- New UI primitives should go through shadcn conventions (`components.json` — `new-york` style, `neutral` base color, icons from `lucide-react`) and land in `src/components/ui/`, written as `.tsx` even though the rest of the app is `.jsx`.
- ESLint (`eslint.config.js`) flags unused vars except those matching `^[A-Z_]`; run `npm run lint` before committing.
- `vite.config.js` sets `base: "/grower-dashboard/"` for GitHub Pages — keep this if the repo/Pages path doesn't change; any asset URL should go through `import.meta.env.BASE_URL` (see the `BASE` constant pattern in `Map3D.jsx`/`Data.jsx`) rather than being hardcoded from `/`.
- FIPS codes are handled as zero-padded 5-character strings throughout (`normalizeFips` in `Map3D.jsx`); keep new data joins consistent with that.
