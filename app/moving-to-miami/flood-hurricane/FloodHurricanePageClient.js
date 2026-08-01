"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import FloodMap from "../../components/maps/FloodMap";
import HurricaneMap from "../../components/maps/HurricaneMap";
import { useLanguage } from "../../i18n/LanguageContext";

export default function FloodHurricanePageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.riskSection.h2}</h1>
        <p>{t.riskSection.p}</p>
      </section>

      <BackLink href="/moving-to-miami">{t.moving.backToHub}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="section-head">
          <h2>{t.floodSection.h2}</h2>
          <p>{t.floodSection.p}</p>
        </div>
        <FloodMap />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>{t.hurricaneSection.h2}</h2>
          <p>{t.hurricaneSection.p}</p>
        </div>
        <HurricaneMap />
      </section>

      <SiteFooter>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </SiteFooter>
    </>
  );
}
