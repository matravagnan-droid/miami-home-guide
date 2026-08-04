"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import PropertyTaxCalculator from "../components/PropertyTaxCalculator";
import RelatedLinks from "../components/RelatedLinks";
import { useLanguage } from "../i18n/LanguageContext";
import { MIAMI_DADE_ZIPS, BROWARD_ZIPS } from "../lib/zipCodes";

export default function PropertyTaxCalculatorClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.propertyTaxSection.h2}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.propertyTaxSection.p}</p>
        <PropertyTaxCalculator />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.zipReference.h2}</h2>
          <p>{t.zipReference.p}</p>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>{t.zipReference.miamiDadeToggle}</summary>
            <div className="zip-grid">
              {MIAMI_DADE_ZIPS.map(([zip, name]) => (
                <span key={zip}><strong>{zip}</strong> — {name}</span>
              ))}
            </div>
          </details>
          <details className="faq-item">
            <summary>{t.zipReference.browardToggle}</summary>
            <div className="zip-grid">
              {BROWARD_ZIPS.map(([zip, name]) => (
                <span key={zip}><strong>{zip}</strong> — {name}</span>
              ))}
            </div>
          </details>
        </div>
        <p className="section-note">{t.zipReference.disclaimer}</p>
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

      <RelatedLinks
        items={[
          { href: "/blog/miami-closing-costs-explained-what-buyers-actually-pay", key: "closingCostsGuide" },
          { href: "/mortgage-calculator", key: "mortgageCalc" },
          { href: "/blog/best-miami-neighborhoods-families-young-professionals-investors", key: "neighborhoodsGuide" },
        ]}
      />

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
