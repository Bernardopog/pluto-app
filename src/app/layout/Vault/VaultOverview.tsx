"use client";

import { OverviewCard } from "@/app/components/OverviewCard";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useEffect, useMemo } from "react";
import { FiTarget } from "react-icons/fi";
import { MdCalendarMonth, MdPlayArrow } from "react-icons/md";
import { useShallow } from "zustand/shallow";

export default function VaultOverview() {
  const {
    vaultItemList,
    vaultList,
    vaultsFetched,
    vaultItemsFetched,
    fetchVault,
    fetchVaultItems,
  } = useVaultStore(
    useShallow((s) => ({
      vaultItemList: s.vaultItemData.list,
      vaultList: s.vaultData.list,
      vaultsFetched: s.vaultData.fetched,
      vaultItemsFetched: s.vaultItemData.fetched,
      fetchVault: s.vaultMethods.fetch,
      fetchVaultItems: s.vaultItemMethods.fetch,
    }))
  );

  useEffect(() => {
    if (vaultsFetched && vaultItemsFetched) return;
    fetchVault();
    fetchVaultItems();
  }, [
    vaultList,
    vaultItemList,
    vaultsFetched,
    vaultItemsFetched,
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
      {vaultList && mostSavedVault && lessSavedVault && nearToCompleteVault ? (
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
      ) : (
        <p
          id="vault-overview"
          className="flex items-center justify-center h-full min-h-24 py-2 px-4 rounded-lg text-lg italic font-bold text-chetwode-blue-950/75 bg-star-dust-50"
        >
          É necessário criar um cofre para ver as informações...
        </p>
      )}
    </>
  );
}
