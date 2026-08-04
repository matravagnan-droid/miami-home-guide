import { notFound } from "next/navigation";
import { getAllNeighborhoods, getNeighborhood } from "../../lib/neighborhoods";
import { getNearbyPlaces } from "../../lib/nearbyPlaces";
import { getNeighborhoodBoundary } from "../../lib/neighborhoodBoundaries";
import NeighborhoodPageClient from "./NeighborhoodPageClient";

export function generateStaticParams() {
  return getAllNeighborhoods().map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) return {};

  return {
    title: `${neighborhood.name} Miami Real Estate Guide | History, Photos & Prices`,
    description: `${neighborhood.tagline.en} — history, photos, and single-family and condo pricing for ${neighborhood.name}, Miami-Dade.`,
  };
}

export default async function Page({ params }) {
  const neighborhood = getNeighborhood(params.slug);
  if (!neighborhood) notFound();

  const [pois, boundary] = await Promise.all([
    getNearbyPlaces(neighborhood.center),
    getNeighborhoodBoundary(neighborhood.slug),
  ]);

  return <NeighborhoodPageClient neighborhood={neighborhood} pois={pois} boundary={boundary} />;
}
