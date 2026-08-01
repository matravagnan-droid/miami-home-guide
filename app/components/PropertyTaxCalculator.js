"use client";

import { useMemo, useState } from "react";

const money = (n) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

// 2025 adopted/final total millage rates, split into school vs. non-school
// portions, sourced from the Miami-Dade and Broward County Property
// Appraiser offices. School millage is uniform county-wide; only the
// non-school portion changes by municipality.
const COUNTIES = {
  "miami-dade": {
    label: "Miami-Dade County",
    schoolMillage: 6.6330, // 5.4990 operating + 1.0000 voted + 0.1340 debt
    cities: [
      { id: "miami", label: "Miami (incl. Brickell, Wynwood, Coconut Grove)", totalMillage: 19.9878 },
      { id: "miami-beach", label: "Miami Beach", totalMillage: 18.7601 },
      { id: "coral-gables", label: "Coral Gables", totalMillage: 18.1852 },
      { id: "doral", label: "Doral", totalMillage: 17.2203 },
      { id: "hialeah", label: "Hialeah", totalMillage: 18.6468 },
      { id: "aventura", label: "Aventura", totalMillage: 16.7488 },
      { id: "homestead", label: "Homestead", totalMillage: 20.9465 },
      { id: "key-biscayne", label: "Key Biscayne", totalMillage: 15.5108 },
      { id: "pinecrest", label: "Pinecrest", totalMillage: 17.5257 },
      { id: "unincorporated-md", label: "Unincorporated Miami-Dade", totalMillage: 16.9317 },
    ],
  },
  broward: {
    label: "Broward County",
    schoolMillage: 6.4845, // 6.3200 school board + 0.1645 debt
    cities: [
      { id: "fort-lauderdale", label: "Fort Lauderdale", totalMillage: 18.4464 },
      { id: "hollywood", label: "Hollywood", totalMillage: 21.4778 },
      { id: "pembroke-pines", label: "Pembroke Pines", totalMillage: 18.8931 },
      { id: "coral-springs", label: "Coral Springs", totalMillage: 20.2856 },
      { id: "plantation", label: "Plantation", totalMillage: 20.0675 },
      { id: "miramar", label: "Miramar", totalMillage: 20.0551 },
      { id: "davie", label: "Davie", totalMillage: 19.3147 },
      { id: "sunrise", label: "Sunrise", totalMillage: 20.4527 },
      { id: "pompano-beach", label: "Pompano Beach", totalMillage: 20.2573 },
      { id: "hallandale-beach", label: "Hallandale Beach", totalMillage: 20.6717 },
      { id: "weston", label: "Weston", totalMillage: 16.8636 },
      { id: "unincorporated-br", label: "Unincorporated Broward", totalMillage: 18.4716 },
    ],
  },
};

