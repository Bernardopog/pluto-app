import { FormEvent, useEffect, useState } from "react";
import {
  ITransaction,
  useTransactionBudgetStore,
} from "@/app/stores/useTransactionBudgetStore";
import { useModalStore } from "@/app/stores/useModalStore";

export const useModalTransactionLogic = (type: "create" | "update") => {
  const {
    createTransation,
    updateTransaction,
    budgetList,
    selectedTransaction,
    unselectTransaction,
  } = useTransactionBudgetStore();
  const { toggleModal } = useModalStore();

  const [transactionName, setTransactionName] = useState("");
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [transactionCategory, setTransactionCategory] = useState<number | null>(
    null
  );
  const [transactionType, setTransactionType] = useState<"income" | "outcome">(
    "outcome"
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (type === "update" && selectedTransaction) {
      setTransactionName(selectedTransaction.name);
      setTransactionValue(selectedTransaction.value.toString());
      setTransactionCategory(selectedTransaction.categoryId);
      setTransactionDate(
        new Date(selectedTransaction.date).toISOString().split("T")[0]
      );
    }
  }, [type, selectedTransaction]);

  const handleReset = () => {
    setTransactionName("");
    setTransactionValue("");
    setTransactionCategory(null);
    setTransactionDate(new Date().toISOString().split("T")[0]);
  };

  const validator = () => {
    if (transactionName.trim() === "") return false;
    if (transactionValue === "" || Number.isNaN(Number(transactionValue)))
      return false;
    return true;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    let money = Number(transactionValue);
    if (money < 0) money *= -1;
    if (transactionType === "outcome") money *= -1;

    if (
      !validator() ||
      transactionCategory === null ||
      Number.isNaN(Number(transactionCategory))
    ) {
      setHasError(true);
      return;
    }

    const data: ITransaction = {
      id:
        type === "update"
          ? selectedTransaction?.id ?? Math.random() * 100000
          : Math.random() * 100000,
      name: transactionName,
      value: money,
      date: new Date(transactionDate),
      categoryId: Number(transactionCategory),
    };

    if (type === "create") {
      createTransation(data);
      handleReset();
    } else {
      updateTransaction(data.id, data);
    }

    toggleModal();
    unselectTransaction();
  };

  const handleCancel = () => {
    toggleModal();
    unselectTransaction();
  };

  return {
    transactionName,
    setTransactionName,
    transactionValue,
    setTransactionValue,
    transactionDate,
    setTransactionDate,
    transactionCategory,
    setTransactionCategory,
    transactionType,
    setTransactionType,
    hasError,
    budgetList,
    handleSubmit,
    handleReset,
    handleCancel,
  };
};
