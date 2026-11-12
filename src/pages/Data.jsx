import { useEffect, useMemo, useState } from "react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import dataManifest from "virtual:data-manifest"

const BASE = import.meta.env.BASE_URL

const STATE_NAMES = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi",
  MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire",
  NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina",
  ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania",
  RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota", TN: "Tennessee",
  TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia", WA: "Washington",
  WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
}

// { AL: ["2025_08", ...], ... } generated from public/historical at build time
const HISTORICAL_MONTHS_BY_STATE = dataManifest.historical

const STATE_OPTIONS = Object.keys(HISTORICAL_MONTHS_BY_STATE)
  .map((code) => ({ label: STATE_NAMES[code] || code, value: code }))
  .sort((a, b) => a.label.localeCompare(b.label))

const TIMEFRAME_OPTIONS = [
  { label: "1 week", value: "7" },
  { label: "1 month", value: "30" },
  { label: "3 months", value: "90" },
  { label: "6 months", value: "180" },
  { label: "1 year", value: "365" },
  { label: "All", value: "all" },
]

const METRIC_OPTIONS = ["SAIDI", "SAIFI"]

function parseMetricValue(rawValue) {
  if (!rawValue) return 0
  if (rawValue.startsWith("<")) return Number(rawValue.slice(1)) || 0
  return Number(rawValue) || 0
}

function parseCsvRows(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean)
  if (lines.length < 2) return []

  const headers = lines[0].split(",")
  const headerIndex = headers.reduce((acc, header, index) => {
    acc[header.trim()] = index
    return acc
  }, {})

  return lines
    .slice(1)
    .map((line) => {
      const cells = line.split(",")
      const dateText = cells[headerIndex.Date]?.trim()
      const county = cells[headerIndex.County]?.trim()
      const stateName = cells[headerIndex.State]?.trim()

      if (!dateText || !county || !stateName) return null

      return {
        county,
        state: stateName,
        date: dateText,
        timestamp: new Date(dateText).getTime(),
        SAIDI: parseMetricValue(cells[headerIndex.SAIDI]?.trim()),
        SAIFI: parseMetricValue(cells[headerIndex.SAIFI]?.trim()),
      }
    })
    .filter(Boolean)
}

const DAY_MS = 24 * 60 * 60 * 1000

// Only the months the chosen timeframe can reach, instead of every month on file.
// The window starts from the first day of the newest month, so it never cuts
// off data the chart could show.
function monthsForTimeframe(months, timeframe) {
  if (timeframe === "all" || !months.length) return months

  const [latestYear, latestMonth] = months[months.length - 1].split("_").map(Number)
  const cutoff = Date.UTC(latestYear, latestMonth - 1, 1) - Number(timeframe) * DAY_MS

  return months.filter((month) => {
    const [year, monthNumber] = month.split("_").map(Number)
    const monthEnd = Date.UTC(year, monthNumber, 1)
    return monthEnd > cutoff
  })
}

// path -> Promise<rows>, so switching timeframe or state back and forth
// never downloads the same month twice
const monthCache = new Map()

function fetchMonthRows(path) {
  if (!monthCache.has(path)) {
    const request = fetch(`${BASE}${path}`)
      .then((response) => (response.ok ? response.text() : ""))
      .then(parseCsvRows)
      .catch(() => {
        monthCache.delete(path)
        return []
      })
    monthCache.set(path, request)
  }
  return monthCache.get(path)
}

async function fetchStateRows(stateCode, timeframe) {
  const months = monthsForTimeframe(HISTORICAL_MONTHS_BY_STATE[stateCode] || [], timeframe)
  const responses = await Promise.all(
    months.map((month) => fetchMonthRows(`historical/${stateCode}/${month}.csv`)),
  )

  const deduped = new Map()
  for (const rows of responses) {
    rows.forEach((row) => {
      deduped.set(`${row.county}|${row.date}`, row)
    })
  }

  return Array.from(deduped.values()).sort((a, b) => a.timestamp - b.timestamp)
}

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  })
}

