"use client";

import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";

export default function BookACallClient() {
  const { t } = useLanguage();
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/book-a-call/thank-you`);
  }, []);

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.bookCallPage.eyebrow}</div>
        <h1>{t.bookCallPage.h1}</h1>
        <p>{t.bookCallPage.p}</p>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <form
          className="lead-form"
          action="https://formsubmit.co/mat.ravagnan@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New lead from Miami Home Guide" />
          <input type="hidden" name="_template" value="table" />
          {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}

          <div className="lead-form-row">
            <label className="calc-field">
              <span>{t.bookCallPage.firstName}</span>
              <input type="text" name="First Name" required />
            </label>
            <label className="calc-field">
              <span>{t.bookCallPage.lastName}</span>
              <input type="text" name="Last Name" required />
            </label>
          </div>

          <label className="calc-field">
            <span>{t.bookCallPage.phone}</span>
            <input type="tel" name="Phone" required />
          </label>

          <label className="calc-field">
            <span>{t.bookCallPage.email}</span>
            <input type="email" name="Email" />
          </label>

          <button type="submit" className="book-call-btn lead-form-submit">
            {t.bookCallPage.submit}
          </button>
        </form>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
