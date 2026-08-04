"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import ResourceLinks from "../../components/ResourceLinks";
import { useLanguage } from "../../i18n/LanguageContext";

export default function CrimePageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.crimeSection.h2}</h1>
        <p>{t.crimeSection.p}</p>
      </section>

      <BackLink href="/moving-to-miami">{t.moving.backToHub}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <ResourceLinks
          intro={t.crime.intro}
          note={t.crime.note}
          links={[
            { href: "https://www.crimemapping.com/map/fl/miami-dadecounty", label: t.crime.linkMD },
            { href: "https://BsoCrimes.sheriff.org", label: t.crime.linkBR },
          ]}
        />
      </section>

      <SiteFooter>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </SiteFooter>
    </>
  );
}
