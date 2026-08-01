"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

// Both of these are the counties' own public GIS feature services — live
// official data, no API key needed.
const SOURCES = {
  "miami-dade": {
    url: "https://services.arcgis.com/8Pc9XBTAsYuxx9Ny/arcgis/rest/services/HurricaneEvacZone_gdb/FeatureServer/0",
    zoneField: "ZONEID",
    center: [25.62, -80.4],
    zoom: 10,
    pageSize: 2000,
  },
  broward: {
    url: "https://services.arcgis.com/JMAJrTsHNLrSsWf5/arcgis/rest/services/EvacuationZones/FeatureServer/1",
    zoneField: "PLAN_",
    center: [26.15, -80.25],
    zoom: 10,
    pageSize: 2000,
  },
};

const ZONE_COLORS = {
  A: "#c0392b",
  B: "#e8703a",
  C: "#e0b53c",
  D: "#8bb06a",
  E: "#4f8a5b",
};

async function fetchAllFeatures(source) {
  const { url, pageSize } = source;
  let offset = 0;
  let all = [];
  for (let i = 0; i < 5; i++) {
    const res = await fetch(
      `${url}/query?where=1=1&outFields=${source.zoneField}&f=geojson&outSR=4326&geometryPrecision=4&resultRecordCount=${pageSize}&resultOffset=${offset}`
    );
    const data = await res.json();
    const features = data.features || [];
    all = all.concat(features);
    if (features.length < pageSize) break;
    offset += pageSize;
  }
  return all;
}

export default function HurricaneMap() {
  const { t } = useLanguage();
  const [countyId, setCountyId] = useState("miami-dade");
  const [status, setStatus] = useState("loading");
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const source = SOURCES[countyId];

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, { scrollWheelZoom: false });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
          maxZoom: 18,
        }).addTo(mapRef.current);
      }
      const map = mapRef.current;
      map.setView(source.center, source.zoom);

      if (layerRef.current) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }

      setStatus("loading");
      try {
        const features = await fetchAllFeatures(source);
        if (cancelled) return;
        const geojson = { type: "FeatureCollection", features };
        layerRef.current = L.geoJSON(geojson, {
          style: (feature) => {
            const zone = feature.properties[source.zoneField];
            return {
              color: "#071f24",
              weight: 0.5,
              fillColor: ZONE_COLORS[zone] || "#9aa39f",
              fillOpacity: 0.55,
            };
          },
          onEachFeature: (feature, layer) => {
            const zone = feature.properties[source.zoneField];
            layer.bindPopup(`${t.hurricane.zoneLabel} ${zone || "—"}`);
          },
        }).addTo(map);
        setStatus("ready");
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [countyId, t]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-wrap">
      <div className="map-toolbar">
        <label className="calc-field">
          <span>{t.propertyTax.county}</span>
          <select value={countyId} onChange={(e) => setCountyId(e.target.value)}>
            <option value="miami-dade">{t.countyLabels["miami-dade"]}</option>
            <option value="broward">{t.countyLabels.broward}</option>
          </select>
        </label>
        {status === "loading" && <span className="map-status">{t.hurricane.loading}</span>}
        {status === "error" && <span className="map-status">{t.hurricane.error}</span>}
      </div>
      <div ref={containerRef} className="map-canvas" />
      <div className="map-legend">
        <span className="map-legend-item"><span className="map-dot" style={{ background: ZONE_COLORS.A }} />{t.hurricane.legendA}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: ZONE_COLORS.C }} />{t.hurricane.legendMid}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: ZONE_COLORS.E }} />{t.hurricane.legendE}</span>
      </div>
      <p className="map-note">
        {t.hurricane.disclaimer}{" "}
        <a href="https://www.miamidade.gov/global/emergency/hurricane/emergency-information-lookup.page" target="_blank" rel="noopener noreferrer">
          {t.hurricane.disclaimerLinkMD}
        </a>{" "}
        {t.hurricane.disclaimerOr}{" "}
        <a href="https://www.broward.org/Hurricane/Pages/EvacuationZones.aspx" target="_blank" rel="noopener noreferrer">
          {t.hurricane.disclaimerLinkBR}
        </a>
        .
      </p>
    </div>
  );
}
