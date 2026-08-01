"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { useLanguage } from "../i18n/LanguageContext";

export default function MovingToMiamiClient() {
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

      <section className="section">
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.schoolsTag}</span>
            <h3>{t.movingTeaser.schoolsTitle}</h3>
            <p>{t.movingTeaser.schoolsBody}</p>
            <a className="link" href="/moving-to-miami/schools">{t.movingTeaser.schoolsLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.riskTag}</span>
            <h3>{t.movingTeaser.riskTitle}</h3>
            <p>{t.movingTeaser.riskBody}</p>
            <a className="link" href="/moving-to-miami/flood-hurricane">{t.movingTeaser.riskLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.crimeTag}</span>
            <h3>{t.movingTeaser.crimeTitle}</h3>
            <p>{t.movingTeaser.crimeBody}</p>
            <a className="link" href="/moving-to-miami/crime">{t.movingTeaser.crimeLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.walkTag}</span>
            <h3>{t.movingTeaser.walkTitle}</h3>
            <p>{t.movingTeaser.walkBody}</p>
            <a className="link" href="/moving-to-miami/walkability">{t.movingTeaser.walkLink}</a>
          </div>
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
