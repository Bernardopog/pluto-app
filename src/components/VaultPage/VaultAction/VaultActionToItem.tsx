"use client";
import { VaultItemModalType } from "@/stores/useModalStore";
import { useVaultStore } from "@/stores/useVaultStore";
import ActionButton from "@/ui/ActionButton";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

interface IVaultActionToItemProps {
  handleModal: (typeOfModal: VaultItemModalType) => void;
  vaultListLength: number;
}

export default function VaultActionToItem({
  handleModal,
  vaultListLength,
}: IVaultActionToItemProps) {
  const selectedVaultItem = useVaultStore((s) => s.vaultItemSelection.selected);

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
      {selectedVaultItem ? (
        <div className="flex my-1 gap-1">
          <ActionButton
            action={() => {
              handleModal("vaultUpdateItem");
            }}
            icon={<MdEdit />}
            label={"Editar Item"}
            disabled={vaultListLength <= 0 || !selectedVaultItem}
            className="flex-1"
          />
          <ActionButton
            action={() => {
              handleModal("vaultDeleteItem");
            }}
            icon={<MdDelete />}
            label={"Deletar Item"}
            disabled={vaultListLength <= 0 || !selectedVaultItem}
            className="flex-1"
          />
        </div>
      ) : (
        <p className="mt-2 italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75">
          Selecione um Item clicando nele
        </p>
      )}
    </div>
  );
}
