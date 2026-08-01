"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function ArticleCard({ article, categoryLabel }) {
  const { lang } = useLanguage();

  const date = article.pubDate
    ? new Date(article.pubDate).toLocaleDateString(lang === "es" ? "es-US" : "en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <a className="article-card" href={article.link} target="_blank" rel="noopener noreferrer">
      <div
        className={`article-card-image${article.image ? "" : " article-card-image-fallback"}`}
        style={article.image ? { backgroundImage: `url(${article.image})` } : undefined}
      />
      <div className="article-card-body">
        <span className="tool-tag">{categoryLabel}</span>
        <h3>{article.title}</h3>
        {article.excerpt && <p>{article.excerpt}</p>}
        <span className="article-card-meta">
          {article.source}
          {date ? ` · ${date}` : ""}
        </span>
      </div>
    </a>
  );
}
