import WalkabilityPageClient from "./WalkabilityPageClient";

export const metadata = {
  title: "How Walkable Is Miami? Neighborhood Walkability Guide",
  description:
    "See which Miami neighborhoods are truly walkable versus car-dependent, plus a free Walk Score lookup for any address in Miami-Dade or Broward.",
};

export default function Page() {
  return <WalkabilityPageClient />;
}
