"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import NeighborhoodBoundaryMap from "../../components/maps/NeighborhoodBoundaryMap";
import RelatedLinks from "../../components/RelatedLinks";
import { useLanguage } from "../../i18n/LanguageContext";

const moneyFor = (locale) => (n) =>
  n.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function NeighborhoodPageClient({ neighborhood, boundary }) {
  const { t, lang } = useLanguage();
  const money = moneyFor(lang === "es" ? "es-US" : "en-US");
  const text = (field) => field[lang] || field.en;
  const isCondoHeavy = neighborhood.pricing.singleFamily.value === null;
  const relatedItems = [
    { href: "/blog/best-miami-neighborhoods-families-young-professionals-investors", key: "neighborhoodsGuide" },
    { href: "/mortgage-calculator", key: "mortgageCalc" },
    isCondoHeavy
      ? { href: "/blog/florida-condo-buying-guide-milestone-inspections-sirs-special-assessments", key: "condoGuide" }
      : { href: "/property-tax-calculator", key: "propertyTaxCalc" },
  ];

  const priceCard = (labelKey, entry, rail, icon) => (
    <div className="price-card" style={{ "--price-rail": rail }}>
      <div className="price-card-top">
        <span className="price-card-tag">{t.neighborhoodPage[labelKey]}</span>
        <span className="price-card-icon">{icon}</span>
      </div>
      {entry.value ? (
        <>
          <p className="price-card-value">{money(entry.value)}</p>
          <div className="price-card-median">{t.neighborhoodPage.medianLabel}</div>
          <p className="price-card-note">{entry.note[lang] || entry.note.en}</p>
        </>
      ) : (
        <>
          <p className="price-card-value">{t.neighborhoodPage.noData}</p>
          <p className="price-card-note">{entry.note[lang] || entry.note.en}</p>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7,31,36,0.82) 0%, rgba(16,63,69,0.2) 76%, rgba(16,63,69,0) 92%), url(${neighborhood.image})`,
        }}
      >
        <div className="eyebrow">Miami-Dade</div>
        <h1>{neighborhood.name}</h1>
        <p>{neighborhood.tagline[lang] || neighborhood.tagline.en}</p>
      </section>

      <BackLink href="/#neighborhoods">{t.neighborhoodPage.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="section-head">
          <h2>{t.neighborhoodPage.historyLabel}</h2>
          <p>{neighborhood.history[lang] || neighborhood.history.en}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.neighborhoodPage.pricingLabel}</h2>
        </div>
        <div className="tools-grid">
          {priceCard("singleFamilyLabel", neighborhood.pricing.singleFamily, "var(--bay)", "⌂")}
          {priceCard("condoLabel", neighborhood.pricing.condo, "var(--sunset)", "▤")}
        </div>
        <p className="map-note">{t.neighborhoodPage.disclaimer}</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="neighborhood-detail-grid">
          <div className="neighborhood-detail-col">
            <div className="neighborhood-detail-block">
              <h3>{t.neighborhoodPage.newConstructionLabel}</h3>
              <p>{text(neighborhood.newConstruction)}</p>
            </div>
            <div className="neighborhood-detail-block">
              <h3>{t.neighborhoodPage.funFactsLabel}</h3>
              <ul>
                {(neighborhood.funFacts[lang] || neighborhood.funFacts.en).map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
            <div className="neighborhood-detail-block">
              <h3>{t.neighborhoodPage.familyLabel}</h3>
              <p>{text(neighborhood.family)}</p>
            </div>
            <div className="neighborhood-detail-block">
              <h3>{t.neighborhoodPage.movingTipsLabel}</h3>
              <p>{text(neighborhood.movingTips)}</p>
            </div>
          </div>
          <div className="neighborhood-detail-col neighborhood-detail-map">
            <h3>{t.neighborhoodPage.mapLabel}</h3>
            <NeighborhoodBoundaryMap center={neighborhood.center} boundary={boundary} />
          </div>
        </div>
      </section>

      <RelatedLinks items={relatedItems} />

      <SiteFooter>
        <a href="/#neighborhoods">{t.neighborhoodPage.backLink}</a>
      </SiteFooter>
    </>
  );
}
