import BlogIndexClient from "./BlogIndexClient";
import { getAllBlogPosts } from "../lib/blogPosts";

export const metadata = {
  title: "Real Estate Guides | Miami Home Guide",
  description:
    "In-depth, research-backed guides on buying, financing, and choosing a neighborhood in Miami-Dade and Broward — from a licensed local Miami real estate agent.",
  openGraph: {
    title: "Real Estate Guides | Miami Home Guide",
    description:
      "In-depth, research-backed guides on buying, financing, and choosing a neighborhood in Miami-Dade and Broward.",
    url: "https://mymiamihomeguide.com/blog",
    siteName: "Miami Home Guide",
    images: ["/images/hero-skyline-panorama.jpg"],
    locale: "en_US",
    type: "website",
  },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Real Estate Guides",
  description:
    "In-depth, research-backed guides on buying, financing, and choosing a neighborhood in Miami-Dade and Broward.",
  url: "https://mymiamihomeguide.com/blog",
  hasPart: getAllBlogPosts().map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `https://mymiamihomeguide.com/blog/${post.slug}`,
    datePublished: post.publishDate,
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <BlogIndexClient posts={getAllBlogPosts()} />
    </>
  );
}
