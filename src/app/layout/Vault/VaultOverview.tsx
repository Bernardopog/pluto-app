"use client";

import OverviewCard from "@/app/components/OverviewCard";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useEffect, useMemo } from "react";
import { FiTarget } from "react-icons/fi";
import { MdCalendarMonth, MdPlayArrow } from "react-icons/md";
import { useShallow } from "zustand/shallow";

export default function VaultOverview() {
  const { vaultItemList, vaultData, fetchVault, fetchVaultItems } =
    useVaultStore(
      useShallow((s) => ({
        vaultItemList: s.vaultItemData.list,
        vaultData: s.vaultData,
        fetchVault: s.vaultMethods.fetch,
        fetchVaultItems: s.vaultItemMethods.fetch,
      }))
    );
  const vaultList = vaultData.list;

  useEffect(() => {
    if (!vaultList || !vaultItemList || vaultData.loading) {
      fetchVault();
      fetchVaultItems();
      return;
    }
  }, [
    vaultList,
    vaultItemList,
    vaultData.loading,
    fetchVault,
    fetchVaultItems,
  ]);

  const vaultListWithItems = useMemo(() => {
    if (!vaultList || !vaultItemList) return [];

    return vaultList.map((vault) => ({
      ...vault,
      items: vaultItemList.filter((item) => item.vaultId === vault.id),
    }));
  }, [vaultList, vaultItemList]);

  const totalMoneyPerVault = useMemo(() => {
    return vaultListWithItems.map((vault) => ({
      id: vault.id,
      total: vault.items.reduce((acc, item) => acc + item.value, 0),
      name: vault.name,
      targetPrice: vault.targetPrice,
    }));
  }, [vaultListWithItems]);

  const mostSavedVault = useMemo(() => {
    return totalMoneyPerVault.sort((a, b) => b.total - a.total)[0];
  }, [totalMoneyPerVault]);

  const lessSavedVault = useMemo(() => {
    return totalMoneyPerVault.sort((a, b) => a.total - b.total)[0];
  }, [totalMoneyPerVault]);

  const nearToCompleteVault = useMemo(() => {
    return totalMoneyPerVault.sort((a, b) => b.targetPrice - a.targetPrice)[0];
  }, [totalMoneyPerVault]);

  return (
    <>
      {vaultList && mostSavedVault && lessSavedVault && nearToCompleteVault && (
        <header id="vault-overview">
          <ul className="grid grid-cols-1 gap-2 items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
            <li className="lg:col-span-3 xl:col-span-1">
              <OverviewCard
                title="Total Poupado até Hoje"
                icon={<MdCalendarMonth />}
                value={moneyFormatter(
                  vaultItemList.reduce((acc, item) => acc + item.value, 0)
                ).replace("R$", "")}
                valueType="currency"
              />
            </li>
            <li>
              <OverviewCard
                title="Cofre com mais poupança"
                icon={<MdPlayArrow className="rotate-270" />}
                value={moneyFormatter(mostSavedVault.total).replace("R$", "")}
                valueType="currency"
                complement={mostSavedVault.name}
              />
            </li>
            <li>
              <OverviewCard
                title="Cofre com menos poupança"
                icon={<MdPlayArrow className="rotate-90" />}
                value={moneyFormatter(lessSavedVault.total).replace("R$", "")}
                valueType="currency"
                complement={lessSavedVault.name}
              />
            </li>
            <li>
              <OverviewCard
                title="Poupança mais próxima de concluir"
                icon={<FiTarget />}
                value={getPercentage(
                  nearToCompleteVault.total,
                  nearToCompleteVault.targetPrice
                )}
                valueType="number"
                complement={`% - ${nearToCompleteVault.name}`}
              />
            </li>
          </ul>
        </header>
      )}
    </>
  );
}
