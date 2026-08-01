"use client";

import SiteNav from "../../components/SiteNav";
import FloodMap from "../../components/maps/FloodMap";
import { useLanguage } from "../../i18n/LanguageContext";

export default function FloodPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.floodSection.h2}</h1>
        <p>{t.floodSection.p}</p>
      </section>

      <section className="section">
        <FloodMap />
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </footer>
    </>
  );
}
