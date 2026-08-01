import HomeClient from "./HomeClient";

export const metadata = {
  title: "Miami Real Estate Guide | Homes, Mortgage & Property Tax Calculators",
  description:
    "Explore Miami-Dade and Broward neighborhoods, estimate your mortgage payment and property taxes, and get local insight from a licensed Miami real estate agent — not a national franchise.",
};

export default function Page() {
  return <HomeClient />;
}
