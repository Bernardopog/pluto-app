"use client";
import { useDashboardControllersStore } from "@/app/stores/useDashboardControllersStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { MdFilterAlt, MdTextSnippet } from "react-icons/md";

export default function DashboardTransactionTitle() {
  const { isTransactionFormOpen, toggleTransactionForm, transactionFilter } =
    useDashboardControllersStore();
  const { toggleModal, selectModalType } = useModalStore();

  const handleModal = () => {
    toggleModal();
    selectModalType("transactionSimpleFilter");
  };

  return (
    <div className="flex items-center gap-x-2">
      <h2 className="subtitle">Transações</h2>
      <button
        type="button"
        title="Formulário de adição rápida"
        className={`flex justify-center items-center w-7 h-7 rounded-full duration-300 ease-in-out text-lg border ${
          isTransactionFormOpen
            ? "text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900 border-transparent"
            : "text-chetwode-blue-950 bg-chetwode-blue-200 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400 border-chetwode-blue-900"
        }`}
        aria-label="Formulário de adição rápida"
        aria-expanded={isTransactionFormOpen}
        onClick={toggleTransactionForm}
      >
        <MdTextSnippet />
      </button>
      <button
        type="button"
        title="Filtro simples de transações"
        className={`flex justify-center items-center w-7 h-7 rounded-full duration-300 ease-in-out text-lg border ${
          transactionFilter !== "all"
            ? "text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900 border-transparent"
            : "text-chetwode-blue-950 bg-chetwode-blue-200 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400 border-chetwode-blue-900"
        }`}
        aria-label="Filtro simples de transações"
        onClick={handleModal}
      >
        <MdFilterAlt />
      </button>
    </div>
  );
}
