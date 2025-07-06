import { BudgetAction } from "@/app/components/BudgetPage/BudgetAction";
import { BudgetChart } from "@/app/components/BudgetPage/BudgetChart";
import { BudgetList } from "@/app/components/BudgetPage/BudgetList";
import { BudgetOverview } from "@/app/components/BudgetPage/BudgetOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Budget",
  description: "Dashboard for budget info and management",
};

export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Orçamento</h2>
      <section className="budget-page grid h-[calc(100vh-32px-24px)]">
        <BudgetOverview />
        <BudgetAction />
        <BudgetChart />
        <BudgetList />
      </section>
    </main>
  );
}
