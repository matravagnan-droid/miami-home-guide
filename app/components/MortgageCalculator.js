"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const moneyFor = (locale) => (n) =>
  n.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function MortgageCalculator() {
  const { t, lang } = useLanguage();
  const money = moneyFor(lang === "es" ? "es-US" : "en-US");
  const [homePrice, setHomePrice] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(6.75);
  const [termYears, setTermYears] = useState(30);
  const [taxRate, setTaxRate] = useState(1.02); // Miami-Dade approx effective rate
  const [insurance, setInsurance] = useState(250); // monthly, Florida homeowners avg
  const [hoa, setHoa] = useState(0);

  const results = useMemo(() => {
    const price = Number(homePrice) || 0;
    const downPct = Math.min(100, Math.max(0, Number(downPaymentPct) || 0));
    const downAmount = (price * downPct) / 100;
    const principal = Math.max(0, price - downAmount);
    const monthlyRate = (Number(rate) || 0) / 100 / 12;
    const numPayments = (Number(termYears) || 0) * 12;

    let principalAndInterest = 0;
    if (principal > 0 && numPayments > 0) {
      if (monthlyRate === 0) {
        principalAndInterest = principal / numPayments;
      } else {
        const factor = Math.pow(1 + monthlyRate, numPayments);
        principalAndInterest = (principal * monthlyRate * factor) / (factor - 1);
      }
    }

    const monthlyTax = (price * (Number(taxRate) || 0)) / 100 / 12;
    const monthlyInsurance = Number(insurance) || 0;
    const monthlyHoa = Number(hoa) || 0;
    const pmi = downPct < 20 ? (principal * 0.006) / 12 : 0;

    const totalMonthly =
      principalAndInterest + monthlyTax + monthlyInsurance + monthlyHoa + pmi;

    return {
      downAmount,
      principal,
      principalAndInterest,
      monthlyTax,
      monthlyInsurance,
      monthlyHoa,
      pmi,
      totalMonthly,
    };
  }, [homePrice, downPaymentPct, rate, termYears, taxRate, insurance, hoa]);

  return (
    <div className="calc-card">
      <div className="calc-inputs">
        <label className="calc-field">
          <span>{t.mortgage.homePrice}</span>
          <input
            type="number"
            min="0"
            step="1000"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.mortgage.downPayment}</span>
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.mortgage.interestRate}</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.mortgage.loanTerm}</span>
          <select
            value={termYears}
            onChange={(e) => setTermYears(Number(e.target.value))}
          >
            <option value={30}>{t.mortgage.term30}</option>
            <option value={20}>{t.mortgage.term20}</option>
            <option value={15}>{t.mortgage.term15}</option>
          </select>
        </label>

        <label className="calc-field">
          <span>{t.mortgage.propertyTaxRate}</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.mortgage.homeInsurance}</span>
          <input
            type="number"
            min="0"
            step="10"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          />
        </label>

        <label className="calc-field">
          <span>{t.mortgage.hoa}</span>
          <input
            type="number"
            min="0"
            step="10"
            value={hoa}
            onChange={(e) => setHoa(e.target.value)}
          />
        </label>
      </div>

      <div className="calc-results">
        <div className="calc-total">
          <span>{t.mortgage.estimatedMonthly}</span>
          <strong>{money(results.totalMonthly)}</strong>
        </div>
        <ul className="calc-breakdown">
          <li>
            <span>{t.mortgage.principalInterest}</span>
            <span>{money(results.principalAndInterest)}</span>
          </li>
          <li>
            <span>{t.mortgage.propertyTax}</span>
            <span>{money(results.monthlyTax)}</span>
          </li>
          <li>
            <span>{t.mortgage.homeInsuranceResult}</span>
            <span>{money(results.monthlyInsurance)}</span>
          </li>
          <li>
            <span>{t.mortgage.hoaResult}</span>
            <span>{money(results.monthlyHoa)}</span>
          </li>
          {results.pmi > 0 && (
            <li>
              <span>{t.mortgage.pmi}</span>
              <span>{money(results.pmi)}</span>
            </li>
          )}
        </ul>
        <p className="calc-note">
          {t.mortgage.downPaymentLabel}: {money(results.downAmount)} &middot;{" "}
          {t.mortgage.loanAmountLabel}: {money(results.principal)}.
          <br />
          {t.mortgage.estimateDisclaimer}
        </p>
      </div>
    </div>
  );
}
