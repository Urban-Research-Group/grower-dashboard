// Map3D.jsx
import { useMemo, useEffect, useState, useRef } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { WebMercatorViewport } from "@deck.gl/core";
import { Map } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import Legend from "../components/Legend";

const BASE = import.meta.env.BASE_URL;

const COUNTIES_GEOJSON_URL = `${BASE}counties.geojson`;
const STATES_GEOJSON_URL = `${BASE}us-states.json`;
const READY_STATES = ["AL", "FL", "GA", "IL", "LA", "MS", "NC", "SC"];

const STATE_CSV_URLS = [];

for (const state of READY_STATES) {
  STATE_CSV_URLS.push(`${BASE}states/${state}/${state}_DATA.csv`);
}

const ZOOM_THRESHOLD = 6;
// Keep overview of CONUS, but allow deeper county zoom.
// MIN was 3.5 and MAX 10 — that made zoom-in feel capped / sticky after the
// "fit entire US" change. Slightly lower min helps fitBounds on wide screens;
// higher max lets you inspect counties without hitting the wall early.
const MIN_ZOOM = 3.0;
const MAX_ZOOM = 13;
const US_BOUNDS = {
  minLng: -127,
  maxLng: -65,
  minLat: 24,
  maxLat: 50,
};

// deck.gl default scrollZoom speed is ~0.01; raise for snappier wheel/trackpad zoom.
const SCROLL_ZOOM = {
  speed: 0.025,
  smooth: false,
};

// us-states.json only has state names; counties.geojson uses STATEFP.
const STATE_NAME_TO_FIPS = {
  Alabama: "01",
  Alaska: "02",
  Arizona: "04",
  Arkansas: "05",
  California: "06",
  Colorado: "08",
  Connecticut: "09",
  Delaware: "10",
  "District of Columbia": "11",
  Florida: "12",
  Georgia: "13",
  Hawaii: "15",
  Idaho: "16",
  Illinois: "17",
  Indiana: "18",
  Iowa: "19",
  Kansas: "20",
  Kentucky: "21",
  Louisiana: "22",
  Maine: "23",
  Maryland: "24",
  Massachusetts: "25",
  Michigan: "26",
  Minnesota: "27",
  Mississippi: "28",
  Missouri: "29",
  Montana: "30",
  Nebraska: "31",
  Nevada: "32",
  "New Hampshire": "33",
  "New Jersey": "34",
  "New Mexico": "35",
  "New York": "36",
  "North Carolina": "37",
  "North Dakota": "38",
  Ohio: "39",
  Oklahoma: "40",
  Oregon: "41",
  Pennsylvania: "42",
  "Rhode Island": "44",
  "South Carolina": "45",
  "South Dakota": "46",
  Tennessee: "47",
  Texas: "48",
  Utah: "49",
  Vermont: "50",
  Virginia: "51",
  Washington: "53",
  "West Virginia": "54",
  Wisconsin: "55",
  Wyoming: "56",
};

const STATE_FIPS_TO_NAME = Object.fromEntries(
  Object.entries(STATE_NAME_TO_FIPS).map(([name, fips]) => [fips, name]),
);

const INITIAL_VIEW_STATE = {
  longitude: -79.0,
  latitude: 35.5,
  zoom: 5,
  pitch: 45,
  bearing: 0,
};

// contiguous US extent used to fit the initial view to the container
const CONUS_FIT_BOUNDS = [
  [-125, 24.5],
  [-66.9, 49.4],
];

function normalizeFips(raw) {
  if (raw == null) return null;
  const num = parseFloat(raw);
  if (!isNaN(num)) {
    return String(Math.floor(num)).padStart(5, "0");
  }
  const digits = String(raw).replace(/\D/g, "");
  if (!digits) return null;
  return digits.padStart(5, "0");
}

