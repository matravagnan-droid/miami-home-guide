"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ThankYouClient() {
  const { t } = useLanguage();

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <h1>{t.preApprovalPage.thankYouH1}</h1>
        <p>{t.preApprovalPage.thankYouP}</p>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
