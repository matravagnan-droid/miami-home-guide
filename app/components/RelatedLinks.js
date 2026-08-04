"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function RelatedLinks({ items }) {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="section-head">
        <h2>{t.crossLinks.heading}</h2>
      </div>
      <div className="tools-grid">
        {items.map(({ href, key }) => (
          <a key={href} href={href} className="tool-card blog-card">
            <h3>{t.crossLinks[key].title}</h3>
            <p>{t.crossLinks[key].note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
