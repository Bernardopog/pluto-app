import { TransactionAction } from "@/app/components/TransactionPage/TransactionAction";
import { TransactionOverview } from "@/app/components/TransactionPage/TransactionOverview";
import { TransactionTable } from "@/app/components/TransactionPage/TransactionTable";

export default function TransactionPage() {
  return (
    <main className="page h-screen flex flex-col">
      <h2 className="main-title">Transações</h2>
      <section className="transaction-page grid flex-1">
        <TransactionOverview />
        <TransactionAction />
        <TransactionTable />
      </section>
    </main>
  );
}
