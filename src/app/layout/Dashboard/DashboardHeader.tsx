"use client";

import OverviewCard from "@/app/components/OverviewCard";
import { useBudgetStore } from "@/app/stores/useBudgetStore";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { MdAttachMoney, MdPlayArrow } from "react-icons/md";

export default function DashboardHeader() {
  const { income, balance } = useFinanceStore();
  const { totalExpenses } = useBudgetStore();

  const expenses = totalExpenses();

  const balancePerMonth = income - expenses;

  return (
    <header className="mt-2" id="dashboard-overview">
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr] lg:grid-cols-3 xl:grid-cols-4">
        <li className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
          <OverviewCard
            title="Saldo"
            money={balance}
            icon={<MdAttachMoney />}
          />
        </li>
        <li className="sm:col-span-2 lg:col-span-1">
          <OverviewCard
            title="Previsão do mês"
            money={balancePerMonth}
            icon={<MdAttachMoney />}
          />
        </li>
        <li>
          <OverviewCard
            title="Renda"
            money={income}
            icon={<MdPlayArrow className="rotate-270" />}
          />
        </li>
        <li>
          <OverviewCard
            title="Despesa"
            money={expenses}
            icon={<MdPlayArrow className="rotate-90" />}
          />
        </li>
      </ul>
    </header>
  );
}