function Data() {
  const [stateCode, setStateCode] = useState("")
  const [selectedCounty, setCounty] = useState("")
  const [timeframe, setTimeframe] = useState("30")
  const [metric, setMetric] = useState("SAIDI")
  // Result of the latest finished request, tagged with what it was for
  const [result, setResult] = useState({ key: "", rows: [], error: "" })
  const requestKey = stateCode ? `${stateCode}|${timeframe}` : ""
  const loading = Boolean(requestKey) && result.key !== requestKey
  const rows = result.rows
  const errorMessage = loading ? "" : result.error

  // Load only the selected state, and only the months the timeframe needs
  useEffect(() => {
    if (!stateCode) return

    const key = `${stateCode}|${timeframe}`
    let cancelled = false

    fetchStateRows(stateCode, timeframe)
      .then((nextRows) => {
        if (cancelled) return
        setResult({
          key,
          rows: nextRows,
          error: nextRows.length ? "" : `No historical files were found for ${stateCode}.`,
        })
      })
      .catch(() => {
        if (!cancelled) {
          setResult({ key, rows: [], error: "Failed to load historical data files." })
        }
      })

    return () => {
      cancelled = true
    }
  }, [stateCode, timeframe])

  const counties = useMemo(() => {
    if (!stateCode) return []
    return [...new Set(rows.map((row) => row.county))].sort((a, b) =>
      a.localeCompare(b),
    )
  }, [stateCode, rows])

  // A county picked for a different state no longer counts as selected
  const county = counties.includes(selectedCounty) ? selectedCounty : ""

  const chartRows = useMemo(() => {
    if (!stateCode || !county) return []

    const rowsForCounty = rows.filter(
      (row) => row.county === county,
    )

    if (!rowsForCounty.length) return []
    if (timeframe === "all") return rowsForCounty

    const days = Number(timeframe)
    const latestTimestamp = rowsForCounty[rowsForCounty.length - 1].timestamp
    const cutoff = latestTimestamp - days * 24 * 60 * 60 * 1000

    return rowsForCounty.filter((row) => row.timestamp >= cutoff)
  }, [county, stateCode, rows, timeframe])

  return (
    <main className="flex h-full min-h-0 flex-col gap-6 p-6">
      <div className="flex flex-wrap items-end gap-3">
        <Select
          value={stateCode}
          onValueChange={setStateCode}
          items={STATE_OPTIONS}
        >
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectPopup>
            {STATE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>

        <Select
          value={county}
          onValueChange={setCounty}
          items={counties.map((item) => ({ label: item, value: item }))}
          disabled={!stateCode}
        >
          <SelectTrigger className="w-52">
            <SelectValue placeholder="Select county" />
          </SelectTrigger>
          <SelectPopup>
            {counties.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>

        <Select
          value={timeframe}
          onValueChange={setTimeframe}
          items={TIMEFRAME_OPTIONS}
        >
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {TIMEFRAME_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>

        <div className="ml-auto inline-flex rounded-md border border-border p-1">
          {METRIC_OPTIONS.map((metricOption) => (
            <Button
              key={metricOption}
              variant={metric === metricOption ? "default" : "ghost"}
              size="sm"
              onClick={() => setMetric(metricOption)}
            >
              {metricOption}
            </Button>
          ))}
        </div>
      </div>

      <section className="min-h-0 flex-1 rounded-lg border border-border bg-background p-4">
        {loading && (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Loading historical data...
          </div>
        )}

        {!loading && errorMessage && (
          <div className="flex h-full items-center justify-center text-sm text-destructive">
            {errorMessage}
          </div>
        )}

        {!loading && !errorMessage && (!stateCode || !county) && (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Select a state and county to view metrics over time.
          </div>
        )}

        {!loading && !errorMessage && stateCode && county && !chartRows.length && (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No data available for this selection and timeframe.
          </div>
        )}

        {!loading && !errorMessage && chartRows.length > 0 && (
          <div className="h-full min-h-[350px]">
            <div className="mb-2 text-sm font-medium">
              {county}, {stateCode} - {metric}
            </div>
            <ResponsiveContainer width="100%" height="92%">
              <LineChart data={chartRows}>
                <XAxis
                  dataKey="date"
                  tickFormatter={formatDate}
                  tick={{ fontSize: 12 }}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value) => [Number(value).toFixed(4), metric]}
                  labelFormatter={(label) => `Date: ${label}`}
                />
                <Line
                  type="linear"
                  dataKey={metric}
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
    </main>
  )
}

export default Data
