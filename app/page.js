import HomeClient from "./HomeClient";
import { getMiamiArticles } from "./lib/miamiFeeds";

export const metadata = {
  title: "Miami Real Estate Guide | Homes, Mortgage & Property Tax Calculators",
  description:
    "Explore Miami-Dade and Broward neighborhoods, estimate your mortgage payment and property taxes, and get local insight from a licensed Miami real estate agent — not a national franchise.",
};

export default async function Page() {
  const articles = await getMiamiArticles();
  return <HomeClient articles={articles} />;
}
