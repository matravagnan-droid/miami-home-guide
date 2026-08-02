"use client";

import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import { COUNTIES } from "../lib/counties";

const NUMBER_OPTIONS = ["1", "2", "3", "4", "5+"];
const STORY_OPTIONS = ["1", "2", "3+"];
const PARKING_OPTIONS = ["1", "2", "3", "4+"];

const PRICE_MIN = 0;
const PRICE_MAX = 5000000;
const PRICE_STEP = 25000;

const SQFT_MIN = 0;
const SQFT_MAX = 10000;
const SQFT_STEP = 100;

const HOA_MIN = 0;
const HOA_MAX = 2000;
const HOA_STEP = 25;

const TAX_MIN = 0;
const TAX_MAX = 50000;
const TAX_STEP = 500;

function cityDisplayName(countyId, cityId) {
  if (cityId === "unincorporated-md") return "Miami-Dade County, FL";
  if (cityId === "unincorporated-br") return "Broward County, FL";
  const words = cityId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return `${words.join(" ")}, FL`;
}

function DualRangeField({ label, min, max, step, value, onChange, format, nameMin, nameMax }) {
  const [lo, hi] = value;
  const pct = (v) => ((v - min) / (max - min)) * 100;

  return (
    <div className="calc-field filter-grid-full">
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
  const [cityId, setCityId] = useState(COUNTIES["miami-dade"].cities[0].id);
  const [priceRange, setPriceRange] = useState([PRICE_MIN, PRICE_MAX]);
  const [sqftRange, setSqftRange] = useState([SQFT_MIN, SQFT_MAX]);
  const [hoaMax, setHoaMax] = useState(HOA_MAX);
  const [taxMax, setTaxMax] = useState(TAX_MAX);

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
    setCityId(COUNTIES[nextCountyId].cities[0].id);
  }

  const county = COUNTIES[countyId];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(cityDisplayName(countyId, cityId))}&z=12&output=embed`;

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
        <div className="map-search-row">
          <div className="map-search-box">
            <div className="map-search-label">{t.searchHomes.mapLabel}</div>
            <iframe
              title="Map search"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-search-note">{t.searchHomes.mapNote}</div>
          </div>
        </div>

        <form
          className="filter-card"
          action="https://formsubmit.co/mat.ravagnan@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New home search request from Miami Home Guide" />
          <input type="hidden" name="_template" value="table" />
          {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}

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

            <label className="calc-field">
              <span>{t.searchHomes.cityArea}</span>
              <select
                name="City/Area"
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
              >
                {county.cities.map((c) => (
                  <option key={c.id} value={c.id}>{t.cityLabels[countyId][c.id]}</option>
                ))}
              </select>
            </label>

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
            />

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
