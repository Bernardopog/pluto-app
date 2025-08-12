"use client";

import {
  MdAttachMoney,
  MdOutlineRotateRight,
  MdPlayArrow,
} from "react-icons/md";
import OverviewCard from "../../components/OverviewCard";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";

export default function BudgetOverview() {
  const { budgetList, transactionData } = useTransactionBudgetStore();
  const transactionList = transactionData.list;

  const [typeBalance, setTypeBalance] = useState<"expense" | "revenue">(
    "expense"
  );
  const [typeAllocated, setTypeAllocated] = useState<"bigger" | "smaller">(
    "bigger"
  );

  const handleChangeOfAllocatedCard = () => {
    setTypeAllocated(typeAllocated === "bigger" ? "smaller" : "bigger");
  };
  const handleChangeOfBalanceCard = () => {
    setTypeBalance(typeBalance === "expense" ? "revenue" : "expense");
  };

  const bdgtLength = budgetList.length;

  const budgetsWithExpenses =
    bdgtLength > 0
      ? budgetList.map((bdgt) => {
          const total = transactionList
            .filter((txn) => txn.categoryId === bdgt.id && txn.value < 0)
            .reduce((acc, txn) => acc + txn.value, 0);
          return {
            ...bdgt,
            totalExpenses: Math.abs(total),
          };
        })
      : [{ id: 0, name: "Vazio", limit: 0, color: "#000", totalExpenses: 0 }];

  const budgetWithMostExpenses = budgetsWithExpenses.reduce(
    (prevValue, current) =>
      current.totalExpenses > prevValue.totalExpenses ? current : prevValue
  );

  const budgetWithLeastExpenses = budgetsWithExpenses.reduce(
    (prevValue, current) =>
      current.totalExpenses < prevValue.totalExpenses ? current : prevValue
  );

  const finalBudgetList =
    bdgtLength > 0
      ? budgetList
      : [{ id: 0, name: "Vazio", limit: 0, color: "#000", totalExpenses: 0 }];

  return (
    <header id="budget-overview" className="mt-2">
      <ul className="grid grid-cols-1 gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <li className="lg:col-span-3 xl:col-span-1">
          <OverviewCard
            title="Dinheiro Alocado para Orçamento"
            icon={<MdAttachMoney />}
            value={moneyFormatter(
              finalBudgetList.reduce((acc, item) => acc + item.limit, 0)
            ).replace("R$", "")}
            valueType="currency"
          />
        </li>
        <li className="relative">
          <button
            type="button"
            className="absolute bottom-0 right-0 z-10 p-0.5 rounded-lg bg-chetwode-blue-600 text-2xl text-chetwode-blue-50 duration-300 ease-in-out"
            onClick={handleChangeOfBalanceCard}
          >
            <MdOutlineRotateRight />
          </button>
          {typeBalance === "expense" ? (
            <OverviewCard
              title="Maior Gasto - Orçamento"
              icon={<MdPlayArrow className="rotate-90" />}
              value={moneyFormatter(
                budgetWithMostExpenses.totalExpenses
              ).replace("R$", "")}
              complement={budgetWithMostExpenses.name}
              valueType="currency"
            />
          ) : (
            <OverviewCard
              title="Menor Gasto - Orçamento"
              icon={<MdPlayArrow className="rotate-90" />}
              value={moneyFormatter(
                budgetWithLeastExpenses.totalExpenses
              ).replace("R$", "")}
              complement={budgetWithLeastExpenses.name}
              valueType="currency"
            />
          )}
        </li>
        <li className="relative">
          <button
            type="button"
            className="absolute bottom-0 right-0 z-10 p-0.5 rounded-lg bg-chetwode-blue-600 text-2xl text-chetwode-blue-50 duration-300 ease-in-out"
            onClick={handleChangeOfAllocatedCard}
          >
            <MdOutlineRotateRight />
          </button>
          {typeAllocated === "bigger" ? (
            <OverviewCard
              title="Maior Alocamento de Orçamento"
              icon={<MdAttachMoney />}
              value={
                finalBudgetList.filter((bdgt) => {
                  return (
                    bdgt.limit ===
                    Math.max(...finalBudgetList.map((b) => b.limit))
                  );
                })[0].name
              }
              valueType="number"
            />
          ) : (
            <OverviewCard
              title="Menor Alocamento de Orçamento"
              icon={<MdAttachMoney />}
              value={
                finalBudgetList.filter((bdgt) => {
                  return (
                    bdgt.limit ===
                    Math.min(...finalBudgetList.map((b) => b.limit))
                  );
                })[0].name
              }
              valueType="number"
            />
          )}
        </li>
        <li>
          <OverviewCard
            title="Categorias de Orçamento"
            value={budgetList.length}
            valueType="number"
            icon={<MdAttachMoney />}
            complement="de 10 Categorias"
          />
        </li>
      </ul>
    </header>
  );
}
