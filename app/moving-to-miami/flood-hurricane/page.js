import FloodHurricanePageClient from "./FloodHurricanePageClient";

export const metadata = {
  title: "Miami Flood & Hurricane Risk Map | Miami-Dade & Broward",
  description:
    "Official FEMA flood hazard zones and live hurricane evacuation zones for Miami-Dade and Broward County, side by side on one page.",
};

export default function Page() {
  return <FloodHurricanePageClient />;
}
