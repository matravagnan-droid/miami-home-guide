"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import ResourceLinks from "../../components/ResourceLinks";
import { useLanguage } from "../../i18n/LanguageContext";

export default function WalkabilityPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.walkSection.h2}</h1>
        <p>{t.walkSection.p}</p>
      </section>

      <BackLink href="/moving-to-miami">{t.moving.backToHub}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <ResourceLinks
          intro={t.walk.intro}
          note={t.walk.note}
          links={[
            { href: "https://www.walkscore.com/", label: t.walk.linkLabel },
          ]}
        />
      </section>

      <SiteFooter>
        <a href="/moving-to-miami">{t.moving.backToHub}</a>
      </SiteFooter>
    </>
  );
}