export default function PropertyTaxCalculator() {
  const [countyId, setCountyId] = useState("miami-dade");
  const [cityId, setCityId] = useState(COUNTIES["miami-dade"].cities[0].id);
  const [assessedValue, setAssessedValue] = useState(500000);
  const [homestead, setHomestead] = useState(true);
  const [nonAdValorem, setNonAdValorem] = useState(400);

  const county = COUNTIES[countyId];
  const city = county.cities.find((c) => c.id === cityId) || county.cities[0];

  function handleCountyChange(nextCountyId) {
    setCountyId(nextCountyId);
    setCityId(COUNTIES[nextCountyId].cities[0].id);
  }

  const results = useMemo(() => {
    const value = Math.max(0, Number(assessedValue) || 0);
    const schoolMillage = county.schoolMillage;
    const nonSchoolMillage = city.totalMillage - schoolMillage;

    // Florida homestead exemption: the first $25,000 of assessed value is
    // exempt from every taxing authority. A second $25,000 — applied only
    // to the portion of assessed value between $50,000 and $75,000 — is
    // exempt from every levy except the school board's.
    const exemptAll = homestead ? Math.min(value, 25000) : 0;
    const exemptNonSchoolOnly = homestead
      ? Math.min(Math.max(value - 50000, 0), 25000)
      : 0;

    const taxableSchool = Math.max(value - exemptAll, 0);
    const taxableNonSchool = Math.max(value - exemptAll - exemptNonSchoolOnly, 0);

    const schoolTax = (taxableSchool * schoolMillage) / 1000;
    const nonSchoolTax = (taxableNonSchool * nonSchoolMillage) / 1000;
    const adValoremTax = schoolTax + nonSchoolTax;
    const totalExemption = exemptAll + exemptNonSchoolOnly;
    const totalTax = adValoremTax + (Number(nonAdValorem) || 0);

    return {
      schoolTax,
      nonSchoolTax,
      adValoremTax,
      totalExemption,
      totalTax,
      effectiveRate: value > 0 ? (totalTax / value) * 100 : 0,
    };
  }, [assessedValue, homestead, nonAdValorem, county, city]);

  return (
    <div className="calc-card">
      <div className="calc-inputs">
        <label className="calc-field">
          <span>County</span>
          <select value={countyId} onChange={(e) => handleCountyChange(e.target.value)}>
            {Object.entries(COUNTIES).map(([id, c]) => (
              <option key={id} value={id}>{c.label}</option>
            ))}
          </select>
        </label>

        <label className="calc-field">
          <span>City / area</span>
          <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
            {county.cities.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
        </label>

        <label className="calc-field">
          <span>Assessed value</span>
          <input
            type="number"
            min="0"
            step="1000"
            value={assessedValue}
            onChange={(e) => setAssessedValue(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>Non-ad valorem fees ($/yr)</span>
          <input
            type="number"
            min="0"
            step="10"
            value={nonAdValorem}
            onChange={(e) => setNonAdValorem(e.target.value)}
          />
        </label>

        <label className="calc-field calc-checkbox">
          <span>Homestead exemption</span>
          <span className="calc-toggle">
            <input
              type="checkbox"
              checked={homestead}
              onChange={(e) => setHomestead(e.target.checked)}
            />
            <span>Apply (primary residence)</span>
          </span>
        </label>
      </div>

      <div className="calc-results">
        <div className="calc-total">
          <span>Estimated annual property tax</span>
          <strong>{money(results.totalTax)}</strong>
        </div>
        <ul className="calc-breakdown">
          <li>
            <span>{city.label} — total millage</span>
            <span>{city.totalMillage.toFixed(4)} mills</span>
          </li>
          <li>
            <span>School board tax</span>
            <span>{money(results.schoolTax)}</span>
          </li>
          <li>
            <span>County, city &amp; other tax</span>
            <span>{money(results.nonSchoolTax)}</span>
          </li>
          <li>
            <span>Non-ad valorem fees</span>
            <span>{money(Number(nonAdValorem) || 0)}</span>
          </li>
          {homestead && (
            <li>
              <span>Homestead exemption applied</span>
              <span>-{money(results.totalExemption)} taxable value</span>
            </li>
          )}
        </ul>
        <p className="calc-note">
          Effective rate: {results.effectiveRate.toFixed(2)}% of assessed value.
          Based on 2025 adopted/final millage rates published by the{" "}
          {countyId === "miami-dade"
            ? "Miami-Dade County Property Appraiser"
            : "Broward County Property Appraiser"}.
        </p>
      </div>

      <p className="calc-disclaimer">
        This is an estimate only, not a tax bill. It's built from each county's
        published 2025 millage rates and the standard $50,000 Florida homestead
        exemption, but it can't fully account for everything that shows up on a
        real bill: Florida's Save Our Homes 3% annual assessment cap for
        existing homesteaded owners, additional exemptions (senior, veteran,
        disability, agricultural), special taxing districts, CDD/HOA-related
        assessments, or mid-year millage changes. It's most accurate for a
        property you're about to buy, where assessed value resets close to the
        purchase price. For an exact number, check the parcel directly on the{" "}
        <a href="https://www.miamidade.gov/pa/" target="_blank" rel="noopener noreferrer">
          Miami-Dade
        </a>{" "}
        or{" "}
        <a href="https://web.bcpa.net/bcpaclient/" target="_blank" rel="noopener noreferrer">
          Broward
        </a>{" "}
        County Property Appraiser site, or ask your agent or the county tax
        collector.
      </p>
    </div>
  );
}
