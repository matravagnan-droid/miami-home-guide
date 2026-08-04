"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

// FEMA's flood hazard layer has its own minimum scale and simply doesn't
// draw anything below it — that scale works out to almost exactly Leaflet
// zoom 14. Default to that zoom (centered on South Beach, a flood-prone,
// recognizable spot) so the map shows real color on first load instead of
// an empty basemap.
const DEFAULT_CENTER = [25.7907, -80.13];
const DEFAULT_ZOOM = 14;
const MIN_FETCH_ZOOM = 13;

const FEMA_QUERY_URL = "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query";

const ZONE_COLORS = {
  floodway: "rgb(255,0,0)",
  high: "rgb(0,230,255)",
  moderate: "rgb(255,128,0)",
};

// Classifies a Flood Hazard Zones feature into one of the three legend
// categories, or null for minimal-risk Zone X (left unrendered).
function classify(props) {
  const subty = (props.ZONE_SUBTY || "").toUpperCase();
  if (subty.includes("FLOODWAY")) return "floodway";
  if (props.SFHA_TF === "T") return "high";
  if (subty.includes("0.2 PCT")) return "moderate";
  return null;
}

export default function FloodMap() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);
  const requestIdRef = useRef(0);
  const { t } = useLanguage();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
        DEFAULT_CENTER,
        DEFAULT_ZOOM
      );
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        maxZoom: 18,
      }).addTo(map);
      mapRef.current = map;

      const fetchZones = async () => {
        if (cancelled) return;

        if (map.getZoom() < MIN_FETCH_ZOOM) {
          if (layerRef.current) {
            map.removeLayer(layerRef.current);
            layerRef.current = null;
          }
          setStatus("zoomedOut");
          return;
        }

        const requestId = ++requestIdRef.current;
        setStatus("loading");
        const b = map.getBounds();
        const bbox = [b.getWest(), b.getSouth(), b.getEast(), b.getNorth()].join(",");

        try {
          const res = await fetch(
            `${FEMA_QUERY_URL}?geometry=${bbox}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=FLD_ZONE,ZONE_SUBTY,SFHA_TF&returnGeometry=true&outSR=4326&f=geojson&resultRecordCount=1000`
          );
          if (!res.ok) throw new Error("FEMA request failed");
          const geojson = await res.json();
          if (cancelled || requestId !== requestIdRef.current) return;

          if (layerRef.current) {
            map.removeLayer(layerRef.current);
          }
          layerRef.current = L.geoJSON(geojson, {
            filter: (feature) => classify(feature.properties) !== null,
            style: (feature) => ({
              color: "#071f24",
              weight: 0.5,
              fillColor: ZONE_COLORS[classify(feature.properties)],
              fillOpacity: 0.55,
            }),
          }).addTo(map);
          setStatus("ready");
        } catch (err) {
          if (!cancelled && requestId === requestIdRef.current) setStatus("error");
        }
      };

      map.on("moveend", fetchZones);
      fetchZones();
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
      {status === "loading" && <span className="map-status">{t.flood.loading}</span>}
      {status === "error" && <span className="map-status">{t.flood.error}</span>}
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
