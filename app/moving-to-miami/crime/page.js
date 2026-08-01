import CrimePageClient from "./CrimePageClient";

export const metadata = {
  title: "Miami Crime Map & Safety Resources | Miami-Dade & Broward",
  description:
    "Official crime-mapping tools from Miami-Dade Police and the Broward Sheriff's Office, so you can check safety data for any Miami-area address.",
};

export default function Page() {
  return <CrimePageClient />;
}
