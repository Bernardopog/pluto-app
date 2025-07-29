"use client";
import { VaultModalType } from "@/app/stores/useModalStore";
import ActionButton from "@/app/ui/ActionButton";
import { MdAdd } from "react-icons/md";

interface IVaultActionToItemProps {
  handleModal: (typeOfModal: VaultModalType) => void;
  vaultListLength: number;
}

export default function VaultActionToItem({
  handleModal,
  vaultListLength,
}: IVaultActionToItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="subtitle">Itens</h2>
      <ActionButton
        action={() => {
          handleModal("vaultAddItem");
        }}
        icon={<MdAdd />}
        label={"Adicionar Item"}
        disabled={vaultListLength <= 0}
      />
    </div>
  );
}
