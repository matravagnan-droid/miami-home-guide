"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const FEMA_NFHL_URL = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer";

// FEMA's flood hazard layer has its own minimum scale and simply doesn't
// draw anything below it — that scale works out to almost exactly Leaflet
// zoom 14. Default to that zoom (centered on South Beach, a flood-prone,
// recognizable spot) so the map shows real color on first load instead of
// an empty basemap.
const DEFAULT_CENTER = [25.7907, -80.13];
const DEFAULT_ZOOM = 14;

export default function FloodMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      await import("esri-leaflet");
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
        DEFAULT_CENTER,
        DEFAULT_ZOOM
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      // Layer 28 = "Flood Hazard Zones" on FEMA's public National Flood
      // Hazard Layer service — live official data, no API key needed.
      L.esri
        .dynamicMapLayer({
          url: FEMA_NFHL_URL,
          layers: [28],
          opacity: 0.75,
          f: "image",
        })
        .addTo(map);

      mapRef.current = map;
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-wrap">
      <div ref={containerRef} className="map-canvas" />
      <div className="map-legend">
        <span className="map-legend-item"><span className="map-dot" style={{ background: "rgb(0,230,255)" }} />{t.flood.legendHigh}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: "rgb(255,128,0)" }} />{t.flood.legendModerate}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: "rgb(255,0,0)" }} />{t.flood.legendFloodway}</span>
      </div>
      <p className="map-note">
        {t.flood.zoomNote} {t.flood.disclaimer}{" "}
        <a href="https://msc.fema.gov/portal/search" target="_blank" rel="noopener noreferrer">
          {t.flood.disclaimerLink}
        </a>
        .
      </p>
    </div>
  );
}
