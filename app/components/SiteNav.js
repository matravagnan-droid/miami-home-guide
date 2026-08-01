"use client";

import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../i18n/LanguageContext";

export default function SiteNav() {
  const { t } = useLanguage();

  return (
    <nav className="nav">
      <a className="nav-logo" href="/">Miami Home Guide</a>
      <div className="nav-right">
        <div className="nav-links">
          <a href="/#tools">{t.nav.tools}</a>
          <a href="/mortgage-calculator">{t.nav.mortgageCalculator}</a>
          <a href="/property-tax-calculator">{t.nav.propertyTaxCalculator}</a>
          <a href="/moving-to-miami">{t.nav.movingToMiami}</a>
          <a href="/#neighborhoods">{t.nav.neighborhoods}</a>
          <a href="/#blog">{t.nav.blog}</a>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
}
