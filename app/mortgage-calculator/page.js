import MortgageCalculatorClient from "./MortgageCalculatorClient";

export const metadata = {
  title: "Miami Mortgage Calculator | Estimate Your Monthly Payment",
  description:
    "Free mortgage calculator for Miami-Dade and Broward homebuyers. Estimate your monthly payment including principal, interest, property tax, insurance, and HOA.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do I need for a down payment on a home in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional loans often allow as little as 3-5% down, though putting down less than 20% typically requires private mortgage insurance (PMI). FHA loans allow as little as 3.5% down. Use the calculator above to see how different down payment percentages affect your monthly payment.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in a typical Miami mortgage payment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beyond principal and interest, most Miami-area mortgage payments (paid through an escrow account) include property taxes, homeowners insurance, and, for condos or planned communities, HOA dues. Florida homeowners insurance tends to run higher than the national average due to hurricane and flood risk.",
      },
    },
    {
      "@type": "Question",
      name: "What credit score do I need to buy a home in Florida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Conventional loans typically require a minimum credit score around 620, while FHA loans can go as low as 580 with a 3.5% down payment. Higher credit scores generally qualify for lower interest rates.",
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
      <MortgageCalculatorClient />
    </>
  );
}
