import { TransactionAction } from "@/app/components/TransactionPage/TransactionAction";
import { TransactionTable } from "@/app/components/TransactionPage/TransactionTable";

export default function TransactionPage() {
  return (
    <main className="page h-screen flex flex-col">
      <h2 className="main-title">Transações</h2>
      <section className="transaction-page grid flex-1 overflow-hidden">
        <TransactionAction />
        <TransactionTable />
      </section>
    </main>
  );
}
