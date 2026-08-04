"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import MortgageCalculator from "../components/MortgageCalculator";
import RelatedLinks from "../components/RelatedLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function MortgageCalculatorClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.mortgageSection.h2}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.mortgageSection.p}</p>
        <MortgageCalculator />
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="promo-card">
          <h2>{t.preApprovalPromo.h2}</h2>
          <p>{t.preApprovalPromo.p}</p>
          <a href="/get-pre-approved" className="book-call-btn">{t.preApprovalPromo.cta}</a>
        </div>
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

      <RelatedLinks
        items={[
          { href: "/blog/how-much-down-payment-do-you-need-to-buy-a-home-in-miami", key: "downPaymentGuide" },
          { href: "/blog/miami-closing-costs-explained-what-buyers-actually-pay", key: "closingCostsGuide" },
          { href: "/property-tax-calculator", key: "propertyTaxCalc" },
        ]}
      />

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
