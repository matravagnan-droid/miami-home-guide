"use client";

import SiteNav from "../components/SiteNav";
import MortgageCalculator from "../components/MortgageCalculator";
import { useLanguage } from "../i18n/LanguageContext";

export default function MortgageCalculatorPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.mortgageSection.h2}</h1>
        <p>{t.mortgageSection.p}</p>
      </section>

      <section className="section">
        <MortgageCalculator />
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
