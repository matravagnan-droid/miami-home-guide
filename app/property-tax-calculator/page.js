"use client";

import SiteNav from "../components/SiteNav";
import PropertyTaxCalculator from "../components/PropertyTaxCalculator";
import { useLanguage } from "../i18n/LanguageContext";

export default function PropertyTaxCalculatorPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.propertyTaxSection.h2}</h1>
        <p>{t.propertyTaxSection.p}</p>
      </section>

      <section className="section">
        <PropertyTaxCalculator />
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
