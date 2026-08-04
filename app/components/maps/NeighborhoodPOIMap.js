"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const COLORS = {
  supermarket: "#4a90a4",
  restaurant: "#a9762f",
  school: "#103f45",
  entertainment: "#c0392b",
};

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
  return `[out:json][timeout:20];
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

export default function NeighborhoodPOIMap({ center }) {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [status, setStatus] = useState("loading");

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

      setStatus("loading");
      try {
        const [lat, lng] = center;
        const res = await fetch("https://overpass-api.de/api/interpreter", {
          method: "POST",
          body: buildQuery(lat, lng),
        });
        if (!res.ok) throw new Error("overpass error");
        const data = await res.json();
        if (cancelled) return;

        (data.elements || []).forEach((el) => {
          const category = classify(el.tags);
          if (!category) return;
          const lat2 = el.lat ?? el.center?.lat;
          const lng2 = el.lon ?? el.center?.lon;
          if (lat2 == null || lng2 == null) return;
          const marker = L.circleMarker([lat2, lng2], {
            radius: 6,
            color: "#071f24",
            weight: 1,
            fillColor: COLORS[category],
            fillOpacity: 0.9,
          }).addTo(map);
          marker.bindPopup(`<strong>${el.tags.name}</strong>`);
        });
        setStatus("ready");
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [center]);

  return (
    <div className="map-wrap neighborhood-poi-map">
      <div ref={containerRef} className="map-canvas" />
      {status === "loading" && <span className="map-status">{t.neighborhoodPage.poiLoading}</span>}
      {status === "error" && <span className="map-status">{t.neighborhoodPage.poiError}</span>}
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
