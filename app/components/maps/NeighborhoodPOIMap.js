"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const COLORS = {
  supermarket: "#4a90a4",
  restaurant: "#a9762f",
  school: "#103f45",
  entertainment: "#c0392b",
};

export default function NeighborhoodPOIMap({ center, pois }) {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(center, 14);
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 18,
      }).addTo(map);
      mapRef.current = map;

      (pois || []).forEach((place) => {
        const marker = L.circleMarker([place.lat, place.lng], {
          radius: 6,
          color: "#071f24",
          weight: 1,
          fillColor: COLORS[place.category],
          fillOpacity: 0.9,
        }).addTo(map);
        marker.bindPopup(`<strong>${place.name}</strong>`);
      });
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, pois]);

  return (
    <div className="map-wrap neighborhood-poi-map">
      <div ref={containerRef} className="map-canvas" />
      {(!pois || pois.length === 0) && <span className="map-status">{t.neighborhoodPage.poiEmpty}</span>}
      <div className="map-legend">
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.supermarket }} />{t.neighborhoodPage.poiSupermarket}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.restaurant }} />{t.neighborhoodPage.poiRestaurant}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.school }} />{t.neighborhoodPage.poiSchool}</span>
        <span className="map-legend-item"><span className="map-dot" style={{ background: COLORS.entertainment }} />{t.neighborhoodPage.poiEntertainment}</span>
      </div>
      <p className="map-note">{t.neighborhoodPage.poiNote}</p>
    </div>
  );
}
