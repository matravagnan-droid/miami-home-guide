import SearchHomesClient from "./SearchHomesClient";

export const metadata = {
  title: "Get a Custom Home List in Miami-Dade & Broward | Miami Home Guide",
  description:
    "Tell us your price, areas, property type, beds, baths, and more — and get a customized list of matching homes in Miami-Dade and Broward County sent to you.",
};

export default function Page() {
  return <SearchHomesClient />;
}
