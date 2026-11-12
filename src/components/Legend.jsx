const DEFAULT_METRIC_CAPS = {
  saidi: 0.05,
  saifi: 0.05,
};

const METRIC_DETAILS = {
  saidi: {
    label: "SAIDI",
    fullName: "System Average Interruption Duration Index",
    unit: "hours",
    higherMeaning: "Higher values indicate longer average outage duration",
  },
  saifi: {
    label: "SAIFI",
    fullName: "System Average Interruption Frequency Index",
    unit: "interruptions",
    higherMeaning: "Higher values indicate more frequent customer outages",
  },
};

const GRADIENT_STOPS = [
  "rgb(50, 200, 0)",
  "rgb(153, 210, 0)",
  "rgb(255, 220, 0)",
  "rgb(255, 120, 0)",
  "rgb(255, 20, 0)",
];

export default function Legend({
  metric = "saidi",
  cap,
  metricCaps = DEFAULT_METRIC_CAPS,
  hasElevation = true,
  isCountyView = false,
}) {
  const key = metric === "saifi" ? "saifi" : "saidi";
  const details = METRIC_DETAILS[key];
  const effectiveCap =
    typeof cap === "number" && Number.isFinite(cap)
      ? cap
      : (metricCaps?.[key] ?? DEFAULT_METRIC_CAPS[key]);
  const midValue = Number((effectiveCap / 2).toFixed(4));

  return (
    <aside
      className="metric-legend"
      aria-label={`${details.label} map legend`}
    >
      <div className="legend-header">
        <div className="legend-title">
          <span>{details.label}</span>
          <span className="legend-unit">({details.unit})</span>
        </div>
        <span className="legend-scope">
          {isCountyView ? "County" : "State avg"}
        </span>
      </div>

      <div className="legend-subtitle">{details.fullName}</div>

      <div
        className="legend-gradient"
        style={{
          background: `linear-gradient(to right, ${GRADIENT_STOPS.join(", ")})`,
        }}
      />

      <div className="legend-range" aria-label="Metric value range">
        <span>0</span>
        <span>{midValue}</span>
        <span>{effectiveCap}+</span>
      </div>

      <div className="legend-labels">
        <span>Low</span>
        <span>Moderate</span>
        <span>High (capped)</span>
      </div>

      <div className="legend-note">
        <div>{details.higherMeaning}</div>
        <div className="legend-elevation-note">
          {hasElevation
            ? "Color & 3D height scale with value"
            : "Color scales with value"}
        </div>
      </div>

      <div className="legend-missing">
        <span className="missing-swatch" aria-hidden="true" />
        <span>No data</span>
      </div>
    </aside>
  );
}
