import DashboardBudget from "@/app/layout/Dashboard/DashboardBudget";
import DashboardHeader from "@/app/layout/Dashboard/DashboardHeader";
import DashboardTransaction from "@/app/layout/Dashboard/DashboardTransaction";
import DashboardVault from "@/app/layout/Dashboard/DashboardVault";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Dashboard",
  description: "Dashboard with your financial infos",
};

export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Dashboard</h2>
      <section className="dashboard-layout grid min-h-[calc(100vh-32px-24px)]">
        <DashboardHeader />
        <DashboardVault />
        <DashboardBudget />
        <DashboardTransaction />
      </section>
    </main>
  );
}
