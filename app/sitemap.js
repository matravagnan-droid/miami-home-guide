import { getAllNeighborhoods } from "./lib/neighborhoods";
import { getAllBlogPosts } from "./lib/blogPosts";

const BASE_URL = "https://miami-home-guide.vercel.app";

const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/moving-to-miami", changeFrequency: "monthly", priority: 0.8 },
  { path: "/moving-to-miami/schools", changeFrequency: "monthly", priority: 0.6 },
  { path: "/moving-to-miami/walkability", changeFrequency: "monthly", priority: 0.6 },
  { path: "/moving-to-miami/crime", changeFrequency: "monthly", priority: 0.6 },
  { path: "/moving-to-miami/flood-hurricane", changeFrequency: "monthly", priority: 0.6 },
  { path: "/mortgage-calculator", changeFrequency: "monthly", priority: 0.9 },
  { path: "/property-tax-calculator", changeFrequency: "monthly", priority: 0.9 },
  { path: "/search-homes", changeFrequency: "weekly", priority: 0.8 },
  { path: "/median-prices", changeFrequency: "weekly", priority: 0.8 },
  { path: "/first-time-buyer-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/book-a-call", changeFrequency: "yearly", priority: 0.5 },
  { path: "/get-pre-approved", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const neighborhoodEntries = getAllNeighborhoods().map((n) => ({
    url: `${BASE_URL}/neighborhoods/${n.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...neighborhoodEntries, ...blogEntries];
}
