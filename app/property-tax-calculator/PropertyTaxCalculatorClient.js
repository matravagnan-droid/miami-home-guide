"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import PropertyTaxCalculator from "../components/PropertyTaxCalculator";
import { useLanguage } from "../i18n/LanguageContext";

export default function PropertyTaxCalculatorClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.propertyTaxSection.h2}</h1>
        <p>{t.propertyTaxSection.p}</p>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <PropertyTaxCalculator />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.propertyTaxFaqSection.h2}</h2>
        </div>
        <div className="faq-list">
          {t.propertyTaxFaqSection.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
