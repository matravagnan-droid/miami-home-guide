export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/book-a-call/thank-you", "/get-pre-approved/thank-you"],
    },
    sitemap: "https://miami-home-guide.vercel.app/sitemap.xml",
  };
}
