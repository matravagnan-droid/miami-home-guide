"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import { COUNTIES } from "../lib/counties";
import { BOUNDARY_SOURCES, normalizeName, cityMatchName } from "../lib/boundaries";

const NUMBER_OPTIONS = ["1", "2", "3", "4", "5+"];
const STORY_OPTIONS = ["1", "2", "3+"];

const PRICE_MIN = 0;
const PRICE_MAX = 20000000;
const PRICE_STEP = 5000;

const SQFT_MIN = 0;
const SQFT_MAX = 10000;
const SQFT_STEP = 100;

const HOA_MIN = 0;
const HOA_STEP = 25;

const TAX_MIN = 0;
const TAX_STEP = 100;

const YEAR_MIN = 1900;
const YEAR_MAX = 2027;

const DEFAULT_CENTER = [25.9, -80.25];
const DEFAULT_ZOOM = 10;

function PillRadioField({ label, name, options, includeAny, anyLabel }) {
  return (
    <div className="calc-field">
      <span>{label}</span>
      <div className="filter-checkbox-group">
        {includeAny && (
          <label className="filter-checkbox">
            <input type="radio" name={name} value="Any" defaultChecked />
            {anyLabel}
          </label>
        )}
        {options.map((n) => (
          <label className="filter-checkbox" key={n}>
            <input type="radio" name={name} value={n} />
            {n}
          </label>
        ))}
      </div>
    </div>
  );
}

function MoneyInput({ name, min, max, step, placeholder }) {
  return (
    <div className="money-input">
      <span className="money-prefix">$</span>
      <input type="number" name={name} min={min} max={max} step={step} placeholder={placeholder} />
    </div>
  );
}

