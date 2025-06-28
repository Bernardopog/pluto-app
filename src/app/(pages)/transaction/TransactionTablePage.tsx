import { TransactionAction } from "@/app/components/TransactionPage/TransactionAction";
import { TransactionFilter } from "@/app/components/TransactionPage/TransactionFilter";
import { TransactionOverview } from "@/app/components/TransactionPage/TransactionOverview";
import { TransactionTable } from "@/app/components/TransactionPage/TransactionTable";

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
