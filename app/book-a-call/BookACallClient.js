"use client";

import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import AgentBio from "../components/AgentBio";
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
        <div className="lead-split">
          <form
            className="lead-form"
            action="https://formsubmit.co/mat.ravagnan@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New lead from Miami Home Guide" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_cc" value="3525520793@txt.att.net" />
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

            <label className="calc-field">
              <span>{t.bookCallPage.message}</span>
              <textarea name="Message" rows={4} />
            </label>

            <button type="submit" className="book-call-btn lead-form-submit">
              {t.bookCallPage.submit}
            </button>
          </form>

          <AgentBio />
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
