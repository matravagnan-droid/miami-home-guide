"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

export default function NeighborhoodBoundaryMap({ center, boundary }) {
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

      if (boundary && boundary.features?.length) {
        const boundaryLayer = L.geoJSON(boundary, {
          style: {
            color: "#a9762f",
            weight: 2,
            fillColor: "#a9762f",
            fillOpacity: 0.08,
          },
        }).addTo(map);
        map.fitBounds(boundaryLayer.getBounds(), { padding: [16, 16] });
      }
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center, boundary]);

  return (
    <div className="map-wrap neighborhood-poi-map">
      <div ref={containerRef} className="map-canvas" />
    </div>
  );
}
