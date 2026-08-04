import HomeClient from "./HomeClient";
import { getMiamiArticles } from "./lib/miamiFeeds";

export const metadata = {
  title: "Miami Real Estate Guide | Homes & Mortgage Calculators",
  description:
    "Real Miami-Dade and Broward neighborhood guides, mortgage and property tax calculators, from a licensed local Miami real estate agent.",
  openGraph: {
    title: "Miami Real Estate Guide | Homes & Mortgage Calculators",
    description:
      "Real Miami-Dade and Broward neighborhood guides, mortgage and property tax calculators, from a licensed local Miami real estate agent.",
    url: "https://mymiamihomeguide.com/",
    siteName: "Miami Home Guide",
    images: ["/images/hero-skyline-panorama.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miami Real Estate Guide | Homes & Mortgage Calculators",
    description:
      "Real Miami-Dade and Broward neighborhood guides, mortgage and property tax calculators, from a licensed local Miami real estate agent.",
    images: ["/images/hero-skyline-panorama.jpg"],
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Miami Home Guide",
  description:
    "Licensed Miami real estate agent serving Miami-Dade and Broward County with neighborhood guides, mortgage and property tax calculators, and home search help.",
  url: "https://mymiamihomeguide.com/",
  image: "https://mymiamihomeguide.com/images/hero-skyline-panorama.jpg",
  email: "mat.ravagnan@gmail.com",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
    { "@type": "AdministrativeArea", name: "Broward County, FL" },
  ],
};

export default async function Page() {
  const articles = await getMiamiArticles();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HomeClient articles={articles} />
    </>
  );
}
