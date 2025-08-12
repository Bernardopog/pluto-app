"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";

export default function ModalBudgetTransfer() {
  const { toggleModal } = useModalStore();
  const { budgetData, budgetMethods, budgetSelection } =
    useTransactionBudgetStore();
  const budgetList = budgetData.list;
  const { categoryFilter, setCategoryFilter } = useTransactionFilterStore();

  const [toId, setToId] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleTransfer = (fromId: number, toId: number) => {
    if (!toId) {
      setHasError(true);
      return;
    }
    budgetMethods.transfer(fromId, toId);
    toggleModal();
    budgetSelection.unselect();
    setHasError(false);
    setCategoryFilter(categoryFilter === fromId ? toId : categoryFilter);
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center text-chetwode-blue-950">
        Você tem certeza que quer deletar essa Categoria de Orçamento ?
      </p>
      {budgetSelection.selected && (
        <div className="flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200">
          <span>Nome: {budgetSelection.selected.name}</span>
          <span>
            Limite: {moneyFormatter(Math.abs(budgetSelection.selected.limit))}
          </span>
        </div>
      )}
      <p className="text-2xl text-center text-red-900">
        Essa ação nao pode ser desfeita!
      </p>
      <section className="rounded-lg mt-2 p-2 bg-chetwode-blue-100">
        <h3 className="subsubtitle">
          Para qual Orçamento as transações de{" "}
          {
            budgetList.find((bdgt) => bdgt.id === budgetSelection.selected?.id)
              ?.name
          }{" "}
          devem ir?
        </h3>
        <ul className="flex flex-wrap mt-2 gap-2">
          {budgetList.length > 0 &&
            budgetList
              .filter((bdgt) => bdgt.id !== budgetSelection.selected?.id)
              .map((bdgt) => (
                <li
                  key={bdgt.id}
                  style={{ borderColor: `${bdgt.color}` }}
                  className={`flex-1 rounded-lg border-l-8 text-center duration-300 ease-in-out ${
                    toId === bdgt.id
                      ? "bg-chetwode-blue-300 border-chetwode-blue-600"
                      : "bg-chetwode-blue-200 border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full p-2 rounded-lg text-chetwode-blue-950"
                    onClick={() => setToId(bdgt.id)}
                  >
                    <span className="text-nowrap">{bdgt.name}</span>
                  </button>
                </li>
              ))}
        </ul>
      </section>
      {hasError && (
        <p className="text-2xl text-center text-red-900">
          Parece que houve um erro em escolher o destino para as transações do
          orçamento
        </p>
      )}
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
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-red-200 text-red-950 border-red-600 duration-300 ease-in-out hover:bg-red-300 active:bg-red-500 active:text-red-100"
          onClick={() => handleTransfer(budgetSelection.selected!.id, toId!)}
        >
          Deletar Transação
        </button>
      </div>
    </div>
  );
}
