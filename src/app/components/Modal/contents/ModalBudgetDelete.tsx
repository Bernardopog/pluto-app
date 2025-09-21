"use client";

import { useMessageStore } from "@/app/stores/useMessageStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function ModalBudgetDelete() {
  const toggleModal = useModalStore((s) => s.toggleModal);

  const budgetMethods = useTransactionBudgetStore((s) => s.budgetMethods);
  const budgetSelection = useTransactionBudgetStore((s) => s.budgetSelection);

  const setMessage = useMessageStore((s) => s.setMessage);

  const setCategoryFilter = useTransactionFilterStore(
    (s) => s.setCategoryFilter
  );
  const categoryFilter = useTransactionFilterStore((s) => s.categoryFilter);

  const handleDelete = (id: number) => {
    budgetMethods.delete(id).then(({ message, status }) =>
      setMessage({
        message,
        status,
        description:
          status === 200
            ? "O orçamento foi deletado com sucesso!"
            : "Ocorreu um erro ao deletar o orçamento",
      })
    );
    toggleModal();
    budgetSelection.unselect();
    setCategoryFilter(categoryFilter === id ? null : categoryFilter);
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
          onClick={() => handleDelete(budgetSelection.selected!.id)}
        >
          Deletar Orçamento
        </button>
      </div>
    </div>
  );
}
