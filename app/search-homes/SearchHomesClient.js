"use client";

import { useEffect, useRef, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import { COUNTIES } from "../lib/counties";

const NUMBER_OPTIONS = ["1", "2", "3", "4", "5+"];
const STORY_OPTIONS = ["1", "2", "3+"];
const PARKING_OPTIONS = ["1", "2", "3", "4+"];

const PRICE_MIN = 0;
const PRICE_MAX = 20000000;
const PRICE_STEP = 50000;

const SQFT_MIN = 0;
const SQFT_MAX = 10000;
const SQFT_STEP = 100;

const HOA_MIN = 0;
const HOA_MAX = 2000;
const HOA_STEP = 25;

const TAX_MIN = 0;
const TAX_MAX = 50000;
const TAX_STEP = 500;

const DEFAULT_CENTER = [25.9, -80.25];
const DEFAULT_ZOOM = 10;

function DualRangeField({ label, min, max, step, value, onChange, format, nameMin, nameMax, spanClass = "filter-grid-full" }) {
  const [lo, hi] = value;
  const pct = (v) => ((v - min) / (max - min)) * 100;

  return (
    <div className={`calc-field ${spanClass}`}>
      <span>{label}</span>
      <div className="range-slider">
        <div className="range-slider-track" />
        <div
          className="range-slider-range"
          style={{ left: `${pct(lo)}%`, right: `${100 - pct(hi)}%` }}
        />
        <input
          type="range"
          name={nameMin}
          min={min}
          max={max}
          step={step}
          value={lo}
          onChange={(e) => onChange([Math.min(Number(e.target.value), hi - step), hi])}
        />
        <input
          type="range"
          name={nameMax}
          min={min}
          max={max}
          step={step}
          value={hi}
          onChange={(e) => onChange([lo, Math.max(Number(e.target.value), lo + step)])}
        />
      </div>
      <div className="range-slider-values">
        <span>{format(lo)}</span>
        <span>{hi >= max ? `${format(hi)}+` : format(hi)}</span>
      </div>
    </div>
  );
}

function MaxRangeField({ label, min, max, step, value, onChange, format, noMaxLabel, name }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="calc-field">
      <span>{label}</span>
      <div className="range-slider">
        <div className="range-slider-track" />
        <div className="range-slider-range" style={{ left: 0, right: `${100 - pct}%` }} />
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
      <div className="range-slider-values range-slider-values-single">
        <span>{value >= max ? noMaxLabel : format(value)}</span>
      </div>
    </div>
  );
}

export default function SearchHomesClient() {
  const { t, lang } = useLanguage();
  const [redirectUrl, setRedirectUrl] = useState("");
  const [countyId, setCountyId] = useState("miami-dade");
  const [cityIds, setCityIds] = useState([]);
  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);
  const [sqftRange, setSqftRange] = useState([SQFT_MIN, SQFT_MAX]);
  const [hoaMax, setHoaMax] = useState(HOA_MAX);
  const [taxMax, setTaxMax] = useState(TAX_MAX);
  const [drawnAreaText, setDrawnAreaText] = useState("");
  const [leafletReady, setLeafletReady] = useState(false);

  const mapNodeRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const drawnLayerRef = useRef(null);

  const locale = lang === "es" ? "es-US" : "en-US";
  const money = (n) => n.toLocaleString(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const sqft = (n) => `${n.toLocaleString(locale)} sqft`;
  const hoaMoney = (n) => `${money(n)}/mo`;
  const taxMoney = (n) => `${money(n)}/yr`;

  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/search-homes/thank-you`);
  }, []);

  function handleCountyChange(nextCountyId) {
    setCountyId(nextCountyId);
    setCityIds([]);
  }

  function toggleCity(id) {
    setCityIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const county = COUNTIES[countyId];
  const selectedCityLabels = cityIds.map((id) => t.cityLabels[countyId][id]).join(", ");

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
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
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
        <p>{t.searchHomes.p}</p>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <form
          className="filter-card"
          action="https://formsubmit.co/mat.ravagnan@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New home search request from Miami Home Guide" />
          <input type="hidden" name="_template" value="table" />
          {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
          <input type="hidden" name="City/Area" value={selectedCityLabels} />
          <input type="hidden" name="Custom Drawn Area (lat,lng)" value={drawnAreaText} />

          <h2>{t.searchHomes.filtersHeading}</h2>

          <div className="filter-grid">
            <label className="calc-field">
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

            <div className="calc-field">
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

            <div className="calc-field">
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

            <DualRangeField
              label={t.searchHomes.priceRange}
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={PRICE_STEP}
              value={priceRange}
              onChange={setPriceRange}
              format={money}
              nameMin="Min Price"
              nameMax="Max Price"
              spanClass="filter-grid-2"
            />

            <label className="calc-field">
              <span>{t.searchHomes.bedroomsMin}</span>
              <select name="Bedrooms (min)" defaultValue="Any">
                <option value="Any">{t.searchHomes.any}</option>
                {NUMBER_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.bathroomsMin}</span>
              <select name="Bathrooms (min)" defaultValue="Any">
                <option value="Any">{t.searchHomes.any}</option>
                {NUMBER_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

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

            <MaxRangeField
              label={t.searchHomes.maxHoa}
              min={HOA_MIN}
              max={HOA_MAX}
              step={HOA_STEP}
              value={hoaMax}
              onChange={setHoaMax}
              format={hoaMoney}
              noMaxLabel={t.searchHomes.noMax}
              name="Max HOA Fee"
            />

            <MaxRangeField
              label={t.searchHomes.maxTax}
              min={TAX_MIN}
              max={TAX_MAX}
              step={TAX_STEP}
              value={taxMax}
              onChange={setTaxMax}
              format={taxMoney}
              noMaxLabel={t.searchHomes.noMax}
              name="Max Annual Property Tax"
            />

            <label className="calc-field">
              <span>{t.searchHomes.parkingMin}</span>
              <select name="Parking Spaces (min)" defaultValue="Any">
                <option value="Any">{t.searchHomes.any}</option>
                {PARKING_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>

            <DualRangeField
              label={t.searchHomes.sqftRange}
              min={SQFT_MIN}
              max={SQFT_MAX}
              step={SQFT_STEP}
              value={sqftRange}
              onChange={setSqftRange}
              format={sqft}
              nameMin="Min Sqft"
              nameMax="Max Sqft"
              spanClass="filter-grid-2"
            />
          </div>

          <div className="filter-divider" />

          <h2>{t.searchHomes.contactHeading}</h2>

          <div className="lead-form-row">
            <label className="calc-field">
              <span>{t.bookCallPage.firstName}</span>
              <input type="text" name="First Name" required />
            </label>
            <label className="calc-field">
              <span>{t.bookCallPage.lastName}</span>
              <input type="text" name="Last Name" required />
            </label>
          </div>

          <div className="lead-form-row" style={{ marginTop: 20 }}>
            <label className="calc-field">
              <span>{t.bookCallPage.phone}</span>
              <input type="tel" name="Phone" required />
            </label>
            <label className="calc-field">
              <span>{t.bookCallPage.email}</span>
              <input type="email" name="Email" />
            </label>
          </div>

          <button type="submit" className="book-call-btn lead-form-submit" style={{ marginTop: 24 }}>
            {t.searchHomes.submit}
          </button>
        </form>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
