"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import {
  TransactionType,
  useTransactionFilterStore,
} from "@/app/stores/useTransactionFilterStore";
import Radio from "@/app/ui/Radio";
import { FormEvent, useState } from "react";
import { MdDragHandle, MdPlayArrow } from "react-icons/md";

export default function ModalTypeFilter() {
  const setTransactionTypeFilter = useTransactionFilterStore(
    (s) => s.setTransactionTypeFilter
  );
  const transactionTypeFilter = useTransactionFilterStore(
    (s) => s.transactionTypeFilter
  );
  const toggleModal = useModalStore((s) => s.toggleModal);

  const [selectedType, setSelectedType] = useState<TransactionType>(
    transactionTypeFilter
  );

  const handleCancel = () => {
    setSelectedType(transactionTypeFilter);
    toggleModal();
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setTransactionTypeFilter(selectedType);
    toggleModal();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-700">
          <Radio
            id="all"
            name="type"
            state={selectedType === "all"}
            setState={() => setSelectedType("all")}
            label="Todos tipos de Transação"
          />
          <MdDragHandle className="text-xl text-chetwode-blue-800 dark:text-chetwode-blue-200" />
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-red-200 dark:bg-red-800">
          <Radio
            id="expenses"
            name="type"
            state={selectedType === "expenses"}
            setState={() => setSelectedType("expenses")}
            label="Despesas"
          />
          <MdPlayArrow className="text-xl rotate-90 text-red-800 dark:text-red-200" />
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-green-200 dark:bg-green-800">
          <Radio
            id="revenue"
            name="type"
            state={selectedType === "revenue"}
            setState={() => setSelectedType("revenue")}
            label="Receitas"
          />
          <MdPlayArrow className="text-xl rotate-270 text-green-800 dark:text-green-200" />
        </div>
      </fieldset>
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Filtrar por Tipo
        </button>
      </div>
    </form>
  );
}
