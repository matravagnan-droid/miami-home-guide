import SearchHomesClient from "./SearchHomesClient";

export const metadata = {
  title: "Search Homes in Miami-Dade & Broward | Miami Home Guide",
  description:
    "Set your search criteria — city, price, property type, beds, baths, HOA, taxes, and more — and get matching active listings in Miami-Dade and Broward County emailed to you.",
};

export default function Page() {
  return <SearchHomesClient />;
}
