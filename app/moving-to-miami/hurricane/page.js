import HurricanePageClient from "./HurricanePageClient";

export const metadata = {
  title: "Miami Hurricane Evacuation Zone Map | Miami-Dade & Broward",
  description:
    "Look up official hurricane evacuation zones for Miami-Dade and Broward County neighborhoods, pulled live from each county's emergency management GIS data.",
};

export default function Page() {
  return <HurricanePageClient />;
}
