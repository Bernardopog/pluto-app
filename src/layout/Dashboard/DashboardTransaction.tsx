import {
  DashboardTransactionForm,
  DashboardTransactionList,
  DashboardTransactionTitle,
} from "@/components/Dashboard/DashboardTransaction";
import Divider from "@/ui/Divider";
import MoreDetail from "@/ui/MoreDetail";

export default function DashboardTransaction() {
  return (
    <article
      id="dashboard-transaction"
      className="base-card flex flex-col gap-2"
    >
      <header className="flex justify-between">
        <DashboardTransactionTitle />
        <MoreDetail href="/transaction" />
      </header>
      <DashboardTransactionForm />
      <Divider direction="horizontal" />
      <DashboardTransactionList />
    </article>
  );
}
