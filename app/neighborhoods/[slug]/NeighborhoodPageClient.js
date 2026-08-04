"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import NeighborhoodBoundaryMap from "../../components/maps/NeighborhoodBoundaryMap";
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

  const priceCard = (labelKey, entry) => (
    <div className="tool-card">
      <span className="tool-tag">{t.neighborhoodPage[labelKey]}</span>
      {entry.value ? (
        <>
          <h3>{money(entry.value)}</h3>
          <p>
            {t.neighborhoodPage.medianLabel} · {entry.note[lang] || entry.note.en}
          </p>
        </>
      ) : (
        <>
          <h3>{t.neighborhoodPage.noData}</h3>
          <p>{entry.note[lang] || entry.note.en}</p>
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
          backgroundImage: `linear-gradient(180deg, rgba(7,31,36,0.82) 0%, rgba(16,63,69,0.2) 76%, rgba(246,243,236,0) 82%, rgba(246,243,236,1) 88%), url(${neighborhood.image})`,
        }}
      >
        <div className="eyebrow">Miami-Dade</div>
        <h1>{neighborhood.name}</h1>
        <p>{neighborhood.tagline[lang]}</p>
      </section>

      <BackLink href="/#neighborhoods">{t.neighborhoodPage.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="section-head">
          <h2>{t.neighborhoodPage.historyLabel}</h2>
          <p>{neighborhood.history[lang]}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.neighborhoodPage.pricingLabel}</h2>
        </div>
        <div className="tools-grid">
          {priceCard("singleFamilyLabel", neighborhood.pricing.singleFamily)}
          {priceCard("condoLabel", neighborhood.pricing.condo)}
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

      <SiteFooter>
        <a href="/#neighborhoods">{t.neighborhoodPage.backLink}</a>
      </SiteFooter>
    </>
  );
}
