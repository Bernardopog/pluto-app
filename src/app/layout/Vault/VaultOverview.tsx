"use client";

import OverviewCard from "@/app/components/OverviewCard";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { FiTarget } from "react-icons/fi";
import { MdCalendarMonth, MdPlayArrow } from "react-icons/md";

export default function VaultOverview() {
  const { vaultItemList, vaultList } = useVaultStore();

  const vaultListWithItems = vaultList.map((vault) => ({
    ...vault,
    items: vaultItemList.filter((item) => item.vaultId === vault.id),
  }));

  const totalMoneyPerVault = vaultListWithItems.map((vault) => {
    return {
      id: vault.id,
      total: vault.items.reduce((acc, item) => acc + item.value, 0),
      name: vault.name,
      targetPrice: vault.targetPrice,
    };
  });

  const mostSavedVault = totalMoneyPerVault.reduce((prev, current) =>
    prev.total > current.total ? prev : current
  );

  const lessSavedVault = totalMoneyPerVault.reduce((prev, current) =>
    prev.total < current.total ? prev : current
  );

  const nearToCompleteVault = totalMoneyPerVault.reduce((prev, current) => {
    const prevPercentage = getPercentage(prev.total, prev.targetPrice);
    const currentPercentage = getPercentage(current.total, current.targetPrice);
    return prevPercentage > currentPercentage ? prev : current;
  });

  return (
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
  );
}
