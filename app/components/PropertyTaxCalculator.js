"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import InfoTip from "./InfoTip";

const moneyFor = (locale) => (n) =>
  n.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

// 2025 adopted/final total millage rates, split into school vs. non-school
// portions, sourced from the Miami-Dade and Broward County Property
// Appraiser offices. School millage is uniform county-wide; only the
// non-school portion changes by municipality. Display labels live in
// i18n/translations.js so they can be translated.
const COUNTIES = {
  "miami-dade": {
    schoolMillage: 6.6330, // 5.4990 operating + 1.0000 voted + 0.1340 debt
    cities: [
      { id: "miami", totalMillage: 19.9878 },
      { id: "miami-beach", totalMillage: 18.7601 },
      { id: "coral-gables", totalMillage: 18.1852 },
      { id: "doral", totalMillage: 17.2203 },
      { id: "hialeah", totalMillage: 18.6468 },
      { id: "aventura", totalMillage: 16.7488 },
      { id: "homestead", totalMillage: 20.9465 },
      { id: "key-biscayne", totalMillage: 15.5108 },
      { id: "pinecrest", totalMillage: 17.5257 },
      { id: "unincorporated-md", totalMillage: 16.9317 },
    ],
  },
  broward: {
    schoolMillage: 6.4845, // 6.3200 school board + 0.1645 debt
    cities: [
      { id: "fort-lauderdale", totalMillage: 18.4464 },
      { id: "hollywood", totalMillage: 21.4778 },
      { id: "pembroke-pines", totalMillage: 18.8931 },
      { id: "coral-springs", totalMillage: 20.2856 },
      { id: "plantation", totalMillage: 20.0675 },
      { id: "miramar", totalMillage: 20.0551 },
      { id: "davie", totalMillage: 19.3147 },
      { id: "sunrise", totalMillage: 20.4527 },
      { id: "pompano-beach", totalMillage: 20.2573 },
      { id: "hallandale-beach", totalMillage: 20.6717 },
      { id: "weston", totalMillage: 16.8636 },
      { id: "unincorporated-br", totalMillage: 18.4716 },
    ],
  },
};

export default function PropertyTaxCalculator() {
  const { t, lang } = useLanguage();
  const money = moneyFor(lang === "es" ? "es-US" : "en-US");

  const [countyId, setCountyId] = useState("miami-dade");
  const [cityId, setCityId] = useState(COUNTIES["miami-dade"].cities[0].id);
  const [assessedValue, setAssessedValue] = useState(500000);
  const [homestead, setHomestead] = useState(true);
  const [nonAdValorem, setNonAdValorem] = useState(400);

  const county = COUNTIES[countyId];
  const city = county.cities.find((c) => c.id === cityId) || county.cities[0];
  const cityLabel = t.cityLabels[countyId][city.id];

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
          <span>{t.propertyTax.county}</span>
          <select value={countyId} onChange={(e) => handleCountyChange(e.target.value)}>
            {Object.keys(COUNTIES).map((id) => (
              <option key={id} value={id}>{t.countyLabels[id]}</option>
            ))}
          </select>
        </label>

        <label className="calc-field">
          <span>{t.propertyTax.cityArea}</span>
          <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
            {county.cities.map((c) => (
              <option key={c.id} value={c.id}>{t.cityLabels[countyId][c.id]}</option>
            ))}
          </select>
        </label>

        <label className="calc-field">
          <span>{t.propertyTax.assessedValue}<InfoTip text={t.propertyTax.assessedValueTip} /></span>
          <input
            type="number"
            min="0"
            step="1000"
            value={assessedValue}
            onChange={(e) => setAssessedValue(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.propertyTax.nonAdValorem}<InfoTip text={t.propertyTax.nonAdValoremTip} /></span>
          <input
            type="number"
            min="0"
            step="10"
            value={nonAdValorem}
            onChange={(e) => setNonAdValorem(e.target.value)}
          />
        </label>

        <label className="calc-field calc-checkbox">
          <span>{t.propertyTax.homesteadExemption}</span>
          <span className="calc-toggle">
            <input
              type="checkbox"
              checked={homestead}
              onChange={(e) => setHomestead(e.target.checked)}
            />
            <span>{t.propertyTax.applyHomestead}</span>
          </span>
        </label>
      </div>

      <div className="calc-results">
        <div className="calc-total">
          <span>{t.propertyTax.estimatedAnnual}</span>
          <strong>{money(results.totalTax)}</strong>
        </div>
        <ul className="calc-breakdown">
          <li>
            <span>{cityLabel} — {t.propertyTax.totalMillageSuffix}</span>
            <span>{city.totalMillage.toFixed(4)} mills</span>
          </li>
          <li>
            <span>{t.propertyTax.schoolBoardTax}</span>
            <span>{money(results.schoolTax)}</span>
          </li>
          <li>
            <span>{t.propertyTax.countyCityOther}</span>
            <span>{money(results.nonSchoolTax)}</span>
          </li>
          <li>
            <span>{t.propertyTax.nonAdValoremLabel}</span>
            <span>{money(Number(nonAdValorem) || 0)}</span>
          </li>
          {homestead && (
            <li>
              <span>{t.propertyTax.homesteadApplied}</span>
              <span>-{money(results.totalExemption)} {t.propertyTax.taxableValue}</span>
            </li>
          )}
        </ul>
        <p className="calc-note">
          {t.propertyTax.effectiveRateLabel} {results.effectiveRate.toFixed(2)}%{" "}
          {t.propertyTax.ofAssessedValue} {t.propertyTax.basedOn}{" "}
          {countyId === "miami-dade" ? t.propertyTax.mdOffice : t.propertyTax.brOffice}.
        </p>
      </div>

      <p className="calc-disclaimer">
        {t.propertyTax.disclaimerPart1}{" "}
        <a href="https://www.miamidade.gov/pa/" target="_blank" rel="noopener noreferrer">
          {t.propertyTax.disclaimerMD}
        </a>{" "}
        {t.propertyTax.disclaimerOr}{" "}
        <a href="https://web.bcpa.net/bcpaclient/" target="_blank" rel="noopener noreferrer">
          {t.propertyTax.disclaimerBR}
        </a>{" "}
        {t.propertyTax.disclaimerPart2}
      </p>
    </div>
  );
}
