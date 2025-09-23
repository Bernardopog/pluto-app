"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import {
  OverviewCard,
  OverviewCardSwitch,
} from "@/app/components/OverviewCard";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { MdAttachMoney, MdList, MdPlayArrow } from "react-icons/md";
import { useMemo } from "react";

export default function TransactionOverview() {
  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list
  );

  const currentMonthTransactions = useMemo(
    () =>
      transactionList.filter((txn) => {
        const date = new Date(txn.date);
        return (
          date.getMonth() === new Date().getMonth() &&
          date.getFullYear() === new Date().getFullYear()
        );
      }),
    [transactionList]
  );

  return (
    <header id="transaction-overview" className="mt-2">
      <ul className="grid grid-cols-1 gap-2 items-stretch sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-4">
        <li className="relative md:col-span-3 xl:col-span-1">
          <OverviewCardSwitch>
            <OverviewCard
              title="Saldo de transações (mês)"
              value={moneyFormatter(
                currentMonthTransactions.reduce(
                  (acc, txn) => acc + txn.value,
                  0
                )
              ).replace("R$", "")}
              valueType="currency"
              icon={<MdAttachMoney />}
            />
            <OverviewCard
              title="Saldo de transações (total)"
              value={moneyFormatter(
                transactionList.reduce((acc, txn) => acc + txn.value, 0)
              ).replace("R$", "")}
              valueType="currency"
              icon={<MdAttachMoney />}
            />
          </OverviewCardSwitch>
        </li>
        <li>
          <OverviewCard
            title="Ganho com transações"
            value={moneyFormatter(
              transactionList
                .filter((txn) => txn.value > 0)
                .reduce((acc, txn) => acc + txn.value, 0)
            ).replace("R$", "")}
            valueType="currency"
            icon={<MdPlayArrow className="rotate-270" />}
          />
        </li>
        <li>
          <OverviewCard
            title="Perdido com transações"
            value={moneyFormatter(
              transactionList
                .filter((txn) => txn.value < 0)
                .reduce((acc, txn) => acc + txn.value, 0)
            ).replace("R$", "")}
            valueType="currency"
            icon={<MdPlayArrow className="rotate-90" />}
          />
        </li>
        <li>
          <OverviewCard
            title="Número de transações"
            value={transactionList.length}
            valueType="number"
            icon={<MdList />}
            complement={`${
              transactionList.length > 1 ? "transações" : "transação"
            }`}
          />
        </li>
      </ul>
    </header>
  );
}
