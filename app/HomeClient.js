"use client";

import { useState } from "react";
import SiteNav from "./components/SiteNav";
import ArticleCard from "./components/ArticleCard";
import { useLanguage } from "./i18n/LanguageContext";
import { getAllNeighborhoods } from "./lib/neighborhoods";

const BADGE_KEYS = {
  realEstate: "badgeRealEstate",
  news: "badgeNews",
  sports: "badgeSports",
  restaurants: "badgeRestaurants",
  thingsToDo: "badgeThingsToDo",
};

export default function HomeClient({ articles }) {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("realEstate");

  const tabs = [
    { key: "realEstate", label: t.blog.tabRealEstate, items: articles?.realEstate || [] },
    { key: "news", label: t.blog.tabNews, items: articles?.news || [] },
    { key: "sportsFood", label: t.blog.tabSportsFood, items: articles?.sportsFood || [] },
    { key: "thingsToDo", label: t.blog.tabThingsToDo, items: articles?.thingsToDo || [] },
  ];
  const activeItems = tabs.find((tab) => tab.key === activeTab)?.items || [];

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero" style={{ backgroundImage: "linear-gradient(180deg, rgba(7,31,36,0.88) 0%, rgba(16,63,69,0.78) 93%, var(--sand) 93%), url(/images/hero-skyline.jpg)" }}>
        <div className="hero-fan" />
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1>{t.hero.h1}</h1>
        <p>{t.hero.p}</p>
        <div className="btn-row">
          <a className="btn btn-ghost" href="#blog">
            {t.hero.btnGhost}
          </a>
        </div>
      </section>

      <section className="section" id="tools" style={{ paddingTop: 48 }}>
        <div className="section-head">
          <h2>{t.tools.h2}</h2>
          <p>{t.tools.p}</p>
        </div>
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">{t.tools.valueTag}</span>
            <h3>{t.tools.valueTitle}</h3>
            <p>{t.tools.valueBody}</p>
            <a className="link" href="#">{t.tools.valueLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.tools.taxTag}</span>
            <h3>{t.tools.taxTitle}</h3>
            <p>{t.tools.taxBody}</p>
            <a className="link" href="/property-tax-calculator">{t.tools.taxLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.tools.mlsTag}</span>
            <h3>{t.tools.mlsTitle}</h3>
            <p>{t.tools.mlsBody}</p>
            <a className="link" href="#">{t.tools.mlsLink}</a>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.tools.mortgageTag}</span>
            <h3>{t.tools.mortgageTitle}</h3>
            <p>{t.tools.mortgageBody}</p>
            <a className="link" href="/mortgage-calculator">{t.tools.mortgageLink}</a>
          </div>
        </div>
      </section>

      <section className="section" id="moving-to-miami" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.movingTeaser.h2}</h2>
          <p>{t.movingTeaser.p}</p>
        </div>
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

      <section className="section" id="neighborhoods" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.neighborhoods.h2}</h2>
          <p>{t.neighborhoods.p}</p>
        </div>
        <div className="hoods">
          {getAllNeighborhoods().map((n) => (
            <a
              key={n.slug}
              className="hood-card"
              href={`/neighborhoods/${n.slug}`}
              style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(7,31,36,0.92) 100%), url(${n.image})` }}
            >
              <h4>{n.name}</h4><span>{n.tagline[lang]}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section" id="blog" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.blog.h2}</h2>
          <p>{t.blog.p}</p>
        </div>
        <div className="blog-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`blog-tab${tab.key === activeTab ? " active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeItems.length > 0 ? (
          <div className="articles-grid">
            {activeItems.map((article) => (
              <ArticleCard
                key={article.link}
                article={article}
                categoryLabel={t.blog[BADGE_KEYS[article.badge]] || ""}
              />
            ))}
          </div>
        ) : (
          <p className="map-note">{t.blog.emptyState}</p>
        )}
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <span>{t.footer.licensed}</span>
      </footer>
    </>
  );
}
