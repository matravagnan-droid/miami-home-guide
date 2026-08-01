"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

// Curated list of long-established, widely-recognized Miami-Dade and
// Broward schools. Coordinates are approximate (campus/neighborhood level).
// We deliberately do NOT show a specific letter grade here — Florida's
// school grades are re-issued every year and we'd rather send people to
// the official source than risk showing a stale one. See the disclaimer.
const SCHOOLS = [
  { name: "Design and Architecture Senior High (DASH)", type: "magnet", lat: 25.8100, lng: -80.1936 },
  { name: "MAST Academy", type: "magnet", lat: 25.7350, lng: -80.1610 },
  { name: "Coral Reef Senior High", type: "magnet", lat: 25.6187, lng: -80.3378 },
  { name: "Miami Palmetto Senior High", type: "zoned", lat: 25.6615, lng: -80.2999 },
  { name: "Coral Gables Senior High", type: "zoned", lat: 25.7215, lng: -80.2685 },
  { name: "Doral Academy", type: "zoned", lat: 25.8195, lng: -80.3553 },
  { name: "Ransom Everglades School", type: "private", lat: 25.7280, lng: -80.2400 },
  { name: "Gulliver Preparatory School", type: "private", lat: 25.6725, lng: -80.2965 },
  { name: "Marjory Stoneman Douglas High School", type: "zoned", lat: 26.3100, lng: -80.2706 },
  { name: "Nova High School", type: "magnet", lat: 26.0765, lng: -80.2410 },
  { name: "Western High School", type: "zoned", lat: 26.0870, lng: -80.2757 },
  { name: "Cardinal Gibbons High School", type: "private", lat: 26.1489, lng: -80.1560 },
  { name: "Pine Crest School", type: "private", lat: 26.1584, lng: -80.1256 },
];

const COLORS = { magnet: "#e8703a", zoned: "#0e4749", private: "#4a90a4" };

export default function SchoolsMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView([26.05, -80.22], 10);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18,
      }).addTo(map);

      SCHOOLS.forEach((school) => {
        const marker = L.circleMarker([school.lat, school.lng], {
          radius: 8,
          color: "#082e30",
          weight: 1.5,
          fillColor: COLORS[school.type] || COLORS.zoned,
          fillOpacity: 0.9,
        }).addTo(map);
        marker.bindPopup(`<strong>${school.name}</strong>`);
      });

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
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.magnet }} />{t.schools.legendMagnet}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.zoned }} />{t.schools.legendZoned}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.private }} />{t.schools.legendPrivate}</span>
      </div>
      <p className="map-note">
        {t.schools.disclaimer}{" "}
        <a href="https://edudata.fldoe.org/ReportCards/" target="_blank" rel="noopener noreferrer">
          {t.schools.disclaimerLink}
        </a>
        .
      </p>
    </div>
  );
}
