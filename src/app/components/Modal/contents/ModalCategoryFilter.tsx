"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";
import { FormEvent, useState } from "react";

export default function ModalCategoryFilter() {
  const { categoryFilter, setCategoryFilter } = useTransactionFilterStore();
  const { budgetList } = useTransactionBudgetStore();
  const { toggleModal } = useModalStore();

  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    categoryFilter
  );

  const handleCancel = () => {
    setSelectedCategory(null);
    toggleModal();
  };
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setCategoryFilter(selectedCategory);
    toggleModal();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <ul className="grid grid-cols-4 gap-2">
        {budgetList.map((category) => (
          <li
            key={category.id}
            className={`rounded-lg border-l-8 duration-300 ease-in-out hover:brightness-95 active:brightness-75 ${
              category.id === selectedCategory
                ? "bg-chetwode-blue-900 text-chetwode-blue-100 font-bold"
                : "bg-chetwode-blue-200 text-chetwode-blue-950"
            }`}
            style={{ borderColor: `${category.color}` }}
          >
            <button
              type="button"
              className="truncate size-full p-2 rounded-r-lg"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
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
          Filtrar por Categoria
        </button>
      </div>
    </form>
  );
}
