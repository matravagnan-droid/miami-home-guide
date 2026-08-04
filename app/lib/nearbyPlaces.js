// Fetched server-side (build time / ISR) rather than from the visitor's
// browser — Overpass's public instance is a shared, rate-limited service
// that's too slow and unreliable to call live on every page load. Baking
// results in via revalidate keeps the map fast and resilient to Overpass
// having a bad day.
//
// One combined multi-category query reliably times out server-side on
// Overpass (confirmed directly — a single `around` search per category is
// fast, but stacking several in one query pushes it well past Overpass's
// own runtime limit). Querying each category separately, with its own
// timeout and a retry, is far more likely to actually come back with data.
const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const REVALIDATE_SECONDS = 60 * 60 * 24 * 7; // weekly
const REQUEST_TIMEOUT_MS = 20000;

const CATEGORY_QUERIES = {
  supermarket: (lat, lng) => `[out:json][timeout:18];node["shop"="supermarket"]["name"](around:2000,${lat},${lng});out body 6;`,
  restaurant: (lat, lng) => `[out:json][timeout:18];node["amenity"="restaurant"]["name"](around:1200,${lat},${lng});out body 10;`,
  school: (lat, lng) => `[out:json][timeout:18];node["amenity"="school"]["name"](around:2000,${lat},${lng});out body 8;`,
  entertainment: (lat, lng) => `[out:json][timeout:18];(node["amenity"~"^(cinema|theatre|nightclub)$"]["name"](around:2000,${lat},${lng});node["leisure"~"^(park|golf_course)$"]["name"](around:2000,${lat},${lng});node["tourism"="museum"]["name"](around:2000,${lat},${lng}););out body 10;`,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchCategory(category, buildQuery, lat, lng, attempt = 0) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      body: buildQuery(lat, lng),
      signal: controller.signal,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`overpass ${category} failed: ${res.status}`);
    const data = await res.json();
    if (data.remark) throw new Error(`overpass ${category} remark: ${data.remark}`);

    return (data.elements || [])
      .filter((el) => el.tags?.name && el.lat != null && el.lon != null)
      .map((el) => ({ category, name: el.tags.name, lat: el.lat, lng: el.lon }));
  } catch (err) {
    clearTimeout(timer);
    if (attempt < 1) {
      await sleep(1500);
      return fetchCategory(category, buildQuery, lat, lng, attempt + 1);
    }
    return [];
  }
}

export async function getNearbyPlaces([lat, lng]) {
  const results = [];
  // Sequential rather than parallel — spreads requests out instead of
  // bursting four at once against a shared, rate-limited public API.
  for (const [category, buildQuery] of Object.entries(CATEGORY_QUERIES)) {
    const places = await fetchCategory(category, buildQuery, lat, lng);
    results.push(...places);
  }
  return results;
}
