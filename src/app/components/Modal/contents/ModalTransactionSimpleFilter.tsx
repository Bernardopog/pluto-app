"use client";

import { useDashboardControllersStore } from "@/app/stores/useDashboardControllersStore";
import { useModalStore } from "@/app/stores/useModalStore";
import Radio from "@/app/ui/Radio";
import { FormEvent, useState } from "react";
import { MdDragHandle, MdPlayArrow } from "react-icons/md";

export default function ModalTransactionSimpleFilter() {
  const toggleModal = useModalStore((s) => s.toggleModal);
  const setTransactionFilter = useDashboardControllersStore(
    (s) => s.setTransactionFilter
  );

  const [selectedType, setSelectedType] = useState<
    "all" | "expense" | "income"
  >("all");

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setTransactionFilter(selectedType);
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <fieldset className="flex flex-col gap-2">
        <div className="flex items-center justify-between p-2 rounded-lg bg-chetwode-blue-200">
          <Radio
            id="all"
            name="type"
            state={selectedType === "all"}
            setState={() => setSelectedType("all")}
            label="Todos tipos de Transação"
          />
          <MdDragHandle className="text-xl text-chetwode-blue-800" />
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-red-200">
          <Radio
            id="expense"
            name="type"
            state={selectedType === "expense"}
            setState={() => setSelectedType("expense")}
            label="Despesas"
          />
          <MdPlayArrow className="text-xl rotate-90 text-red-800" />
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg bg-green-200">
          <Radio
            id="income"
            name="type"
            state={selectedType === "income"}
            setState={() => setSelectedType("income")}
            label="Receitas"
          />
          <MdPlayArrow className="text-xl rotate-270 text-green-800" />
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
