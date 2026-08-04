"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function AgentBio() {
  const { t } = useLanguage();

  return (
    <div className="agent-bio">
      <img src="/images/mattia-headshot.jpg" alt={t.agentBio.name} className="agent-bio-photo" />
      <h3 className="agent-bio-name">{t.agentBio.name}</h3>
      <p className="agent-bio-text">{t.agentBio.bio}</p>
      <p className="agent-bio-referral">
        {t.agentBio.referral}{" "}
        <a href="mailto:mat.ravagnan@gmail.com">{t.agentBio.referralCta}</a>
      </p>
    </div>
  );
}
