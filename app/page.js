"use client";

import MortgageCalculator from "./components/MortgageCalculator";
import PropertyTaxCalculator from "./components/PropertyTaxCalculator";
import LanguageToggle from "./components/LanguageToggle";
import { useLanguage } from "./i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <nav className="nav">
        <div className="nav-logo">Miami Home Guide</div>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#tools">{t.nav.tools}</a>
            <a href="#mortgage-calculator">{t.nav.mortgageCalculator}</a>
            <a href="#property-tax-calculator">{t.nav.propertyTaxCalculator}</a>
            <a href="#neighborhoods">{t.nav.neighborhoods}</a>
            <a href="#blog">{t.nav.blog}</a>
          </div>
          <LanguageToggle />
        </div>
      </nav>

      <section className="hero" style={{ backgroundImage: "linear-gradient(180deg, rgba(8,46,48,0.88) 0%, rgba(14,71,73,0.78) 55%, var(--sand) 55%), url(/images/hero-skyline.jpg)" }}>
        <div className="hero-fan" />
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1>{t.hero.h1}</h1>
        <p>{t.hero.p}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#tools">
            {t.hero.btnPrimary}
          </a>
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
            <a className="link" href="#property-tax-calculator">{t.tools.taxLink}</a>
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
            <a className="link" href="#mortgage-calculator">{t.tools.mortgageLink}</a>
          </div>
        </div>
      </section>

      <section className="section" id="mortgage-calculator" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.mortgageSection.h2}</h2>
          <p>{t.mortgageSection.p}</p>
        </div>
        <MortgageCalculator />
      </section>

      <section className="section" id="property-tax-calculator" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <h2>{t.propertyTaxSection.h2}</h2>
          <p>{t.propertyTaxSection.p}</p>
        </div>
        <PropertyTaxCalculator />
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
        <div className="tools-grid">
          <div className="tool-card">
            <span className="tool-tag">{t.blog.guideTag}</span>
            <h3>{t.blog.guideTitle}</h3>
            <p>{t.blog.guideBody}</p>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.blog.moneyTag}</span>
            <h3>{t.blog.moneyTitle}</h3>
            <p>{t.blog.moneyBody}</p>
          </div>
          <div className="tool-card">
            <span className="tool-tag">{t.blog.processTag}</span>
            <h3>{t.blog.processTitle}</h3>
            <p>{t.blog.processBody}</p>
          </div>
        </div>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <span>{t.footer.licensed}</span>
      </footer>
    </>
  );
}
