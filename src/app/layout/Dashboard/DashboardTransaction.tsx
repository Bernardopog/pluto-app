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
      className="flex flex-col p-2 gap-2 border-b-2 rounded-lg bg-star-dust-50 border-transparent shadow-md duration-300 ease-in-out hover:shadow-lg hover:border-chetwode-blue-700"
    >
      <header className="flex justify-between">
        <h2 className="sub-title">Transações</h2>
        <MoreDetail href="/transaction" />
      </header>
      <DashboardTransactionForm />
      <Divider direction="horizontal" />
      <DashboardTransactionList />
    </article>
  );
}
