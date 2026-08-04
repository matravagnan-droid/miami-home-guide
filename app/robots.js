export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/book-a-call/thank-you", "/get-pre-approved/thank-you"],
    },
    sitemap: "https://mymiamihomeguide.com/sitemap.xml",
  };
}
