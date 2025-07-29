"use client";
import {
  VaultActionToItem,
  VaultActionToVault,
} from "@/app/components/VaultPage/VaultAction";
import { useModalStore, VaultModalType } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import Divider from "@/app/ui/Divider";

export default function VaultAction() {
  const { vaultList } = useVaultStore();
  const { toggleModal, selectModalType } = useModalStore();

  const handleModal = (typeOfModal: VaultModalType) => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  return (
    <section id="vault-action" className="base-card flex flex-col gap-4">
      <VaultActionToVault
        handleModal={handleModal}
        vaultListLength={vaultList.length}
      />
      <div className="opacity-50">
        <Divider direction="horizontal" />
      </div>
      <VaultActionToItem
        handleModal={handleModal}
        vaultListLength={vaultList.length}
      />
    </section>
  );
}
