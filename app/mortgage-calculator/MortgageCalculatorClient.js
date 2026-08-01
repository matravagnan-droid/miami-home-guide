"use client";

import SiteNav from "../components/SiteNav";
import MortgageCalculator from "../components/MortgageCalculator";
import { useLanguage } from "../i18n/LanguageContext";

export default function MortgageCalculatorClient() {
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.mortgageFaqSection.h2}</h2>
        </div>
        <div className="faq-list">
          {t.mortgageFaqSection.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
