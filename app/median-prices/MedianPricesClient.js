"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import { COUNTIES } from "../lib/counties";
import { BOUNDARY_SOURCES, normalizeName, cityMatchName } from "../lib/boundaries";
import { getNeighborhood } from "../lib/neighborhoods";
import { MEDIAN_PRICES } from "../lib/medianPrices";

const DEFAULT_CENTER = [26.05, -80.25];
const DEFAULT_ZOOM = 10;

const DEFAULT_STYLE = { color: "#a9762f", weight: 1, fillColor: "#103f45", fillOpacity: 0.04 };
const HOVER_STYLE = { color: "#a9762f", weight: 2, fillColor: "#103f45", fillOpacity: 0.12 };
const SELECTED_STYLE = { color: "#a9762f", weight: 3, fillColor: "#103f45", fillOpacity: 0.28 };

export default function MedianPricesClient() {
  const { t, lang } = useLanguage();
  const [leafletReady, setLeafletReady] = useState(false);
  const [selected, setSelected] = useState(null);

  const mapNodeRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layersRef = useRef({});
  const selectedKeyRef = useRef(null);

  const locale = lang === "es" ? "es-US" : "en-US";
  const money = (n) => n.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  // Load Leaflet from a CDN (no API key needed) once, client-side only.
  useEffect(() => {
    if (typeof window === "undefined" || window.L) {
      if (window.L) setLeafletReady(true);
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => setLeafletReady(true);
    document.body.appendChild(script);
  }, []);

  function selectCity(key, county, cityId) {
    const prevKey = selectedKeyRef.current;
    if (prevKey && layersRef.current[prevKey]) {
      layersRef.current[prevKey].setStyle(DEFAULT_STYLE);
    }
    const layer = layersRef.current[key];
    if (layer) {
      layer.setStyle(SELECTED_STYLE);
      if (layer.bringToFront) layer.bringToFront();
      const map = mapInstanceRef.current;
      if (map && layer.getBounds) {
        map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 13 });
      }
    }
    selectedKeyRef.current = key;
    setSelected({ county, cityId });
  }

  // Initialize the map and load every county's real municipal boundaries once Leaflet is ready.
  useEffect(() => {
    if (!leafletReady || !mapNodeRef.current || mapInstanceRef.current) return;
    const L = window.L;
    if (!L) return;

    const map = L.map(mapNodeRef.current).setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
      maxZoom: 19,
      subdomains: "abcd",
    }).addTo(map);
    mapInstanceRef.current = map;

    let cancelled = false;

    async function loadCounty(countyId) {
      let data;
      try {
        const res = await fetch(BOUNDARY_SOURCES[countyId].url);
        data = await res.json();
      } catch {
        return;
      }
      if (cancelled || !data || !data.features) return;

      const nameField = BOUNDARY_SOURCES[countyId].nameField;
      COUNTIES[countyId].cities.forEach((city) => {
        const wanted = normalizeName(cityMatchName(city.id));
        if (!wanted) return;
        const feature = data.features.find(
          (f) => normalizeName(f.properties && f.properties[nameField]) === wanted
        );
        if (!feature) return;

        const key = `${countyId}:${city.id}`;
        const layer = L.geoJSON(feature, { style: DEFAULT_STYLE });
        layer.on("click", () => selectCity(key, countyId, city.id));
        layer.on("mouseover", () => {
          if (selectedKeyRef.current !== key) layer.setStyle(HOVER_STYLE);
        });
        layer.on("mouseout", () => {
          if (selectedKeyRef.current !== key) layer.setStyle(DEFAULT_STYLE);
        });
        layer.addTo(map);
        layersRef.current[key] = layer;
      });
    }

    loadCounty("miami-dade");
    loadCounty("broward");

    return () => {
      cancelled = true;
    };
  }, [leafletReady]);

  const neighborhood = selected ? getNeighborhood(selected.cityId) : null;
  // Second tier: cities without a curated neighborhoods.js entry may still have a
  // looked-up median from medianPrices.js. Only consulted when neighborhoods.js has
  // nothing for this city, so the two sources never fight over the same city.
  const medianPriceEntry = selected && !neighborhood ? MEDIAN_PRICES[selected.cityId] : null;
  const selectedLabel = selected ? t.cityLabels[selected.county][selected.cityId] : null;
  const singleFamilyValue = neighborhood
    ? neighborhood.pricing.singleFamily.value
    : medianPriceEntry && medianPriceEntry.singleFamily;
  const condoValue = neighborhood
    ? neighborhood.pricing.condo.value
    : medianPriceEntry && medianPriceEntry.condo;

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.medianPrices.eyebrow}</div>
        <h1>{t.medianPrices.h1}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.medianPrices.p}</p>

        <div className="filter-card">
          <h2>{t.medianPrices.mapLabel}</h2>
          <div className="map-search-box">
            <div ref={mapNodeRef} className="map-search-canvas median-map-canvas" />
          </div>

          <div className="median-results">
            {selected ? (
              <>
                <h3>{selectedLabel}</h3>
                <div className="median-stat-row">
                  <div className="median-stat">
                    <span>{t.neighborhoodPage.singleFamilyLabel}</span>
                    <strong>
                      {singleFamilyValue
                        ? money(singleFamilyValue)
                        : neighborhood ? t.neighborhoodPage.noData : t.medianPrices.noDataYet}
                    </strong>
                  </div>
                  <div className="median-stat">
                    <span>{t.neighborhoodPage.condoLabel}</span>
                    <strong>
                      {condoValue
                        ? money(condoValue)
                        : neighborhood ? t.neighborhoodPage.noData : t.medianPrices.noDataYet}
                    </strong>
                  </div>
                </div>
                {medianPriceEntry ? (
                  <p className="map-search-note">{medianPriceEntry.source}</p>
                ) : null}
              </>
            ) : (
              <p className="median-select-prompt">{t.medianPrices.selectPrompt}</p>
            )}
          </div>

          <p className="section-note">{t.medianPrices.disclaimer}</p>
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
