import MedianPricesClient from "./MedianPricesClient";

export const metadata = {
  title: "Median Home Prices by Area | Miami Home Guide",
  description:
    "Click any city in Miami-Dade or Broward County on the map to see its median single-family and condo home price.",
};

export default function Page() {
  return <MedianPricesClient />;
}
