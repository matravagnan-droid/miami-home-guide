"use client";

import SiteNav from "../../components/SiteNav";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ThankYouClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.bookCallPage.thankYouH1}</h1>
        <p>{t.bookCallPage.thankYouP}</p>
      </section>

      <footer>
        <span>&copy; {new Date().getFullYear()} Miami Home Guide</span>
        <a href="/">{t.bookCallPage.thankYouBack}</a>
      </footer>
    </>
  );
}
