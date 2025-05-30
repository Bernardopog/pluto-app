import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Dashboard",
  description: "Dashboard with your financial infos",
};

export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Dashboard</h2>
    </main>
  );
}
