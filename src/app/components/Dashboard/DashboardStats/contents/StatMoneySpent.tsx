import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useMemo } from "react";
import { MdPlayArrow } from "react-icons/md";

export default function StatMoneySpent() {
  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list
  );

  const negativeTransaction = useMemo(
    () => transactionList.filter((transaction) => transaction.value < 0),
    [transactionList]
  );

  const spentMoney = useMemo(
    () =>
      negativeTransaction.reduce(
        (acc, transaction) => acc + transaction.value,
        0
      ),
    [negativeTransaction]
  );

  return (
    <>
      <h3 className="subsubtitle">Dinheiro Gasto</h3>
      <p className="stat-result inline-flex items-center">
        {moneyFormatter(Math.abs(spentMoney))}
        <MdPlayArrow className="rotate-90 opacity-50" />
      </p>
    </>
  );
}
