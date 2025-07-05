"use client";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import Select from "@/app/ui/Select";
import { FormEvent, useState } from "react";
import { MdAdd } from "react-icons/md";

export default function DashboardTransactionForm() {
  const { createTransation, budgetList } = useTransactionBudgetStore();

  const [hadAnError, setHadAnError] = useState<boolean>(false);
  const [categoryValue, setCategoryValue] = useState<number | string>(0);

  const isStringValid = (name: string): boolean => {
    if (name.trim() === "") return false;
    return true;
  };

  const isValueValid = (value: number): boolean => {
    if (Number.isNaN(value)) return false;
    return true;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;

    const formData = new FormData(ev.target as HTMLFormElement);
    const formDataObj = Object.fromEntries(formData.entries());

    const name = formDataObj.name as string;
    const value = Number(formDataObj.value);
    const date = formDataObj.date as string;

    if (isStringValid(name) && isValueValid(value)) {
      const [year, month, day] = date.split("-").map((val) => Number(val));
      const localDate = new Date(year, month - 1, day);

      const data = {
        id: Math.random() * 100000,
        name,
        value,
        date: date === "" ? new Date() : localDate,
        categoryId: Number(categoryValue),
      };

      createTransation(data);
      form.reset();
      setHadAnError(false);
    } else {
      setHadAnError(true);
    }
  };

  const selectList: {
    id: number | string;
    name: string;
    value: number | string;
  }[] = budgetList.map((budget) => ({
    id: budget.id,
    name: budget.name,
    value: budget.id,
  }));

  return (
    <div className="h-2/8">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-[1fr] grid-rows-[auto_auto] gap-2"
      >
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] text-chetwode-blue-950 lg:grid-cols-[0.7fr_2fr_0.7fr] lg:grid-rows-[1fr]">
          <input
            type="date"
            name="date"
            max={new Date().toISOString().split("T")[0]}
            className="min-w-1/8 pl-2 py-1 rounded-tl-lg bg-chetwode-blue-300 outline-chetwode-blue-800 lg:rounded-l-lg"
          />
          <input
            type="text"
            name="name"
            placeholder="Descrição"
            className="order-1 col-span-2 px-1 py-1 rounded-b-lg bg-chetwode-blue-200 outline-chetwode-blue-800 lg:order-0 lg:col-span-1 lg:rounded-none"
          />
          <input
            type="number"
            step={"0.01"}
            name="value"
            placeholder="R$ 0,00"
            className="min-w-1/8 pl-1 py-1 rounded-tr-lg bg-chetwode-blue-300 outline-chetwode-blue-800 lg:rounded-r-lg"
          />
        </div>
        <div>
          <label htmlFor="category" className="text-chetwode-blue-950">
            Categorias:
          </label>
          <Select
            state={categoryValue}
            setState={setCategoryValue}
            list={selectList}
          />
        </div>

        <button
          type="submit"
          className="flex justify-center items-center mt-2 px-2 py-2 rounded-lg bg-chetwode-blue-300 text-chetwode-blue-950 lg:py-0"
        >
          <MdAdd />
          Adicionar
        </button>
      </form>
      {hadAnError && (
        <p className="font-medium text-center text-sm text-red-400">
          Preencha os campos corretamente
        </p>
      )}
    </div>
  );
}
