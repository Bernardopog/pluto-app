import { BudgetAction } from "@/app/components/BudgetPage/BudgetAction";
import { BudgetOverview } from "@/app/components/BudgetPage/BudgetOverview";

export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Orçamento</h2>
      <section className="budget-page grid h-[calc(100vh-32px-24px)]">
        <BudgetOverview />
        <BudgetAction />
      </section>
    </main>
  );
}
