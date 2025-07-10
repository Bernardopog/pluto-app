"use client";

import { useVaultStore } from "@/app/stores/useVaultStore";
import { FormEvent, useState } from "react";
import { MdAdd } from "react-icons/md";

export default function DashboardVaultAdd() {
  const { addVaultItem, selectedDashboardVault } = useVaultStore();

  const [hadAnError, setHadAnError] = useState<boolean>(false);

  const isEventValid = (name: string): boolean => {
    if (name.trim() === "") return false;
    return true;
  };

  const isValueValid = (value: number): boolean => {
    if (Number.isNaN(value)) return false;
    if (value < 0) return false;
    return true;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;

    const formData = new FormData(ev.target as HTMLFormElement);
    const formDataObj = Object.fromEntries(formData.entries());

    const name = formDataObj.name as string;
    const value = Number(formDataObj.value);

    if (isEventValid(name) && isValueValid(value)) {
      if (selectedDashboardVault === null) return;
      addVaultItem({
        id: `${Math.random() * 1000}`,
        name,
        value,
        vaultId: selectedDashboardVault,
      });
      form.reset();
      setHadAnError(false);
    } else {
      setHadAnError(true);
    }
  };

  return (
    <form
      className="flex flex-col w-full gap-2 lg:w-1/4"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className="flex items-center justify-center w-full p-2 border rounded-lg bg-chetwode-blue-200 border-chetwode-blue-700 text-chetwode-blue-950 hover:bg-chetwode-blue-400 active:hover:bg-chetwode-blue-500 lg:py-0"
      >
        <span>
          <MdAdd />
        </span>
        Adicionar
      </button>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="O que você fez?"
        className="w-full p-2 border rounded-lg border-chetwode-blue-700 text-chetwode-blue-950 outline-chetwode-blue-800 lg:py-0"
      />
      <input
        type="text"
        name="value"
        id="value"
        placeholder="R$"
        className="w-full p-2 border rounded-lg border-chetwode-blue-700 text-chetwode-blue-950 outline-chetwode-blue-800 lg:py-0"
      />
      {hadAnError && (
        <p className="font-medium text-center text-sm text-red-400">
          Parece que há algum erro
        </p>
      )}
    </form>
  );
}
