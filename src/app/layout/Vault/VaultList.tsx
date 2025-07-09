"use client";

import { VaultListBtn, VaultListItem } from "@/app/components/VaultPage";
import { useVaultStore } from "@/app/stores/useVaultStore";

export default function VaultList() {
  const { vaultList, vaultItemList } = useVaultStore();

  const vaultListWithItems = vaultList.map((vault) => ({
    ...vault,
    items: vaultItemList.filter((item) => item.vaultId === vault.id),
  }));

  return (
    <section
      id="vault-vaults"
      className="base-card flex flex-col relative p-4 overflow-y-auto"
    >
      <h2 className="subtitle">Cofres</h2>
      <ul className="grid grid-cols-1 flex-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {vaultListWithItems.map((vault, idx) => (
          <VaultListItem vault={vault} key={vault.id} index={idx} />
        ))}
        {vaultListWithItems.length < 4 && <VaultListBtn />}
      </ul>
    </section>
  );
}
