import PropertyTaxCalculatorClient from "./PropertyTaxCalculatorClient";

export const metadata = {
  title: "Miami-Dade & Broward Property Tax Calculator | 2025 Millage Rates",
  description:
    "Estimate your annual property tax bill in Miami-Dade or Broward County using official 2025 millage rates, with Florida's homestead exemption applied automatically.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is Miami-Dade property tax calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Miami-Dade property tax is calculated by multiplying your property's taxable assessed value by the combined millage rate of your city, the county, the school board, and any special districts, then dividing by 1,000. The Florida homestead exemption reduces taxable value by up to $50,000 for primary residences.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Florida homestead exemption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Florida's homestead exemption removes the first $25,000 of a primary residence's assessed value from all property taxes, and a second $25,000, applied to the portion of value between $50,000 and $75,000, from all taxes except school district levies.",
      },
    },
    {
      "@type": "Question",
      name: "Are property taxes higher in Miami-Dade or Broward County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the specific city. In 2025, Miami-Dade's combined millage rates ranged from about 15.5 mills in Key Biscayne to over 20 mills in Homestead, while Broward ranged from about 16.8 mills in Weston to over 22 mills in parts of Hollywood. Compare specific cities using the calculator above.",
      },
    },
    {
      "@type": "Question",
      name: "What is Florida's Save Our Homes cap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Save Our Homes limits annual increases in a homesteaded property's assessed value to 3% per year, or the rate of inflation if lower, even if market value rises faster. It only applies after the first year of homestead exemption, so it does not affect this calculator's estimate for a home you're about to buy.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PropertyTaxCalculatorClient />
    </>
  );
}