// crude center-of-geometry finder
function getFeatureCenter(feature) {
  const geom = feature.geometry;
  if (!geom || !geom.coordinates) return null;

  const coords = [];
  const collect = (c) => {
    if (!c) return;
    if (typeof c[0] === "number") {
      coords.push(c);
    } else {
      c.forEach(collect);
    }
  };
  collect(geom.coordinates);

  if (!coords.length) return null;

  let sumX = 0;
  let sumY = 0;
  coords.forEach(([x, y]) => {
    sumX += x;
    sumY += y;
  });

  return {
    longitude: sumX / coords.length,
    latitude: sumY / coords.length,
  };
}

function getFeatureBounds(feature) {
  const geom = feature.geometry;
  if (!geom || !geom.coordinates) return null;

  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  const collect = (c) => {
    if (!c) return;
    if (typeof c[0] === "number") {
      const [lng, lat] = c;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    } else {
      c.forEach(collect);
    }
  };

  collect(geom.coordinates);
  if (!Number.isFinite(minLng) || !Number.isFinite(maxLng) || !Number.isFinite(minLat) || !Number.isFinite(maxLat)) {
    return null;
  }

  return { minLng, maxLng, minLat, maxLat };
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function pointInRing(lng, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0];
    const yi = ring[i][1];
    const xj = ring[j][0];
    const yj = ring[j][1];
    const intersect =
      yi > lat !== yj > lat &&
      lng < ((xj - xi) * (lat - yi)) / (yj - yi + 0.0) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function pointInFeature(lng, lat, feature) {
  const geom = feature?.geometry;
  if (!geom) return false;
  const polys =
    geom.type === "Polygon"
      ? [geom.coordinates]
      : geom.type === "MultiPolygon"
        ? geom.coordinates
        : [];
  for (const polygon of polys) {
    const [outer, ...holes] = polygon;
    if (!pointInRing(lng, lat, outer)) continue;
    if (holes.some((hole) => pointInRing(lng, lat, hole))) continue;
    return true;
  }
  return false;
}

function getStateNameFromFeature(feature) {
  const props = feature?.properties || {};
  return (
    props.STATE_NAME ||
    props.STATE ||
    props.NAME ||
    props.Name ||
    props.name ||
    null
  );
}

function getStateFipsFromFeature(feature) {
  const props = feature?.properties || {};
  if (props.STATEFP) return String(props.STATEFP).padStart(2, "0");
  const name = getStateNameFromFeature(feature);
  if (name && STATE_NAME_TO_FIPS[name]) return STATE_NAME_TO_FIPS[name];
  const rawFips =
    props.FIPS ||
    props.fips ||
    props.GEOID ||
    props.geoid ||
    (props.STATEFP && props.COUNTYFP ? `${props.STATEFP}${props.COUNTYFP}` : null);
  const normalized = normalizeFips(rawFips);
  return normalized ? normalized.slice(0, 2) : null;
}

function findStateAtLngLat(statesGeojson, lng, lat) {
  if (!statesGeojson?.features?.length) return null;
  for (const feature of statesGeojson.features) {
    if (pointInFeature(lng, lat, feature)) {
      const name = getStateNameFromFeature(feature);
      const fips = name ? STATE_NAME_TO_FIPS[name] : null;
      if (!fips) return null;
      return { fips, name, feature };
    }
  }
  return null;
}

export default function Map3D({ searchTerm }) {
  const [countiesGeojson, setCountiesGeojson] = useState(null);
  const [statesGeojson, setStatesGeojson] = useState(null);
  const [metrics, setMetrics] = useState({});
  const [hoverInfo, setHoverInfo] = useState(null);

  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const [metric, setMetric] = useState("saidi");
  const [height3D, setHeight3D] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  // When zoomed to counties, only render one state's counties (e.g. Georgia).
  const [focusedState, setFocusedState] = useState(null); // { fips, name }
  const searchHighlightTimeoutRef = useRef(null);

  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const hasFitInitialView = useRef(false);
  // Soft pan bounds: when zoomed out, keep the camera over the US; when zoomed
  // in, add slack so zoom-toward-cursor near coasts isn't fought by hard clamps.
  const constrainViewState = (vs) => {
    const zoom = clamp(vs.zoom, MIN_ZOOM, MAX_ZOOM);
    const t = clamp((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM), 0, 1);
    const lngPad = 10 * t;
    const latPad = 6 * t;
    return {
      ...vs,
      zoom,
      longitude: clamp(
        vs.longitude,
        US_BOUNDS.minLng - lngPad,
        US_BOUNDS.maxLng + lngPad,
      ),
      latitude: clamp(
        vs.latitude,
        US_BOUNDS.minLat - latPad,
        US_BOUNDS.maxLat + latPad,
      ),
      ...(height3D ? {} : { pitch: 0, bearing: 0 }),
    };
  };

  const toggleHeight3D = () => {
    const next = !height3D;
    setHeight3D(next);
    setViewState((vs) => ({
      ...vs,
      pitch: next ? INITIAL_VIEW_STATE.pitch : 0,
      bearing: next ? vs.bearing : 0,
      transitionDuration: 500,
    }));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });

      if (!hasFitInitialView.current && rect.width > 0 && rect.height > 0) {
        hasFitInitialView.current = true;
        const { longitude, latitude, zoom } = new WebMercatorViewport({
          width: rect.width,
          height: rect.height,
        }).fitBounds(CONUS_FIT_BOUNDS, { padding: 20 });
        setViewState((vs) => ({
          ...vs,
          longitude,
          latitude,
          zoom: clamp(zoom, MIN_ZOOM, MAX_ZOOM),
        }));
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(COUNTIES_GEOJSON_URL)
      .then((r) => r.json())
      .then(setCountiesGeojson)
      .catch((err) => console.error("Failed to load counties GeoJSON", err));
  }, []);

  useEffect(() => {
    fetch(STATES_GEOJSON_URL)
      .then((r) => r.json())
      .then(setStatesGeojson)
      .catch((err) => console.error("Failed to load states GeoJSON", err));
  }, []);

  useEffect(() => {
    // Function to load and parse a single CSV
    const loadCSV = async (url) => {
      const response = await fetch(url);
      const text = await response.text();
      let processedText = text.replace(/\r/g, "");
      if (processedText.charCodeAt(0) === 0xfeff)
        processedText = processedText.slice(1);

      const lines = processedText.trim().split("\n");
      const [headerLine, ...rows] = lines;
      const headers = headerLine.split(",").map((h) => h.trim());

      const byFips = {};
      for (const row of rows) {
        if (!row.trim()) continue;

        const cols = row.split(",");
        const rowObj = {};
        headers.forEach((h, i) => {
          rowObj[h] = cols[i]?.trim();
        });

        const rawFips = rowObj.FIPS || rowObj.fips;
        const fipsKey = normalizeFips(rawFips);
        if (!fipsKey) continue;

        const hasSaifi = headers.includes("SAIFI");
        byFips[fipsKey] = {
          county: rowObj.County,
          saidi: Number(rowObj.SAIDI || 0),
          saifi: hasSaifi ? Number(rowObj.SAIFI ?? 0) : null,
          fips: fipsKey,
          state: rowObj.State,
        };
      }

      return byFips;
    };

    // Load all CSVs and merge
    const loadAllCSVs = async () => {
      const allMetrics = {};

      for (const url of STATE_CSV_URLS) {
        try {
          const metrics = await loadCSV(url);
          Object.assign(allMetrics, metrics);
        } catch (err) {
          console.error(`Failed to load ${url}`, err);
        }
      }

      setMetrics(allMetrics);
    };

    loadAllCSVs();
  }, []);

  const getCountyMetric = (feature) => {
    const props = feature.properties || {};
    const rawFips =
      props.FIPS ||
      props.fips ||
      props.GEOID ||
      props.geoid ||
      props.GEOID20 ||
      (props.STATEFP && props.COUNTYFP
        ? `${props.STATEFP}${props.COUNTYFP}`
        : null);

    const fipsKey = normalizeFips(rawFips);
    if (!fipsKey) return null;

    return metrics[fipsKey] || null;
  };

  const stateMetrics = useMemo(() => {
    const byState = {};
    Object.values(metrics).forEach((m) => {
      const st = m.state || "Unknown";
      if (!byState[st])
        byState[st] = {
          state: st,
          saidiTotal: 0,
          saidiCount: 0,
          saifiTotal: 0,
          saifiCount: 0,
        };
      if (Number.isFinite(m.saidi)) {
        byState[st].saidiTotal += m.saidi;
        byState[st].saidiCount += 1;
      }
      if (m.saifi !== null && Number.isFinite(m.saifi)) {
        byState[st].saifiTotal += m.saifi;
        byState[st].saifiCount += 1;
      }
    });

    const result = {};
    Object.keys(byState).forEach((st) => {
      const agg = byState[st];
      const avgSaidi = agg.saidiCount > 0 ? agg.saidiTotal / agg.saidiCount : 0;
      const avgSaifi =
        agg.saifiCount > 0 ? agg.saifiTotal / agg.saifiCount : null;
      result[st] = { state: st, avgSaidi, avgSaifi };
    });

    return result;
  }, [metrics]);

  const getStateMetric = (feature) => {
    const props = feature.properties || {};
    const stateName =
      props.STATE_NAME || props.STATE || props.NAME || props.Name || props.name;

    if (!stateName) return null;
    return stateMetrics[stateName] || null;
  };

  // 🔍 search effect: fly to county or state
  useEffect(() => {
    const q = (searchTerm || "").trim().toLowerCase();
    if (!q) {
      if (searchHighlightTimeoutRef.current) {
        clearTimeout(searchHighlightTimeoutRef.current);
        searchHighlightTimeoutRef.current = null;
      }
      setSelectedLocation(null);
      setSelectedFeature(null);
      return;
    }
    if (!countiesGeojson && !statesGeojson) return;

    let match = null;
    const isFipsSearch = q.startsWith("fips:");
    const fipsQuery = isFipsSearch ? normalizeFips(q.slice(5)) : null;

    if (!match && fipsQuery && countiesGeojson) {
      match = countiesGeojson.features.find((f) => {
        const props = f.properties || {};
        const rawFips =
          props.FIPS ||
          props.fips ||
          props.GEOID ||
          props.geoid ||
          props.GEOID20 ||
          (props.STATEFP && props.COUNTYFP ? `${props.STATEFP}${props.COUNTYFP}` : null);
        return normalizeFips(rawFips) === fipsQuery;
      });
    }

    // County matcher
    const countyMatches = (f) => {
      const props = f.properties || {};
      const countyName =
        props.NAME ||
        props.Name ||
        props.name ||
        props.COUNTY ||
        props.County ||
        "";
      const stateName = props.STATE_NAME || props.STATE || props.STUSPS || "";
      const full = `${countyName} ${stateName}`.toLowerCase();

      return countyName.toLowerCase().includes(q) || full.includes(q);
    };

    // State matcher
    const stateMatches = (f) => {
      const props = f.properties || {};
      const stateName =
        props.STATE_NAME ||
        props.STATE ||
        props.NAME ||
        props.Name ||
        props.name ||
        "";
      return stateName.toLowerCase().includes(q);
    };

    const countyExactMatches = (f) => {
      const props = f.properties || {};
      const countyName =
        props.NAME ||
        props.Name ||
        props.name ||
        props.COUNTY ||
        props.County ||
        "";
      return countyName.toLowerCase() === q;
    };

    const stateExactMatches = (f) => {
      const props = f.properties || {};
      const stateName =
        props.STATE_NAME ||
        props.STATE ||
        props.NAME ||
        props.Name ||
        props.name ||
        "";
      return stateName.toLowerCase() === q;
    };

    if (!match && !isFipsSearch && statesGeojson) {
      match = statesGeojson.features.find(stateExactMatches);
    }
    if (!match && !isFipsSearch && countiesGeojson) {
      match = countiesGeojson.features.find(countyExactMatches);
    }
    if (!match && !isFipsSearch && countiesGeojson) {
      match = countiesGeojson.features.find(countyMatches);
    }
    if (!match && !isFipsSearch && statesGeojson) {
      match = statesGeojson.features.find(stateMatches);
    }

    if (!match) {
      console.warn("No match for:", q);
      return;
    }

    const bounds = getFeatureBounds(match);
    const center = bounds
      ? {
          longitude: (bounds.minLng + bounds.maxLng) / 2,
          latitude: (bounds.minLat + bounds.maxLat) / 2,
        }
      : getFeatureCenter(match);
    if (!center) return;

    const props = match.properties || {};
    const countyFips = normalizeFips(
      props.FIPS ||
        props.fips ||
        props.GEOID ||
        props.geoid ||
        props.GEOID20 ||
        (props.STATEFP && props.COUNTYFP ? `${props.STATEFP}${props.COUNTYFP}` : null),
    );
    const stateName =
      props.STATE_NAME || props.STATE || props.NAME || props.Name || props.name || null;

    if (searchHighlightTimeoutRef.current) {
      clearTimeout(searchHighlightTimeoutRef.current);
      searchHighlightTimeoutRef.current = null;
    }

    let selectedMode = null;
    if (countyFips) {
      selectedMode = "county";
      setSelectedLocation({ mode: "county", key: countyFips });
      setSelectedFeature({ mode: "county", feature: match });
      const countyStateFips =
        props.STATEFP
          ? String(props.STATEFP).padStart(2, "0")
          : countyFips.slice(0, 2);
      setFocusedState({
        fips: countyStateFips,
        name: STATE_FIPS_TO_NAME[countyStateFips] || stateName || countyStateFips,
      });
    } else if (stateName) {
      selectedMode = "state";
      setSelectedLocation({ mode: "state", key: stateName.toLowerCase() });
      setSelectedFeature({ mode: "state", feature: match });
      const fips = STATE_NAME_TO_FIPS[stateName];
      if (fips) setFocusedState({ fips, name: stateName });
    }
    searchHighlightTimeoutRef.current = setTimeout(() => {
      setSelectedLocation(null);
      setSelectedFeature(null);
      searchHighlightTimeoutRef.current = null;
    }, 2500);

    const boundsWidth = bounds ? Math.max(0.01, bounds.maxLng - bounds.minLng) : 1;
    const boundsHeight = bounds ? Math.max(0.01, bounds.maxLat - bounds.minLat) : 1;
    const paddedSpan = Math.max(boundsWidth, boundsHeight * 1.35) * 1.35;
    let targetZoom = clamp(Math.log2(360 / paddedSpan), MIN_ZOOM, MAX_ZOOM);
    if (selectedMode === "county") {
      targetZoom = Math.max(targetZoom, ZOOM_THRESHOLD + 0.8);
    }

    setViewState((vs) =>
      constrainViewState({
        ...vs,
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: targetZoom,
        transitionDuration: 800,
      }),
    );
  }, [searchTerm, countiesGeojson, statesGeojson]);

  useEffect(() => {
    return () => {
      if (searchHighlightTimeoutRef.current) {
        clearTimeout(searchHighlightTimeoutRef.current);
      }
    };
  }, []);

  // Zoomed out → clear focus. Zoomed in → keep county layer locked to the state
  // under the map center (clicking a state also sets this before zooming in).
  useEffect(() => {
    if (viewState.zoom < ZOOM_THRESHOLD) {
      if (focusedState) setFocusedState(null);
      return;
    }
    if (!statesGeojson) return;
    const hit = findStateAtLngLat(
      statesGeojson,
      viewState.longitude,
      viewState.latitude,
    );
    if (!hit) return;
    if (!focusedState || focusedState.fips !== hit.fips) {
      setFocusedState({ fips: hit.fips, name: hit.name });
    }
  }, [
    viewState.zoom,
    viewState.longitude,
    viewState.latitude,
    statesGeojson,
    focusedState,
  ]);

  const focusStateFeature = (feature) => {
    const name = getStateNameFromFeature(feature);
    const fips = name ? STATE_NAME_TO_FIPS[name] : null;
    if (!fips || !name) return;

    setFocusedState({ fips, name });

    const bounds = getFeatureBounds(feature);
    if (!bounds || !size.width || !size.height) {
      setViewState((vs) =>
        constrainViewState({
          ...vs,
          zoom: Math.max(vs.zoom, ZOOM_THRESHOLD + 0.4),
          transitionDuration: 600,
        }),
      );
      return;
    }

    const { longitude, latitude, zoom } = new WebMercatorViewport({
      width: size.width,
      height: size.height,
    }).fitBounds(
      [
        [bounds.minLng, bounds.minLat],
        [bounds.maxLng, bounds.maxLat],
      ],
      { padding: 48 },
    );

    setViewState((vs) =>
      constrainViewState({
        ...vs,
        longitude,
        latitude,
        zoom: Math.max(zoom, ZOOM_THRESHOLD + 0.2),
        transitionDuration: 700,
      }),
    );
  };

  const exitCountyFocus = () => {
    setFocusedState(null);
    setViewState((vs) =>
      constrainViewState({
        ...vs,
        zoom: ZOOM_THRESHOLD - 0.6,
        transitionDuration: 500,
      }),
    );
  };

  const focusedCountiesGeojson = useMemo(() => {
    if (!countiesGeojson) return null;
    if (!focusedState?.fips) return null;
    return {
      type: "FeatureCollection",
      features: countiesGeojson.features.filter(
        (f) => String(f.properties?.STATEFP || "").padStart(2, "0") === focusedState.fips,
      ),
    };
  }, [countiesGeojson, focusedState]);

  // ---- Color scale tuning ----
  // Anything at or above the cap gets the max color (red). Adjust per metric
  // to control how sensitive the color scale is. Values above the cap all
  // look the same shade of red.
  const METRIC_CAPS = {
    saidi: 0.05,
    saifi: 0.05,
  };

  // ---- layers logic stays the same as before (state vs county by zoom) ----
  const layers = useMemo(() => {
    const layers = [];

    const cap = METRIC_CAPS[metric];
    const range = cap;

    const getStateVal = (m) => (metric === "saidi" ? m?.avgSaidi : m?.avgSaifi) ?? null;
    const getCountyVal = (m) => (metric === "saidi" ? m?.saidi : m?.saifi) ?? null;
    const isSelectedState = (feature) => {
      if (!selectedLocation || selectedLocation.mode !== "state") return false;
      const props = feature.properties || {};
      const name =
        props.STATE_NAME || props.STATE || props.NAME || props.Name || props.name;
      return name?.toLowerCase() === selectedLocation.key;
    };
    const isSelectedCounty = (feature) => {
      if (!selectedLocation || selectedLocation.mode !== "county") return false;
      const props = feature.properties || {};
      const rawFips =
        props.FIPS ||
        props.fips ||
        props.GEOID ||
        props.geoid ||
        props.GEOID20 ||
        (props.STATEFP && props.COUNTYFP ? `${props.STATEFP}${props.COUNTYFP}` : null);
      return normalizeFips(rawFips) === selectedLocation.key;
    };

    const toColor = (v) => {
      if (v === null) return null;
      const t = Math.max(0, Math.min(1, v / range));
      const r = t < 0.5 ? Math.round(50 + 410 * t) : 255;
      const g = t < 0.5 ? Math.round(200 + 40 * t) : Math.round(220 - 400 * (t - 0.5));
      return [r, g, 0, 220];
    };

    if (statesGeojson && viewState.zoom < ZOOM_THRESHOLD) {
      layers.push(
        new GeoJsonLayer({
          id: `states-${metric}`,
          data: statesGeojson,
          pickable: true,
          autoHighlight: true,
          highlightColor: [255, 255, 255, 220],
          stroked: true,
          filled: true,
          extruded: height3D,
          wireframe: height3D,
          lineWidthUnits: "pixels",
          getElevation: (f) => {
            const m = getStateMetric(f);
            const v = getStateVal(m);
            if (!height3D || v === null) return 0;
            return Math.max(0, Math.min(1, v / range)) * 100000;
          },
          getFillColor: (f) => {
            const m = getStateMetric(f);
            const v = getStateVal(m);
            if (isSelectedState(f)) return [255, 255, 120, 255];
            return toColor(v) ?? [200, 200, 200, 200];
          },
          getLineColor: (f) => (isSelectedState(f) ? [255, 255, 0, 255] : [255, 255, 255, 180]),
          getLineWidth: (f) => (isSelectedState(f) ? 3 : 1),
          onHover: (info) => {
            const { object, x, y } = info;
            if (!object) {
              setHoverInfo(null);
              return;
            }
            const m = getStateMetric(object);
            const props = object.properties || {};
            const name =
              props.STATE_NAME ||
              props.STATE ||
              props.NAME ||
              props.Name ||
              props.name;
            setHoverInfo({
              x,
              y,
              mode: "state",
              label: name || "Unknown state",
              saidi: m?.avgSaidi ?? null,
              saifi: m?.avgSaifi ?? null,
            });
          },
          onClick: (info) => {
            if (info?.object) focusStateFeature(info.object);
          },
        }),
      );
    }

    if (
      focusedCountiesGeojson &&
      focusedCountiesGeojson.features.length > 0 &&
      viewState.zoom >= ZOOM_THRESHOLD
    ) {
      layers.push(
        new GeoJsonLayer({
          id: `counties-${metric}-${focusedState?.fips || "none"}`,
          data: focusedCountiesGeojson,
          pickable: true,
          autoHighlight: true,
          highlightColor: [255, 255, 255, 220],
          stroked: true,
          filled: true,
          extruded: height3D,
          wireframe: height3D,
          lineWidthUnits: "pixels",
          getElevation: (f) => {
            const m = getCountyMetric(f);
            const v = getCountyVal(m);
            if (!height3D || v === null) return 0;
            return Math.max(0, Math.min(1, v / range)) * 100000;
          },
          getFillColor: (f) => {
            const m = getCountyMetric(f);
            const v = getCountyVal(m);
            if (isSelectedCounty(f)) return [255, 255, 120, 255];
            return toColor(v) ?? [220, 220, 220, 180];
          },
          getLineColor: (f) => (isSelectedCounty(f) ? [255, 255, 0, 255] : [255, 255, 255, 150]),
          getLineWidth: (f) => (isSelectedCounty(f) ? 2 : 1),
          onHover: (info) => {
            const { object, x, y } = info;
            if (!object) {
              setHoverInfo(null);
              return;
            }
            const m = getCountyMetric(object);
            const props = object.properties || {};
            const name =
              props.NAME ||
              props.Name ||
              props.name ||
              props.COUNTY ||
              props.County;
            setHoverInfo({
              x,
              y,
              mode: "county",
              label: name || "Unknown county",
              saidi: m?.saidi ?? null,
              saifi: m?.saifi ?? null,
              fips: m?.fips ?? null,
            });
          },
        }),
      );
    }

    if (
      selectedFeature &&
      selectedFeature.feature &&
      ((selectedFeature.mode === "state" && viewState.zoom < ZOOM_THRESHOLD) ||
        (selectedFeature.mode === "county" && viewState.zoom >= ZOOM_THRESHOLD))
    ) {
      layers.push(
        new GeoJsonLayer({
          id: `search-highlight-${selectedFeature.mode}`,
          data: {
            type: "FeatureCollection",
            features: [selectedFeature.feature],
          },
          pickable: false,
          stroked: true,
          filled: true,
          extruded: false,
          getFillColor: [255, 255, 120, 140],
          getLineColor: [255, 255, 0, 255],
          lineWidthUnits: "pixels",
          getLineWidth: selectedFeature.mode === "state" ? 4 : 3,
        }),
      );
    }

    return layers;
  }, [
    focusedCountiesGeojson,
    focusedState,
    statesGeojson,
    metrics,
    stateMetrics,
    viewState.zoom,
    metric,
    height3D,
    selectedLocation,
    selectedFeature,
  ]);

  const { width, height } = size;
  const ready = width > 0 && height > 0;

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {ready && (
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={{
            minZoom: MIN_ZOOM,
            maxZoom: MAX_ZOOM,
            scrollZoom: SCROLL_ZOOM,
            doubleClickZoom: true,
            dragPan: true,
            dragRotate: height3D,
            touchRotate: height3D,
            inertia: 250,
          }}
          viewState={viewState}
          onViewStateChange={({ viewState: vs }) => setViewState(constrainViewState(vs))}
          layers={layers}
          width={width}
          height={height}
        >
          <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
        </DeckGL>
      )}

      <Legend
        metric={metric}
        cap={METRIC_CAPS[metric]}
        metricCaps={METRIC_CAPS}
        hasElevation={height3D}
        isCountyView={viewState.zoom >= ZOOM_THRESHOLD}
      />

      {focusedState && viewState.zoom >= ZOOM_THRESHOLD && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1.5 text-xs text-white shadow-lg">
          <span className="font-semibold">{focusedState.name} counties</span>
          <button
            type="button"
            onClick={exitCountyFocus}
            className="rounded-full bg-white/15 px-2 py-0.5 font-medium hover:bg-white/25"
          >
            All states
          </button>
        </div>
      )}

      {viewState.zoom < ZOOM_THRESHOLD && (
        <div className="pointer-events-none absolute top-4 left-4 z-10 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs text-white/80 shadow-lg">
          Click a state to view its counties
        </div>
      )}

      <div className="absolute bottom-4 left-4 z-10 flex rounded-full bg-slate-900/90 p-1 shadow-lg">
        {["saidi", "saifi"].map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              metric === m
                ? "bg-white text-slate-900"
                : "text-white/60 hover:text-white"
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="absolute bottom-4 left-44 z-10 flex rounded-full bg-slate-900/90 p-1 shadow-lg">
        <button
          onClick={toggleHeight3D}
          className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            height3D ? "bg-white text-slate-900" : "text-white/60 hover:text-white"
          }`}
        >
          {height3D ? "3D ON" : "3D OFF"}
        </button>
      </div>

      {hoverInfo && (
        <div
          className="pointer-events-none absolute z-10 rounded-md bg-slate-900/90 px-3 py-2 text-xs text-white shadow-lg"
          style={{
            left: hoverInfo.x + 8,
            top: hoverInfo.y + 8,
          }}
        >
          <div className="font-semibold">{hoverInfo.label}</div>
          {hoverInfo.mode === "county" && hoverInfo.fips && (
            <div>FIPS: {hoverInfo.fips}</div>
          )}
          {hoverInfo.saidi != null && (
            <div>
              SAIDI: {hoverInfo.saidi.toFixed(4)}
              {hoverInfo.mode === "state" && " (avg)"}
            </div>
          )}
          {hoverInfo.saifi != null && (
            <div>
              SAIFI: {hoverInfo.saifi.toFixed(4)}
              {hoverInfo.mode === "state" && " (avg)"}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
