import { FormEvent, useEffect, useState } from "react";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useModalStore } from "@/app/stores/useModalStore";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "@/server/dto/transition.dto";

export const useModalTransactionLogic = (type: "create" | "update") => {
  const { transactionMethods, budgetList, transactionSelection } =
    useTransactionBudgetStore();
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
    if (type === "update" && transactionSelection.selected) {
      setTransactionName(transactionSelection.selected.name);
      setTransactionValue(transactionSelection.selected.value.toString());
      setTransactionCategory(transactionSelection.selected.categoryId);
      setTransactionDate(
        new Date(transactionSelection.selected.date).toISOString().split("T")[0]
      );
    }
  }, [type, transactionSelection.selected]);

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

    const [year, month, day] = transactionDate
      .split("-")
      .map((val) => Number(val));
    const localDate = new Date(year, month - 1, day);

    const data: ITransactionCreateDTO | ITransactionUpdateDTO = {
      name: transactionName,
      value: money,
      date: localDate,
      categoryId: Number(transactionCategory),
    };

    if (type === "create") {
      transactionMethods.create(data);
      handleReset();
    } else {
      transactionMethods.update(transactionSelection.selected!.id, data);
    }

    toggleModal();
    transactionSelection.unselect();
  };

  const handleCancel = () => {
    toggleModal();
    transactionSelection.unselect();
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
