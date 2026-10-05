"use client";

import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import translations from "../i18n/translations";
import { COUNTIES } from "../lib/counties";

const NUMBER_OPTIONS = ["1", "2", "3", "4", "5+"];
const STORY_OPTIONS = ["1", "2", "3+"];
const PRICE_BANDS = ["$0–300K", "$300–500K", "$500–750K", "$750K–1M", "$1–2M", "$2M+"];

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

function ChipRadioGroup({ label, name, options }) {
  return (
    <div className="filter-field">
      <span>{label}</span>
      <div className="chip-group" role="radiogroup" aria-label={label}>
        {options.map((o, i) => (
          <label className="chip-option" key={o.value}>
            <input type="radio" name={name} value={o.value} defaultChecked={i === 0} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function ChipCheckboxGroup({ label, options }) {
  return (
    <div className="filter-field">
      <span>{label}</span>
      <div className="chip-group">
        {options.map((o) => (
          <label className="chip-option" key={o.name}>
            <input type="checkbox" name={o.name} value="Yes" />
            <span>{o.label}</span>
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
  const s = t.searchHomes;
  const [countyId, setCountyId] = useState("miami-dade");
  const [cityIds, setCityIds] = useState([]);
  const [redirectUrl, setRedirectUrl] = useState("");

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
  const submittedCities = cityIds
    .map((id) => translations.en.cityLabels[countyId][id])
    .filter(Boolean)
    .join(", ");

  const anyYesNo = [
    { value: "Any", label: s.any },
    { value: "Yes", label: s.yes },
    { value: "No", label: s.no },
  ];
  const anyNumber = [{ value: "Any", label: s.any }, ...NUMBER_OPTIONS.map((n) => ({ value: n, label: n }))];

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{s.eyebrow}</div>
        <h1>{s.h1}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <form
        className="section"
        style={{ paddingTop: 32 }}
        action="https://formsubmit.co/mat.ravagnan@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New custom home list request from Miami Home Guide" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_cc" value="3525520793@txt.att.net" />
        {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
        <input type="hidden" name="County" value={translations.en.countyLabels[countyId]} />
        <input type="hidden" name="Cities" value={submittedCities} />

        <p className="search-intro">{s.p}</p>

        <div className="search-layout">
          <div className="search-filters">
            <section className="filter-section">
              <h3>{s.groupLocation}</h3>
              <div className="filter-fields">
                <label className="calc-field county-field">
                  <span>{s.county}</span>
                  <select value={countyId} onChange={(e) => handleCountyChange(e.target.value)}>
                    {Object.keys(COUNTIES).map((id) => (
                      <option key={id} value={id}>{t.countyLabels[id]}</option>
                    ))}
                  </select>
                </label>

                <label className="calc-field">
                  <span>{s.zipCodes}</span>
                  <input type="text" name="ZIP Codes" placeholder={s.zipPlaceholder} />
                </label>

                <div className="calc-field filter-field-wide">
                  <span>{s.cityArea}</span>
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
              </div>
            </section>

            <section className="filter-section">
              <h3>{s.propertyType}</h3>
              <div className="chip-group">
                {[
                  ["Single-family", s.typeSingleFamily],
                  ["Condo", s.typeCondo],
                  ["Townhouse", s.typeTownhouse],
                  ["Apartment", s.typeApartment],
                  ["Multi-family", s.typeMultiFamily],
                  ["Villa", s.typeVilla],
                  ["Land", s.typeLand],
                ].map(([key, label]) => (
                  <label className="chip-option" key={key}>
                    <input type="checkbox" name={`Property Type - ${key}`} value="Yes" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="filter-section">
              <h3>{s.groupBudget}</h3>
              <div className="filter-fields">
                <div className="filter-field-wide">
                  <ChipCheckboxGroup
                    label={s.priceRange}
                    options={PRICE_BANDS.map((band) => ({
                      name: `Price Range - ${band.replace("–", "-")}`,
                      label: band,
                    }))}
                  />
                  <div className="calc-field" style={{ marginTop: 12 }}>
                    <div className="dual-input-row">
                      <MoneyInput name="Min Price" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} placeholder="Min" />
                      <MoneyInput name="Max Price" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} placeholder="Max" />
                    </div>
                  </div>
                </div>

                <div className="calc-field">
                  <span>{s.hoaRange}</span>
                  <div className="dual-input-row">
                    <MoneyInput name="Min HOA Fee" min={HOA_MIN} step={HOA_STEP} placeholder="Min" />
                    <MoneyInput name="Max HOA Fee" min={HOA_MIN} step={HOA_STEP} placeholder="Max" />
                  </div>
                </div>

                <div className="calc-field">
                  <span>{s.taxRange}</span>
                  <div className="dual-input-row">
                    <MoneyInput name="Min Annual Property Tax" min={TAX_MIN} step={TAX_STEP} placeholder="Min" />
                    <MoneyInput name="Max Annual Property Tax" min={TAX_MIN} step={TAX_STEP} placeholder="Max" />
                  </div>
                </div>
              </div>
            </section>

            <section className="filter-section">
              <h3>{s.groupSize}</h3>
              <div className="filter-fields">
                <ChipRadioGroup label={s.bedroomsMin} name="Bedrooms (min)" options={anyNumber} />
                <ChipRadioGroup label={s.bathroomsMin} name="Bathrooms (min)" options={anyNumber} />

                <div className="calc-field">
                  <span>{s.sqftRange}</span>
                  <div className="dual-input-row">
                    <input type="number" name="Min Sqft" min={SQFT_MIN} max={SQFT_MAX} step={SQFT_STEP} placeholder="Min sqft" />
                    <input type="number" name="Max Sqft" min={SQFT_MIN} max={SQFT_MAX} step={SQFT_STEP} placeholder="Max sqft" />
                  </div>
                </div>

                <div className="calc-field">
                  <span>{s.yearBuiltRange}</span>
                  <div className="dual-input-row">
                    <input type="number" name="Min Year Built" min={YEAR_MIN} max={YEAR_MAX} step="1" placeholder="Min year" />
                    <input type="number" name="Max Year Built" min={YEAR_MIN} max={YEAR_MAX} step="1" placeholder="Max year" />
                  </div>
                </div>

                <label className="calc-field">
                  <span>{s.stories}</span>
                  <select name="Stories" defaultValue="Any">
                    <option value="Any">{s.storiesAny}</option>
                    {STORY_OPTIONS.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>

                <ChipRadioGroup label={s.parkingMin} name="Parking Spaces (min)" options={anyNumber} />
              </div>
            </section>

            <section className="filter-section">
              <h3>{s.groupFeatures}</h3>
              <div className="filter-fields">
                <ChipRadioGroup label={s.pool} name="Pool" options={anyYesNo} />
                <ChipRadioGroup label={s.hasHoa} name="Has HOA Fees" options={anyYesNo} />
                <ChipRadioGroup label={s.gatedCommunity} name="Gated Community" options={anyYesNo} />
                <ChipRadioGroup label={s.waterfront} name="Waterfront" options={anyYesNo} />
                <ChipRadioGroup label={s.newConstruction} name="New Construction" options={anyYesNo} />
              </div>
            </section>
          </div>

          <aside className="search-contact">
            <div className="lead-form search-contact-card">
              <h2>{s.contactHeading}</h2>

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

              <label className="calc-field">
                <span>{t.bookCallPage.phone}</span>
                <input type="tel" name="Phone" required />
              </label>

              <label className="calc-field">
                <span>{t.bookCallPage.email}</span>
                <input type="email" name="Email" />
              </label>

              <label className="calc-field">
                <span>{t.bookCallPage.message}</span>
                <textarea name="Message" rows={3} />
              </label>

              <button type="submit" className="book-call-btn lead-form-submit">
                {s.submit}
              </button>
            </div>
          </aside>
        </div>
      </form>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
