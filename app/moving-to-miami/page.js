"use client";

import SiteNav from "../components/SiteNav";
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

      <section className="section">
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.schoolsTag}</span>
            <h3>{t.movingTeaser.schoolsTitle}</h3>
            <p>{t.movingTeaser.schoolsBody}</p>
            <a className="link" href="/moving-to-miami/schools">{t.movingTeaser.schoolsLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.floodTag}</span>
            <h3>{t.movingTeaser.floodTitle}</h3>
            <p>{t.movingTeaser.floodBody}</p>
            <a className="link" href="/moving-to-miami/flood">{t.movingTeaser.floodLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.movingTeaser.hurricaneTag}</span>
            <h3>{t.movingTeaser.hurricaneTitle}</h3>
            <p>{t.movingTeaser.hurricaneBody}</p>
            <a className="link" href="/moving-to-miami/hurricane">{t.movingTeaser.hurricaneLink}</a>
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

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
