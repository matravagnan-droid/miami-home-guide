"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";
import { STEP_ICONS } from "./StepIcons";

const RADIUS = 130;

export default function BuyerGuideClient() {
  const { t } = useLanguage();
  const steps = t.buyerGuide.steps;

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.buyerGuide.eyebrow}</div>
        <h1>{t.buyerGuide.h1}</h1>
        <p>{t.buyerGuide.p}</p>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="promo-card">
          <h2>{t.preApprovalPromo.h2}</h2>
          <p>{t.preApprovalPromo.p}</p>
          <a href="/get-pre-approved" className="book-call-btn">{t.preApprovalPromo.cta}</a>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="steps-layout">
          <div className="steps-list">
            {steps.map((step, i) => (
              <div className="step-item" key={step.title}>
                <div className="step-number">{STEP_ICONS[i]}</div>
                <div className="step-content">
                  <h3><span className="step-content-num">{i + 1}.</span> {step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wheel-wrap">
            <div className="wheel">
              <div className="wheel-center">{STEP_ICONS[3]}</div>
              {steps.map((step, i) => {
                const angle = (360 / steps.length) * i - 90;
                const rad = (angle * Math.PI) / 180;
                const x = RADIUS * Math.cos(rad);
                const y = RADIUS * Math.sin(rad);
                return (
                  <div
                    className="wheel-node"
                    key={step.title}
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <div className="wheel-icon">{STEP_ICONS[i]}</div>
                    <span className="wheel-label">
                      <span className="wheel-label-num">{i + 1}</span>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
