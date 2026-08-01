"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
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

      <BackLink href="/moving-to-miami">{t.moving.backToHub}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <SchoolsMap />
      </section>

      <SiteFooter>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </SiteFooter>
    </>
  );
}
