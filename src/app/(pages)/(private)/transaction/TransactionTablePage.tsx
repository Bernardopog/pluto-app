import TransactionAction from "@/app/layout/Transaction/TransactionAction";
import TransactionFilter from "@/app/layout/Transaction/TransactionFilter";
import TransactionOverview from "@/app/layout/Transaction/TransactionOverview";
import TransactionTable from "@/app/layout/Transaction/TransactionTable";

export default function TransactionTablePage() {
  return (
    <section
      id="transaction-view-page-txn"
      className="transaction-page grid h-full"
    >
      <TransactionOverview />
      <TransactionFilter />
      <TransactionAction />
      <TransactionTable />
    </section>
  );
}
