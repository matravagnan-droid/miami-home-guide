import BuyerGuideClient from "./BuyerGuideClient";

export const metadata = {
  title: "First-Time Homebuyer Guide | Miami-Dade & Broward",
  description:
    "The 6 stages of buying your first home in Miami — from preparing your finances and getting pre-approved to closing day — explained step by step.",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to buy your first home in Miami",
  step: [
    { "@type": "HowToStep", name: "Think it through", text: "Work with a licensed agent from your very first questions through closing. Before you tour a single home, get clear on what you actually want and what you can realistically afford." },
    { "@type": "HowToStep", name: "Prepare your finances", text: "Start saving for a down payment, work on improving your credit score, and set aside an extra 2-5% of the purchase price for closing costs." },
    { "@type": "HowToStep", name: "Get pre-approved", text: "Gather your W-2s or 1099s, tax returns, bank statements, proof of assets, debt information, and rental payment history." },
    { "@type": "HowToStep", name: "Find your home", text: "Once pre-approved, tour homes that fit your budget and needs, then submit an offer on the one you love." },
    { "@type": "HowToStep", name: "Under contract", text: "Your inspection period begins, and if you're financing, your lender orders an appraisal." },
    { "@type": "HowToStep", name: "Closing day", text: "Sign the paperwork, get your keys, and you're officially a homeowner." },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BuyerGuideClient />
    </>
  );
}
