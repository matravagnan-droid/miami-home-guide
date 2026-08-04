// Fetched server-side (build time / ISR) rather than from the visitor's
// browser — Overpass's public instance is a shared, rate-limited service
// that's too slow and unreliable to call live on every page load. Baking
// results in via revalidate keeps the map fast and resilient to Overpass
// having a bad day.
const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const REVALIDATE_SECONDS = 60 * 60 * 24 * 7; // weekly

function classify(tags) {
  if (!tags) return null;
  if (tags.shop === "supermarket") return "supermarket";
  if (tags.amenity === "restaurant") return "restaurant";
  if (tags.amenity === "school") return "school";
  if (["cinema", "theatre", "nightclub"].includes(tags.amenity)) return "entertainment";
  if (["park", "golf_course"].includes(tags.leisure)) return "entertainment";
  if (tags.tourism === "museum") return "entertainment";
  return null;
}

function buildQuery(lat, lng) {
  return `[out:json][timeout:25];
(
  nwr["shop"="supermarket"]["name"](around:2000,${lat},${lng});
);
out center 6;
(
  nwr["amenity"="restaurant"]["name"](around:1300,${lat},${lng});
);
out center 10;
(
  nwr["amenity"="school"]["name"](around:2000,${lat},${lng});
);
out center 8;
(
  nwr["amenity"~"^(cinema|theatre|nightclub)$"]["name"](around:2000,${lat},${lng});
  nwr["leisure"~"^(park|golf_course)$"]["name"](around:2000,${lat},${lng});
  nwr["tourism"="museum"]["name"](around:2000,${lat},${lng});
);
out center 10;`;
}

export async function getNearbyPlaces([lat, lng]) {
  try {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      body: buildQuery(lat, lng),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const data = await res.json();

    return (data.elements || [])
      .map((el) => {
        const category = classify(el.tags);
        if (!category || !el.tags?.name) return null;
        const placeLat = el.lat ?? el.center?.lat;
        const placeLng = el.lon ?? el.center?.lon;
        if (placeLat == null || placeLng == null) return null;
        return { category, name: el.tags.name, lat: placeLat, lng: placeLng };
      })
      .filter(Boolean);
  } catch (err) {
    return [];
  }
}
