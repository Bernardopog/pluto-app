"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function ModalTransactionDelete() {
  const { toggleModal } = useModalStore();
  const {
    deleteTransaction,
    unselectTransaction,
    selectedTransaction,
    budgetList,
  } = useTransactionBudgetStore();

  const handleDelete = (id: number) => {
    deleteTransaction(id);
    toggleModal();
    unselectTransaction();
  };

  const handleCancel = () => {
    toggleModal();
    unselectTransaction();
  };

  if (!selectedTransaction) return null;
  const date = new Date(selectedTransaction.date).toLocaleDateString("pt-BR");

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center text-chetwode-blue-950">
        Você tem certeza que quer deletar essa Transação ?
      </p>
      {selectedTransaction && (
        <div className="flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200">
          <span>Nome: {selectedTransaction.name}</span>
          <span>
            Valor: {moneyFormatter(Math.abs(selectedTransaction.value))}
          </span>
          <span>Data: {date}</span>
          <span>
            Categoria:{" "}
            {
              budgetList.find(
                (budget) => budget.id === selectedTransaction.categoryId
              )?.name
            }
          </span>
        </div>
      )}
      <p className="text-2xl text-center text-red-900">
        Essa ação nao pode ser desfeita!
      </p>
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
          onClick={() => handleDelete(selectedTransaction!.id)}
        >
          Deletar Transação
        </button>
      </div>
    </div>
  );
}
