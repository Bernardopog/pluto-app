"use client";

import { useVaultStore } from "@/app/stores/useVaultStore";
import { FormEvent, useState } from "react";
import { MdAddCircle } from "react-icons/md";

export default function DashboardVaultForm() {
  const selectedDashboardVault = useVaultStore((s) => s.selectedDashboardVault);
  const addVaultItem = useVaultStore((s) => s.vaultItemMethods.create);

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
        className="flex flex-1 items-center justify-center w-full p-2 border rounded-lg duration-300 ease-in-out bg-chetwode-blue-200 border-chetwode-blue-950 text-chetwode-blue-950 hover:bg-chetwode-blue-300 active:hover:bg-chetwode-blue-400 dark:bg-chetwode-blue-800 dark:border-chetwode-blue-600 dark:text-chetwode-blue-50 dark:hover:bg-chetwode-blue-700 dark:active:bg-chetwode-blue-600 lg:py-0"
      >
        <span>
          <MdAddCircle className="mr-1 text-2xl" />
        </span>
        Adicionar
      </button>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="O que você fez?"
        className="flex-1 w-full p-2 border rounded-lg border-chetwode-blue-950 text-chetwode-blue-950 outline-chetwode-blue-800 dark:border-chetwode-blue-600 dark:text-chetwode-blue-50 dark:outline-chetwode-blue-600 lg:py-0"
      />
      <input
        type="text"
        name="value"
        id="value"
        placeholder="R$"
        className="flex-1 w-full p-2 border rounded-lg border-chetwode-blue-950 text-chetwode-blue-950 outline-chetwode-blue-800 dark:border-chetwode-blue-600 dark:text-chetwode-blue-50 dark:outline-chetwode-blue-600 lg:py-0"
      />
      {hadAnError && (
        <p className="font-medium text-center text-sm text-red-400">
          Parece que há algum erro
        </p>
      )}
    </form>
  );
}
