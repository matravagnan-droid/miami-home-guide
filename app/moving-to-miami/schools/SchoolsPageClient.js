"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import SchoolsMap from "../../components/maps/SchoolsMap";
import { useLanguage } from "../../i18n/LanguageContext";

export default function SchoolsPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.schoolsSection.h2}</h1>
        <p>{t.schoolsSection.p}</p>
      </section>

      <section className="section">
        <SchoolsMap />
      </section>

      <SiteFooter>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </SiteFooter>
    </>
  );
}
