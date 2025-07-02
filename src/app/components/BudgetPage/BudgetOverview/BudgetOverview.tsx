"use client";

import {
  MdAttachMoney,
  MdOutlineRotateRight,
  MdPlayArrow,
} from "react-icons/md";
import OverviewCard from "../../OverviewCard";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";

export default function BudgetOverview() {
  const { budgetList, getExpenses } = useTransactionBudgetStore();

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

  return (
    <header id="budget-overview" className="mt-2">
      <ul className="grid grid-cols-1 gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <li className="lg:col-span-3 xl:col-span-1">
          <OverviewCard
            title="Dinheiro Alocado para Orçamento"
            icon={<MdAttachMoney />}
            value={moneyFormatter(
              budgetList.reduce((acc, item) => acc + item.limit, 0)
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
                Math.abs(
                  getExpenses(
                    budgetList.filter((bdgt) => {
                      return (
                        bdgt.limit ===
                        Math.max(...budgetList.map((b) => b.limit))
                      );
                    })[0].id
                  )
                )
              ).replace("R$", "")}
              complement={
                budgetList.filter((bdgt) => {
                  return (
                    bdgt.limit === Math.max(...budgetList.map((b) => b.limit))
                  );
                })[0].name
              }
              valueType="currency"
            />
          ) : (
            <OverviewCard
              title="Menor Gasto - Orçamento"
              icon={<MdPlayArrow className="rotate-90" />}
              value={moneyFormatter(
                Math.abs(
                  getExpenses(
                    budgetList.filter((bdgt) => {
                      return (
                        bdgt.limit ===
                        Math.min(...budgetList.map((b) => b.limit))
                      );
                    })[0].id
                  )
                )
              ).replace("R$", "")}
              complement={
                budgetList.filter((bdgt) => {
                  return (
                    bdgt.limit === Math.min(...budgetList.map((b) => b.limit))
                  );
                })[0].name
              }
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
                budgetList.filter((bdgt) => {
                  return (
                    bdgt.limit === Math.max(...budgetList.map((b) => b.limit))
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
                budgetList.filter((bdgt) => {
                  return (
                    bdgt.limit === Math.min(...budgetList.map((b) => b.limit))
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
