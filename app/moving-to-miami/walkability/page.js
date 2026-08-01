"use client";

import SiteNav from "../../components/SiteNav";
import ResourceLinks from "../../components/ResourceLinks";
import { useLanguage } from "../../i18n/LanguageContext";

export default function WalkabilityPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.walkSection.h2}</h1>
        <p>{t.walkSection.p}</p>
      </section>

      <section className="section">
        <ResourceLinks
          intro={t.walk.intro}
          note={t.walk.note}
          links={[
            { href: "https://www.walkscore.com/", label: t.walk.linkLabel },
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
