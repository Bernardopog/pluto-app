"use client";

import OverviewCard from "@/app/components/OverviewCard";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";
import {
  MdAttachMoney,
  MdOutlineRotateRight,
  MdPlayArrow,
} from "react-icons/md";

export default function DashboardHeader() {
  const { income, balance } = useFinanceStore();
  const { budgetList, getTotalExpenses } = useTransactionBudgetStore();

  const [typeOfExpense, setTypeOfExpense] = useState<"current" | "estimate">(
    "current"
  );

  const currentExpenses = Math.abs(getTotalExpenses());
  const estimateExpenses = budgetList.reduce(
    (acc, item) => acc + item.limit,
    0
  );
  const balancePerMonth = income - currentExpenses;

  const handleExpenseChange = () => {
    setTypeOfExpense(typeOfExpense === "current" ? "estimate" : "current");
  };

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
          <button
            type="button"
            className="absolute bottom-0 right-0 z-10 p-0.5 rounded-lg bg-chetwode-blue-600 text-2xl text-chetwode-blue-50 duration-300 ease-in-out"
            onClick={handleExpenseChange}
          >
            <MdOutlineRotateRight />
          </button>
          {typeOfExpense === "current" ? (
            <OverviewCard
              title="Despesa"
              value={moneyFormatter(currentExpenses).replace("R$", "")}
              valueType="currency"
              icon={<MdPlayArrow className="rotate-90" />}
            />
          ) : (
            <OverviewCard
              title="Estimativa de Despesa"
              value={moneyFormatter(estimateExpenses).replace("R$", "")}
              valueType="currency"
              icon={<MdPlayArrow className="rotate-90" />}
            />
          )}
        </li>
      </ul>
    </header>
  );
}
