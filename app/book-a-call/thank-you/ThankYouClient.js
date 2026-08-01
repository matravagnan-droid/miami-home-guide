"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
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

      <SiteFooter>
        <a href="/">{t.bookCallPage.thankYouBack}</a>
      </SiteFooter>
    </>
  );
}
