import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPost } from "../../lib/blogPosts";
import BlogPostClient from "./BlogPostClient";

const BASE_URL = "https://miami-home-guide.vercel.app";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const url = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: `${post.title} | Miami Home Guide`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "Miami Home Guide",
      images: ["/images/hero-skyline.jpg"],
      locale: "en_US",
      type: "article",
      publishedTime: post.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/images/hero-skyline.jpg"],
    },
  };
}

export default function Page({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${BASE_URL}/images/hero-skyline.jpg`,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Mattia Ravagnan",
      jobTitle: "Licensed Real Estate Agent",
    },
    publisher: {
      "@type": "Organization",
      name: "Miami Home Guide",
      url: BASE_URL,
    },
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostClient post={post} allPosts={getAllBlogPosts()} />
    </>
  );
}
