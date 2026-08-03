"use client";

import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import BackLink from "../../components/BackLink";
import { useLanguage } from "../../i18n/LanguageContext";
import { getNeighborhood } from "../../lib/neighborhoods";

const DATE_LOCALES = {
  en: "en-US",
  es: "es-US",
  fr: "fr-FR",
  ht: "en-US",
  pt: "pt-BR",
  it: "it-IT",
};

function renderRich(content, keyPrefix) {
  if (typeof content === "string") return content;
  return content.map((seg, i) =>
    typeof seg === "string" ? (
      <span key={`${keyPrefix}-${i}`}>{seg}</span>
    ) : (
      <a key={`${keyPrefix}-${i}`} className="article-link" href={seg.href}>
        {seg.text}
      </a>
    )
  );
}

export default function BlogPostClient({ post, allPosts }) {
  const { t, lang } = useLanguage();
  const locale = DATE_LOCALES[lang] || "en-US";
  const date = new Date(post.publishDate).toLocaleDateString(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="horizon" />
      <SiteNav />

      <section className="hero hero-compact article-hero">
        <div className="article-meta">
          <span className="article-meta-badge">{post.category}</span>
          <span className="article-meta-date">
            {t.blogSection.publishedLabel} {date} · {post.readTime}
          </span>
        </div>
        <h1>{post.title}</h1>
      </section>

      <BackLink href="/blog">{t.blogSection.backLink}</BackLink>

      <section className="section" style={{ paddingTop: 32 }}>
        <p className="lead-intro">{post.excerpt}</p>

        <div className="article-body">
          {post.sections.map((section, si) => (
            <div key={si}>
              <h2>{section.heading}</h2>

              {section.paragraphs?.map((p, pi) => (
                <p key={`p-${si}-${pi}`}>{renderRich(p, `p-${si}-${pi}`)}</p>
              ))}

              {section.list && (
                <ul>
                  {section.list.map((item, li) => (
                    <li key={`li-${si}-${li}`}>{renderRich(item, `li-${si}-${li}`)}</li>
                  ))}
                </ul>
              )}

              {section.checklist && (
                <div className="steps-list" style={{ marginBottom: 20 }}>
                  {section.checklist.map((step, ci) => (
                    <div className="step-item" key={`step-${si}-${ci}`}>
                      <div className="step-number">
                        <span className="step-number-text">{ci + 1}</span>
                      </div>
                      <div className="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.neighborhoods && (
                <div className="tools-grid" style={{ marginBottom: 24 }}>
                  {section.neighborhoods.map((n) => {
                    const neighborhood = getNeighborhood(n.slug);
                    if (!neighborhood) return null;
                    return (
                      <a
                        key={n.slug}
                        href={`/neighborhoods/${n.slug}`}
                        className="tool-card blog-card"
                      >
                        <h3>{neighborhood.name}</h3>
                        <p>{n.note}</p>
                        <span className="article-neighborhood-note">View neighborhood guide →</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="article-source-note">
          This article is informational and reflects publicly available Florida
          statutes and lending/closing-cost guidelines verified as of{" "}
          {new Date(post.publishDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
          . It is not legal, financial, or tax advice — laws, rates, and fees
          change, so always confirm current figures with a licensed real
          estate attorney, lender, or title company before making a decision.
        </p>
      </section>

      {post.faqs?.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <h2>{t.blogSection.faqHeading}</h2>
          </div>
          <div className="faq-list">
            {post.faqs.map((faq, fi) => (
              <details className="faq-item" key={fi}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {relatedPosts.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <h2>{t.blogSection.moreGuidesHeading}</h2>
          </div>
          <div className="related-posts-grid">
            {relatedPosts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="tool-card blog-card">
                <span className="tool-tag">{p.category}</span>
                <h3>{p.title}</h3>
                <span className="article-card-meta">{t.blogSection.readMore}</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <SiteFooter>
        <a href="/blog">{t.blogSection.backLink}</a>
      </SiteFooter>
    </>
  );
}
