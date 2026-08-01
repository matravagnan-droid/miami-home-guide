"use client";

import SiteNav from "../../components/SiteNav";
import HurricaneMap from "../../components/maps/HurricaneMap";
import { useLanguage } from "../../i18n/LanguageContext";

export default function HurricanePageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.hurricaneSection.h2}</h1>
        <p>{t.hurricaneSection.p}</p>
      </section>

      <section className="section">
        <HurricaneMap />
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </footer>
    </>
  );
}
