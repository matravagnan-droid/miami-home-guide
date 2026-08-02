// Official county GIS municipal-boundary layers (public ArcGIS REST services,
// no API key). Shared by the search-homes map (outline checked cities) and
// the median-prices map (click any city to select it).
export const BOUNDARY_SOURCES = {
  "miami-dade": {
    url: "https://services.arcgis.com/8Pc9XBTAsYuxx9Ny/arcgis/rest/services/Municipalitypoly_gdb/FeatureServer/0/query?where=1%3D1&outFields=NAME&f=geojson",
    nameField: "NAME",
  },
  broward: {
    url: "https://bcgishub.broward.org/server/rest/services/GeoHubDownloads/Broward_County_Cities/MapServer/0/query?where=1%3D1&outFields=CITYNAME&f=geojson",
    nameField: "CITYNAME",
  },
};

export const normalizeName = (s) => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "");

// A few city ids don't map to their county GIS dataset's NAME/CITYNAME field
// by simple hyphen-to-space conversion — confirmed against the live data.
const NAME_OVERRIDES = {
  "indian-creek": "indian creek village",
  "unincorporated-md": "unincorporated miami dade",
  "unincorporated-br": "bmsd",
};

export function cityMatchName(cityId) {
  if (NAME_OVERRIDES[cityId]) return NAME_OVERRIDES[cityId];
  return cityId.split("-").join(" ");
}
