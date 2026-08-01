"use client";

import SiteNav from "../components/SiteNav";
import SchoolsMap from "../components/maps/SchoolsMap";
import FloodMap from "../components/maps/FloodMap";
import HurricaneMap from "../components/maps/HurricaneMap";
import ResourceLinks from "../components/ResourceLinks";
import { useLanguage } from "../i18n/LanguageContext";

export default function MovingToMiami() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.moving.eyebrow}</div>
        <h1>{t.moving.h1}</h1>
        <p>{t.moving.p}</p>
      </section>

      <section className="section" id="schools">
        <div className="section-head">
          <h2>{t.schoolsSection.h2}</h2>
          <p>{t.schoolsSection.p}</p>
        </div>
        <SchoolsMap />
      </section>

      <section className="section" id="flood" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.floodSection.h2}</h2>
          <p>{t.floodSection.p}</p>
        </div>
        <FloodMap />
      </section>

      <section className="section" id="hurricane" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.hurricaneSection.h2}</h2>
          <p>{t.hurricaneSection.p}</p>
        </div>
        <HurricaneMap />
      </section>

      <section className="section" id="crime" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.crimeSection.h2}</h2>
          <p>{t.crimeSection.p}</p>
        </div>
        <ResourceLinks
          intro={t.crime.intro}
          note={t.crime.note}
          links={[
            { href: "https://www.miamidade.gov/global/service.page?Mduid_service=ser1510669357918648", label: t.crime.linkMD },
            { href: "https://www.sheriff.org/community/", label: t.crime.linkBR },
          ]}
        />
      </section>

      <section className="section" id="walkability" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.walkSection.h2}</h2>
          <p>{t.walkSection.p}</p>
        </div>
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
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
