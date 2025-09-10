"use client";

import {
  OverviewCard,
  OverviewCardSwitch,
} from "@/app/components/OverviewCard";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useMemo } from "react";
import { MdAttachMoney, MdPlayArrow } from "react-icons/md";
import { useShallow } from "zustand/shallow";

export default function DashboardHeader() {
  const { income, balance } = useFinanceStore(
    useShallow((s) => ({
      income: s.income,
      balance: s.balance,
    }))
  );
  const getTotalExpenses = useTransactionBudgetStore((s) => s.getTotalExpenses);
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);
  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list
  );

  const currentExpenses = useMemo(
    () => Math.abs(getTotalExpenses()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getTotalExpenses, transactionList]
  );
  const estimateExpenses = budgetList.reduce(
    (acc, item) => acc + item.limit,
    0
  );
  const balancePerMonth = income - currentExpenses;

  return (
    <header className="mt-2" id="dashboard-overview">
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr] lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <li className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
          <OverviewCard
            title="Saldo"
            value={moneyFormatter(balance).replace("R$", "")}
            valueType="currency"
            icon={<MdAttachMoney />}
          />
        </li>
        <li className="sm:col-span-2 lg:col-span-1">
          <OverviewCard
            title="Previsão do mês"
            value={moneyFormatter(balancePerMonth).replace("R$", "")}
            valueType="currency"
            icon={<MdAttachMoney />}
          />
        </li>
        <li>
          <OverviewCard
            title="Renda"
            value={moneyFormatter(income).replace("R$", "")}
            valueType="currency"
            icon={<MdPlayArrow className="rotate-270" />}
          />
        </li>
        <li className="relative">
          <OverviewCardSwitch>
            <OverviewCard
              title="Despesa"
              value={moneyFormatter(currentExpenses).replace("R$", "")}
              valueType="currency"
              icon={<MdPlayArrow className="rotate-90" />}
            />
            <OverviewCard
              title="Estimativa de Despesa"
              value={moneyFormatter(estimateExpenses).replace("R$", "")}
              valueType="currency"
              icon={<MdPlayArrow className="rotate-90" />}
            />
          </OverviewCardSwitch>
        </li>
      </ul>
    </header>
  );
}
