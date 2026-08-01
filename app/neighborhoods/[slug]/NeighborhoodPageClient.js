"use client";

import SiteNav from "../../components/SiteNav";
import { useLanguage } from "../../i18n/LanguageContext";

const moneyFor = (locale) => (n) =>
  n.toLocaleString(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function NeighborhoodPageClient({ neighborhood }) {
  const { t, lang } = useLanguage();
  const money = moneyFor(lang === "es" ? "es-US" : "en-US");

  const priceCard = (labelKey, entry) => (
    <div className="tool-card">
      <span className="tool-tag">{t.neighborhoodPage[labelKey]}</span>
      {entry.value ? (
        <>
          <h3>{money(entry.value)}</h3>
          <p>
            {t.neighborhoodPage.medianLabel} · {entry.note[lang]}
          </p>
        </>
      ) : (
        <>
          <h3>{t.neighborhoodPage.noData}</h3>
          <p>{entry.note[lang]}</p>
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
          backgroundImage: `linear-gradient(180deg, rgba(7,31,36,0.82) 0%, rgba(16,63,69,0.7) 82%, var(--sand) 82%), url(${neighborhood.image})`,
        }}
      >
        <div className="eyebrow">Miami-Dade</div>
        <h1>{neighborhood.name}</h1>
        <p>{neighborhood.tagline[lang]}</p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
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

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/#neighborhoods">{t.neighborhoodPage.backLink}</a>
      </footer>
    </>
  );
}
