import { BOUNDARY_SOURCES } from "./boundaries";

// City of Miami's own neighborhood layer — the small, informal areas like
// Brickell or Wynwood aren't separate municipalities, so they don't exist
// in the county municipality layer used elsewhere on this site.
const MIAMI_NEIGHBORHOODS_URL = "https://gis.miami.gov/gis/rest/services/Maps/Neighborhoods/MapServer/0/query";

// Each of these popular neighborhood names is actually made up of several
// smaller officially-named sub-areas in the city's own GIS data — grouped
// here the way they're commonly referred to. Confirmed against the live
// NEIGHBORHOOD field values.
const MIAMI_SUBNAMES = {
  brickell: ["Brickell Business District", "Brickell Key", "Brickell Residential District", "Brickell Village"],
  wynwood: ["Wynwood Industrial District"],
  "coconut-grove": ["North Grove", "South Grove", "East Grove", "West Grove", "Grove Center", "South Grove Bayside"],
  downtown: ["CBD", "Government Center", "Bicentennial Park", "Omni/PAC", "Parkwest", "Riverfront"],
  "midtown-edgewater": ["Midtown", "Edgewater"],
};

// Standalone incorporated cities are matched against the county municipality
// boundary layer already used by the search-homes and median-prices maps.
// Kendall has no boundary of its own (unincorporated); Pinecrest, its
// incorporated neighbor, stands in.
const STANDALONE_CITY_SOURCE = {
  "coral-gables": { county: "miami-dade", name: "CORAL GABLES" },
  doral: { county: "miami-dade", name: "DORAL" },
  "miami-beach": { county: "miami-dade", name: "MIAMI BEACH" },
  hialeah: { county: "miami-dade", name: "HIALEAH" },
  "miami-gardens": { county: "miami-dade", name: "MIAMI GARDENS" },
  "sunny-isles-beach": { county: "miami-dade", name: "SUNNY ISLES BEACH" },
  aventura: { county: "miami-dade", name: "AVENTURA" },
  "hallandale-beach": { county: "broward", name: "HALLANDALE BEACH" },
  "kendall-pinecrest": { county: "miami-dade", name: "PINECREST" },
};

// Broward's GIS server 403s plain server-to-server requests without a
// browser-like User-Agent — confirmed live.
const FETCH_HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; MiamiHomeGuideBot/1.0; +https://mymiamihomeguide.com)",
};

const REVALIDATE_SECONDS = 60 * 60 * 24 * 30; // boundaries don't change — monthly is plenty

async function fetchGeoJSON(url) {
  const res = await fetch(url, { headers: FETCH_HEADERS, next: { revalidate: REVALIDATE_SECONDS } });
  if (!res.ok) throw new Error("boundary request failed");
  return res.json();
}

export async function getNeighborhoodBoundary(slug) {
  try {
    if (MIAMI_SUBNAMES[slug]) {
      const names = MIAMI_SUBNAMES[slug].map((n) => `'${n.replace(/'/g, "''")}'`).join(",");
      const where = encodeURIComponent(`NEIGHBORHOOD IN (${names})`);
      const url = `${MIAMI_NEIGHBORHOODS_URL}?where=${where}&outFields=NEIGHBORHOOD&returnGeometry=true&outSR=4326&f=geojson`;
      return await fetchGeoJSON(url);
    }

    const standalone = STANDALONE_CITY_SOURCE[slug];
    if (standalone) {
      const source = BOUNDARY_SOURCES[standalone.county];
      const baseUrl = source.url.split("?")[0];
      const where = encodeURIComponent(`${source.nameField}='${standalone.name}'`);
      const url = `${baseUrl}?where=${where}&outFields=${source.nameField}&returnGeometry=true&outSR=4326&f=geojson`;
      return await fetchGeoJSON(url);
    }

    return null;
  } catch (err) {
    return null;
  }
}
