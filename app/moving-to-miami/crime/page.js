"use client";

import SiteNav from "../../components/SiteNav";
import ResourceLinks from "../../components/ResourceLinks";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CrimePage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.crimeSection.h2}</h1>
        <p>{t.crimeSection.p}</p>
      </section>

      <section className="section">
        <ResourceLinks
          intro={t.crime.intro}
          note={t.crime.note}
          links={[
            { href: "https://www.miamidade.gov/global/service.page?Mduid_service=ser1510669357918648", label: t.crime.linkMD },
            { href: "https://www.sheriff.org/community/", label: t.crime.linkBR },
          ]}
        />
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </footer>
    </>
  );
}
