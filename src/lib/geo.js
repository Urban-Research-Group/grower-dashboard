const BASE = import.meta.env.BASE_URL

let countiesPromise = null

// The navbar search and the map both need county shapes. Share one request
// so the file is downloaded and parsed only once.
export function loadCountiesGeojson() {
  if (!countiesPromise) {
    countiesPromise = fetch(`${BASE}counties.geojson`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .catch((err) => {
        countiesPromise = null // allow a retry on the next call
        throw err
      })
  }
  return countiesPromise
}
