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

export default function SearchHomesClient() {
  const { t } = useLanguage();
  const [redirectUrl, setRedirectUrl] = useState("");
  const [countyId, setCountyId] = useState("miami-dade");
  const [cityId, setCityId] = useState(COUNTIES["miami-dade"].cities[0].id);

  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/search-homes/thank-you`);
  }, []);

  function handleCountyChange(nextCountyId) {
    setCountyId(nextCountyId);
    setCityId(COUNTIES[nextCountyId].cities[0].id);
  }

  const county = COUNTIES[countyId];

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

            <label className="calc-field">
              <span>{t.searchHomes.priceMin}</span>
              <input type="number" name="Min Price" min="0" step="5000" placeholder="$" />
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.priceMax}</span>
              <input type="number" name="Max Price" min="0" step="5000" placeholder="$" />
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.pool}</span>
              <select name="Pool" defaultValue="Any">
                <option value="Any">{t.searchHomes.poolAny}</option>
                <option value="Must have pool">{t.searchHomes.poolYes}</option>
                <option value="No pool">{t.searchHomes.poolNo}</option>
              </select>
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.maxHoa}</span>
              <input type="number" name="Max HOA Fee" min="0" step="25" placeholder="$" />
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.maxTax}</span>
              <input type="number" name="Max Annual Property Tax" min="0" step="100" placeholder="$" />
            </label>

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

            <label className="calc-field">
              <span>{t.searchHomes.sqftMin}</span>
              <input type="number" name="Min Sqft" min="0" step="100" placeholder="sqft" />
            </label>

            <label className="calc-field">
              <span>{t.searchHomes.sqftMax}</span>
              <input type="number" name="Max Sqft" min="0" step="100" placeholder="sqft" />
            </label>

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
