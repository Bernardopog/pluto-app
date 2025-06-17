import {
  DashboardTransactionForm,
  DashboardTransactionList,
} from "@/app/components/Dashboard/DashboardTransaction";
import Divider from "@/app/ui/Divider";
import MoreDetail from "@/app/ui/MoreDetail";

export default function DashboardTransaction() {
  return (
    <article
      id="dashboard-transaction"
      className="base-card flex flex-col gap-2"
    >
      <header className="flex justify-between">
        <h2 className="subtitle">Transações</h2>
        <MoreDetail href="/transaction" />
      </header>
      <DashboardTransactionForm />
      <Divider direction="horizontal" />
      <DashboardTransactionList />
    </article>
  );
}
