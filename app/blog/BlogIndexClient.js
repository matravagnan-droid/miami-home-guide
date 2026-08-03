"use client";

import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import BackLink from "../components/BackLink";
import { useLanguage } from "../i18n/LanguageContext";

const DATE_LOCALES = {
  en: "en-US",
  es: "es-US",
  fr: "fr-FR",
  ht: "en-US",
  pt: "pt-BR",
  it: "it-IT",
};

export default function BlogIndexClient({ posts }) {
  const { t, lang } = useLanguage();
  const locale = DATE_LOCALES[lang] || "en-US";

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact">
        <div className="eyebrow">{t.blogSection.eyebrow}</div>
        <h1>{t.blogSection.h1}</h1>
      </section>

      <BackLink href="/">{t.moving.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{t.blogSection.p}</p>

        <div className="tools-grid">
          {posts.map((post) => {
            const date = new Date(post.publishDate).toLocaleDateString(locale, {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            return (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="tool-card blog-card"
              >
                <span className="tool-tag">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="article-card-meta">
                  {date} · {post.readTime}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <SiteFooter>
        <a href="/">{t.moving.backLink}</a>
      </SiteFooter>
    </>
  );
}
