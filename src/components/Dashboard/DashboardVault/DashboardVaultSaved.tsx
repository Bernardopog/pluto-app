"use client";

import { useVaultStore } from "@/stores/useVaultStore";
import { moneyFormatter } from "@/utils/moneyFormatter";
import { useMemo, useState } from "react";
import { BsPiggyBank, BsPlus } from "react-icons/bs";
import Inert from "../../Inert";
import { useShallow } from "zustand/shallow";
import { IVaultCreateDTO } from "@/server/dto/vault.dto";

export default function DashboardVaultSaved() {
  const {
    vaultList,
    vaultLoading,
    vaultItemList,
    selectedDashboardVault,
    create,
  } = useVaultStore(
    useShallow((s) => ({
      vaultList: s.vaultData.list,
      vaultLoading: s.vaultData.loading,
      vaultItemList: s.vaultItemData.list,
      selectedDashboardVault: s.selectedDashboardVault,
      create: s.vaultMethods.create,
    }))
  );

  const { selectDashboardVault, getTotalMoneySavedFromVault } = useVaultStore(
    useShallow((s) => ({
      selectDashboardVault: s.selectDashboardVault,
      getTotalMoneySavedFromVault: s.getTotalMoneySavedFromVault,
    }))
  );

  const [isVaultMenuOpen, setIsVaultMenuOpen] = useState<boolean>(false);

  const handleVaultMenu = () => setIsVaultMenuOpen(!isVaultMenuOpen);

  const handleSelectVault = (id: number) => {
    selectDashboardVault(id);
    handleVaultMenu();
  };

  const savedMoney = useMemo(() => {
    if (selectedDashboardVault === null) return 0;
    return getTotalMoneySavedFromVault(selectedDashboardVault);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vaultItemList, selectedDashboardVault, getTotalMoneySavedFromVault]);

  const [creatingVault, setCreatingVault] = useState<boolean>(false);

  const createNewVault = () => {
    setCreatingVault(true);
    const data: IVaultCreateDTO = {
      name: "Cofre",
      targetPrice: 100,
      icon: "piggy",
    };
    create(data);
    setCreatingVault(false);
  };

  return (
    <div className="flex items-center justify-center relative w-full min-h-24 p-2 rounded-lg bg-chetwode-blue-200 overflow-clip lg:w-1/4 lg:min-h-auto dark:bg-chetwode-blue-800">
      <button
        className={`absolute top-2 left-2 z-10 p-1 rounded-lg border duration-300 ease-in-out shadow-md ${
          selectedDashboardVault
            ? "border-transparent text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900 dark:bg-chetwode-blue-600 dark:hover:bg-chetwode-blue-700 dark:active:bg-chetwode-blue-900"
            : "border-chetwode-blue-950 text-chetwode-blue-950 bg-chetwode-blue-200 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400 dark:border-chetwode-blue-500 dark:text-chetwode-blue-50 dark:bg-chetwode-blue-800 dark:hover:bg-chetwode-blue-900 dark:active:bg-chetwode-blue-950"
        }`}
        onClick={handleVaultMenu}
        type="button"
        aria-label="Menu de cofres"
        title="Menu de cofres"
      >
        <BsPiggyBank className="text-4xl scale-x-[-1]" />
      </button>

      <Inert isVisible={isVaultMenuOpen}>
        <ul
          className={`flex flex-col absolute left-0 z-10 size-full p-2 gap-2 rounded-lg bg-chetwode-blue-200 overflow-y-auto scrollbar-style scrollbar-thinner duration-300 ease-in-out dark:bg-chetwode-blue-950 ${
            isVaultMenuOpen ? "top-0" : "-top-64"
          }`}
        >
          {(vaultLoading === false &&
            vaultList.length > 0 &&
            vaultList.map((vault) => (
              <li
                key={vault.id}
                className={`flex items-center rounded-lg border-l-8 ${
                  vault.id === selectedDashboardVault
                    ? "bg-chetwode-blue-800 text-chetwode-blue-50 border-chetwode-blue-950 dark:bg-chetwode-blue-300 dark:text-chetwode-blue-950 dark:border-chetwode-blue-700"
                    : "bg-chetwode-blue-300 text-chetwode-blue-950 border-chetwode-blue-700 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50 dark:border-chetwode-blue-500"
                }`}
              >
                <button
                  className="w-full p-1 font-medium text-sm truncate"
                  onClick={() => handleSelectVault(vault.id)}
                >
                  {vault.name}
                </button>
              </li>
            ))) || (
            <li className="flex flex-col items-center justify-between h-full text-chetwode-blue-950 border-chetwode-blue-700 dark:text-chetwode-blue-50">
              <button
                className="w-full p-1 font-medium text-sm rounded-lg bg-chetwode-blue-300 dark:bg-chetwode-blue-700"
                onClick={handleVaultMenu}
                disabled={creatingVault}
              >
                Nenhum cofre ainda
              </button>
              <button
                className="flex items-center w-full p-1 font-medium rounded-lg bg-chetwode-blue-300 text-sm dark:bg-chetwode-blue-700"
                onClick={createNewVault}
                disabled={creatingVault}
              >
                <BsPlus className="text-2xl" />
                Criar cofre básico
              </button>
            </li>
          )}
        </ul>
      </Inert>

      {selectedDashboardVault ? (
        <p className="font-medium text-lg text-chetwode-blue-700 dark:text-chetwode-blue-300">
          R${" "}
          <span className="text-2xl text-chetwode-blue-950 dark:text-chetwode-blue-50">
            {moneyFormatter(savedMoney).replace("R$", "")}
          </span>
        </p>
      ) : (
        <p className="italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75">
          Selecione um cofre
        </p>
      )}
      {selectedDashboardVault && (
        <span className="absolute top-0 left-0 w-full font-medium text-center text-sm bg-chetwode-blue-950 text-chetwode-blue-300">
          {selectedDashboardVault
            ? vaultList.find((vault) => vault.id === selectedDashboardVault)
                ?.name
            : ""}
        </span>
      )}
      <span className="absolute bottom-0 left-0 w-full rounded-b-lg font-medium text-center bg-chetwode-blue-300 text-chetwode-blue-950 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50">
        Total poupado
      </span>
    </div>
  );
}
