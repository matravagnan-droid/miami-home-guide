"use client";

import SiteNav from "./components/SiteNav";
import ArticleCard from "./components/ArticleCard";
import { useLanguage } from "./i18n/LanguageContext";

export default function HomeClient({ articles }) {
  const { t } = useLanguage();

  const categories = [
    { key: "news", label: t.blog.newsTag, items: articles?.news || [] },
    { key: "realEstate", label: t.blog.realEstateTag, items: articles?.realEstate || [] },
    { key: "food", label: t.blog.foodTag, items: articles?.food || [] },
    { key: "culture", label: t.blog.cultureTag, items: articles?.culture || [] },
  ];
  const allArticles = categories.flatMap((c) => c.items.map((item) => ({ ...item, label: c.label })));

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero" style={{ backgroundImage: "linear-gradient(180deg, rgba(8,46,48,0.88) 0%, rgba(14,71,73,0.78) 55%, var(--sand) 55%), url(/images/hero-skyline.jpg)" }}>
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

      <section className="section" id="tools">
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

      <section className="section" id="neighborhoods" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.neighborhoods.h2}</h2>
          <p>{t.neighborhoods.p}</p>
        </div>
        <div className="hoods">
          <div className="hood-card" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8,46,48,0.92) 100%), url(/images/brickell.jpg)" }}>
            <h4>Brickell</h4><span>{t.neighborhoods.brickell}</span>
          </div>
          <div className="hood-card" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8,46,48,0.92) 100%), url(/images/coral-gables.jpg)" }}>
            <h4>Coral Gables</h4><span>{t.neighborhoods.coralGables}</span>
          </div>
          <div className="hood-card" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8,46,48,0.92) 100%), url(/images/wynwood.jpg)" }}>
            <h4>Wynwood</h4><span>{t.neighborhoods.wynwood}</span>
          </div>
          <div className="hood-card" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8,46,48,0.92) 100%), url(/images/coconut-grove.jpg)" }}>
            <h4>Coconut Grove</h4><span>{t.neighborhoods.coconutGrove}</span>
          </div>
          <div className="hood-card" style={{ backgroundImage: "linear-gradient(180deg, transparent 35%, rgba(8,46,48,0.92) 100%), url(/images/doral.jpg)" }}>
            <h4>Doral</h4><span>{t.neighborhoods.doral}</span>
          </div>
        </div>
      </section>

      <section className="section" id="blog" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.blog.h2}</h2>
          <p>{t.blog.p}</p>
        </div>
        {allArticles.length > 0 ? (
          <div className="articles-grid">
            {allArticles.map((article) => (
              <ArticleCard key={article.link} article={article} categoryLabel={article.label} />
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
