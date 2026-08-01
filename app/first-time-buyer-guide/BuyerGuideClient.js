"use client";

import SiteNav from "../components/SiteNav";
import { useLanguage } from "../i18n/LanguageContext";

export default function BuyerGuideClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.buyerGuide.eyebrow}</div>
        <h1>{t.buyerGuide.h1}</h1>
        <p>{t.buyerGuide.p}</p>
      </section>

      <section className="section">
        <div className="steps-list">
          {t.buyerGuide.steps.map((step, i) => (
            <div className="step-item" key={step.title}>
              <div className="step-number">{i + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.moving.backLink}</a>
      </footer>
    </>
  );
}
