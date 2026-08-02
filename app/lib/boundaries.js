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

export function cityMatchName(cityId) {
  if (cityId === "unincorporated-md" || cityId === "unincorporated-br") return null;
  return cityId.split("-").join(" ");
}