export default function SearchHomesClient() {
  const { t } = useLanguage();
  const [countyId, setCountyId] = useState("miami-dade");
  const [cityIds, setCityIds] = useState([]);
  const [drawnAreaText, setDrawnAreaText] = useState("");
  const [leafletReady, setLeafletReady] = useState(false);

  const mapNodeRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const drawnLayerRef = useRef(null);
  const boundaryLayerRef = useRef(null);
  const boundaryDataRef = useRef({});

  function handleCountyChange(nextCountyId) {
    setCountyId(nextCountyId);
    setCityIds([]);
  }

  function toggleCity(id) {
    setCityIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const county = COUNTIES[countyId];

  // Load Leaflet + Leaflet.draw from a CDN (no API key needed) once, client-side only.
  useEffect(() => {
    if (typeof window === "undefined" || window.L) {
      if (window.L) setLeafletReady(true);
      return;
    }

    const addLink = (href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    };

    addLink("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
    addLink("https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css");

    const leafletScript = document.createElement("script");
    leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    leafletScript.onload = () => {
      const drawScript = document.createElement("script");
      drawScript.src = "https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.js";
      drawScript.onload = () => setLeafletReady(true);
      document.body.appendChild(drawScript);
    };
    document.body.appendChild(leafletScript);
  }, []);

  // Initialize the map once Leaflet is ready.
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

    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    drawnLayerRef.current = drawnItems;

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        rectangle: true,
        marker: false,
        circle: false,
        circlemarker: false,
        polyline: false,
      },
      edit: { featureGroup: drawnItems },
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (e) => {
      drawnItems.clearLayers();
      drawnItems.addLayer(e.layer);
      const latlngs = e.layer.getLatLngs()[0]
        .map((p) => `${p.lat.toFixed(4)},${p.lng.toFixed(4)}`)
        .join(" | ");
      setDrawnAreaText(latlngs);
    });

    map.on(L.Draw.Event.DELETED, () => setDrawnAreaText(""));

    mapInstanceRef.current = map;
  }, [leafletReady]);

  // Re-center or fit the map to the checked cities.
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const points = cityIds
      .map((id) => county.cities.find((c) => c.id === id))
      .filter(Boolean)
      .map((c) => [c.lat, c.lng]);

    if (points.length === 0) {
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    } else if (points.length === 1) {
      map.setView(points[0], 12);
    } else {
      map.fitBounds(points, { padding: [30, 30] });
    }
  }, [cityIds, county]);

  // Outline the checked cities' real municipal boundaries on the map, pulled
  // from each county's official GIS service and cached after the first fetch.
  useEffect(() => {
    const map = mapInstanceRef.current;
    const L = window.L;
    if (!map || !L) return;
    let cancelled = false;

    async function loadBoundaries() {
      let data = boundaryDataRef.current[countyId];
      if (!data) {
        try {
          const res = await fetch(BOUNDARY_SOURCES[countyId].url);
          data = await res.json();
          boundaryDataRef.current[countyId] = data;
        } catch {
          return;
        }
      }
      if (cancelled || !data || !data.features) return;

      if (boundaryLayerRef.current) {
        map.removeLayer(boundaryLayerRef.current);
        boundaryLayerRef.current = null;
      }

      const nameField = BOUNDARY_SOURCES[countyId].nameField;
      const wanted = new Set(
        cityIds.map((id) => normalizeName(cityMatchName(id))).filter(Boolean)
      );
      const matched = data.features.filter((f) =>
        wanted.has(normalizeName(f.properties && f.properties[nameField]))
      );

      if (matched.length) {
        boundaryLayerRef.current = L.geoJSON(
          { type: "FeatureCollection", features: matched },
          { style: { color: "#a9762f", weight: 2, fillColor: "#103f45", fillOpacity: 0.15 } }
        ).addTo(map);
      }
    }

    loadBoundaries();
    return () => {
      cancelled = true;
    };
  }, [cityIds, countyId]);

  function clearDrawnArea() {
    if (drawnLayerRef.current) drawnLayerRef.current.clearLayers();
    setDrawnAreaText("");
  }

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.searchHomes.eyebrow}</div>
        <h1>{t.searchHomes.h1}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.searchHomes.p}</p>

        <div className="filter-card">
          <h2>{t.searchHomes.filtersHeading}</h2>

          <div className="filter-grid">
            <label className="calc-field filter-grid-full county-field">
              <span>{t.searchHomes.county}</span>
              <select
                name="County"
                value={countyId}
                onChange={(e) => handleCountyChange(e.target.value)}
              >
                {Object.keys(COUNTIES).map((id) => (
                  <option key={id} value={id}>{t.countyLabels[id]}</option>
                ))}
              </select>
            </label>

            <div className="calc-field filter-grid-full">
              <span>{t.searchHomes.cityArea}</span>
              <div className="city-checkbox-box">
                {county.cities.map((c) => (
                  <label className="city-checkbox" key={c.id}>
                    <input
                      type="checkbox"
                      checked={cityIds.includes(c.id)}
                      onChange={() => toggleCity(c.id)}
                    />
                    {t.cityLabels[countyId][c.id]}
                  </label>
                ))}
              </div>
            </div>

            <div className="calc-field filter-grid-full">
              <span>{t.searchHomes.propertyType}</span>
              <div className="filter-checkbox-group">
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Single-family" value="Yes" />
                  {t.searchHomes.typeSingleFamily}
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Multi-family" value="Yes" />
                  {t.searchHomes.typeMultiFamily}
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Townhouse" value="Yes" />
                  {t.searchHomes.typeTownhouse}
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Condo" value="Yes" />
                  {t.searchHomes.typeCondo}
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Villa" value="Yes" />
                  {t.searchHomes.typeVilla}
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" name="Property Type - Land" value="Yes" />
                  {t.searchHomes.typeLand}
                </label>
              </div>
            </div>
          </div>

          <div className="filter-two-col">
            <div className="filter-col">
              <div className="calc-field">
                <span>{t.searchHomes.priceRange}</span>
                <div className="dual-input-row">
                  <MoneyInput name="Min Price" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} placeholder="Min" />
                  <MoneyInput name="Max Price" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} placeholder="Max" />
                </div>
              </div>

              <div className="calc-field">
                <span>{t.searchHomes.sqftRange}</span>
                <div className="dual-input-row">
                  <input type="number" name="Min Sqft" min={SQFT_MIN} max={SQFT_MAX} step={SQFT_STEP} placeholder="Min sqft" />
                  <input type="number" name="Max Sqft" min={SQFT_MIN} max={SQFT_MAX} step={SQFT_STEP} placeholder="Max sqft" />
                </div>
              </div>

              <div className="calc-field">
                <span>{t.searchHomes.hoaRange}</span>
                <div className="dual-input-row">
                  <MoneyInput name="Min HOA Fee" min={HOA_MIN} step={HOA_STEP} placeholder="Min" />
                  <MoneyInput name="Max HOA Fee" min={HOA_MIN} step={HOA_STEP} placeholder="Max" />
                </div>
              </div>

              <div className="calc-field">
                <span>{t.searchHomes.taxRange}</span>
                <div className="dual-input-row">
                  <MoneyInput name="Min Annual Property Tax" min={TAX_MIN} step={TAX_STEP} placeholder="Min" />
                  <MoneyInput name="Max Annual Property Tax" min={TAX_MIN} step={TAX_STEP} placeholder="Max" />
                </div>
              </div>

              <div className="calc-field">
                <span>{t.searchHomes.yearBuiltRange}</span>
                <div className="dual-input-row">
                  <input type="number" name="Min Year Built" min={YEAR_MIN} max={YEAR_MAX} step="1" placeholder="Min year" />
                  <input type="number" name="Max Year Built" min={YEAR_MIN} max={YEAR_MAX} step="1" placeholder="Max year" />
                </div>
              </div>
            </div>

            <div className="filter-col">
              <PillRadioField
                label={t.searchHomes.bedroomsMin}
                name="Bedrooms (min)"
                options={NUMBER_OPTIONS}
                includeAny
                anyLabel={t.searchHomes.any}
              />

              <PillRadioField
                label={t.searchHomes.bathroomsMin}
                name="Bathrooms (min)"
                options={NUMBER_OPTIONS}
                includeAny
                anyLabel={t.searchHomes.any}
              />

              <label className="calc-field">
                <span>{t.searchHomes.stories}</span>
                <select name="Stories" defaultValue="Any">
                  <option value="Any">{t.searchHomes.storiesAny}</option>
                  {STORY_OPTIONS.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>

              <div className="calc-field">
                <span>{t.searchHomes.pool}</span>
                <div className="filter-checkbox-group">
                  <label className="filter-checkbox">
                    <input type="radio" name="Pool" value="Yes" />
                    {t.searchHomes.poolYes}
                  </label>
                  <label className="filter-checkbox">
                    <input type="radio" name="Pool" value="No" />
                    {t.searchHomes.poolNo}
                  </label>
                </div>
              </div>

              <PillRadioField
                label={t.searchHomes.parkingMin}
                name="Parking Spaces (min)"
                options={NUMBER_OPTIONS}
                includeAny
                anyLabel={t.searchHomes.any}
              />
            </div>
          </div>

          <div className="calc-field" style={{ marginTop: 28 }}>
            <span>{t.searchHomes.mapLabel}</span>
            <div className="map-search-box">
              <div ref={mapNodeRef} className="map-search-canvas" />
            </div>
            <p className="map-search-note">{t.searchHomes.mapNote}</p>
            {drawnAreaText && (
              <div className="map-drawn-note">
                <span>{t.searchHomes.drawnAreaSet}</span>
                <button type="button" onClick={clearDrawnArea}>{t.searchHomes.clearDrawnArea}</button>
              </div>
            )}
          </div>

          <div className="filter-divider" />

          <p className="search-tour-prompt">
            {t.searchHomes.tourPromptText}{" "}
            <a href="/book-a-call">{t.searchHomes.tourPromptLink}</a>
          </p>
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
