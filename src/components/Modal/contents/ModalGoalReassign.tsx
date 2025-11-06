"use client";

import { useGoalsStore } from "@/stores/useGoalsStore";
import { useMessageStore } from "@/stores/useMessageStore";
import { useModalStore } from "@/stores/useModalStore";
import { useVaultStore } from "@/stores/useVaultStore";
import { FormEvent, useState } from "react";

export default function ModalGoalReassign() {
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const toggleModal = useModalStore((s) => s.toggleModal);
  const reassign = useGoalsStore((s) => s.goalMethods.reassign);

  const setMessage = useMessageStore((s) => s.setMessage);

  const [selectedVaultId, setSelectedVaultId] = useState<number | null>(null);

  const handleReassign = (ev: FormEvent) => {
    ev.preventDefault();

    if (!selectedVaultId) return;
    reassign(selectedVaultId).then(({ message, status, data }) => {
      setMessage({
        message,
        status,
        description: `Objetivo reatribuido com sucesso para o cofre (${
          vaultList.find((v) => v.id === data?.assignedVault)?.name
        })`,
      });
    });
    toggleModal();
  };

  return (
    <form className="flex flex-col" onSubmit={handleReassign}>
      <h2 className="subtitle">Reatribuição de cofre</h2>
      <p className="text-chetwode-blue-950 dark:text-chetwode-blue-300">
        Seu objetivo está ligado a um cofre, mas o cofre em questão não pode ser
        encontrado, então você pode reatribuir o seu objetivo para um outro
        cofre existente.
      </p>
      <ul className="flex mt-4 p-2 rounded-lg gap-2 text-chetwode-blue-950 bg-chetwode-blue-200">
        {vaultList.length > 0 ? (
          vaultList.map((vault) => (
            <li className="flex-1" key={vault.id}>
              <button
                type="button"
                className={`size-full p-2 rounded-lg text-center bg-chetwode-blue-300 shadow-md duration-300 ease-in-out hover:bg-chetwode-blue-400 active:bg-chetwode-blue-500 ${
                  selectedVaultId === vault.id
                    ? "text-chetwode-blue-50 bg-chetwode-blue-600 hover:bg-chetwode-blue-700 active:bg-chetwode-blue-800"
                    : ""
                }`}
                onClick={() => setSelectedVaultId(vault.id)}
              >
                {vault.name}
              </button>
            </li>
          ))
        ) : (
          <li className="flex-1 italic">Você ainda não possui um cofre</li>
        )}
      </ul>
      <div className="flex self-end mt-2 gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={() => toggleModal()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Reatribuir Objetivo
        </button>
      </div>
    </form>
  );
}
