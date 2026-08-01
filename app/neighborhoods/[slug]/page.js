import { notFound } from "next/navigation";
import { getAllNeighborhoods, getNeighborhood } from "../../lib/neighborhoods";
import NeighborhoodPageClient from "./NeighborhoodPageClient";

export function generateStaticParams() {
  return getAllNeighborhoods().map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) return {};

  return {
    title: `${neighborhood.name} Miami Real Estate Guide | History, Photos & Prices`,
    description: `${neighborhood.tagline.en} — history, photos, and single-family, condo, and multifamily pricing for ${neighborhood.name}, Miami-Dade.`,
  };
}

export default function Page({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) notFound();

  return <NeighborhoodPageClient neighborhood={neighborhood} />;
}
