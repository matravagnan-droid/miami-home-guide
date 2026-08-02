"use client";

import { useEffect, useState } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";

export default function GetPreApprovedClient() {
  const { t } = useLanguage();
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(`${window.location.origin}/get-pre-approved/thank-you`);
  }, []);

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.preApprovalPage.eyebrow}</div>
        <h1>{t.preApprovalPage.h1}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.preApprovalPage.p}</p>

        <form
          className="lead-form lead-form-wide"
          action="https://formsubmit.co/mat.ravagnan@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New pre-approval lead from Miami Home Guide" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value="3525520793@txt.att.net" />
          {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}

          <div className="lead-form-row">
            <label className="calc-field">
              <span>{t.preApprovalPage.firstName}</span>
              <input type="text" name="First Name" required />
            </label>
            <label className="calc-field">
              <span>{t.preApprovalPage.lastName}</span>
              <input type="text" name="Last Name" required />
            </label>
          </div>

          <label className="calc-field">
            <span>{t.preApprovalPage.phone}</span>
            <input type="tel" name="Phone" required />
          </label>

          <label className="calc-field">
            <span>{t.preApprovalPage.email}</span>
            <input type="email" name="Email" />
          </label>

          <button type="submit" className="book-call-btn lead-form-submit">
            {t.preApprovalPage.submit}
          </button>
        </form>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
