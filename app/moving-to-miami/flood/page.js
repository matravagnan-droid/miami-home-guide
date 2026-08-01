import FloodPageClient from "./FloodPageClient";

export const metadata = {
  title: "Miami Flood Zone Map | FEMA Flood Risk by Neighborhood",
  description:
    "See official FEMA flood hazard zones for Miami-Dade and Broward County neighborhoods before you buy, live-loaded from FEMA's National Flood Hazard Layer.",
};

export default function Page() {
  return <FloodPageClient />;
}
