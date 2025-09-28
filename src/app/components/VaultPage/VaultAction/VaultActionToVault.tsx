"use client";
import { VaultModalType } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import ActionButton from "@/app/ui/ActionButton";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

interface IVaultActionToVaultProps {
  handleModal: (typeOfModal: VaultModalType) => void;
  vaultListLength: number;
}

export default function VaultActionToVault({
  handleModal,
  vaultListLength,
}: IVaultActionToVaultProps) {
  const selectedVault = useVaultStore((s) => s.vaultSelection.selected);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="subtitle">Cofres</h2>
      <ActionButton
        action={() => handleModal("vaultCreate")}
        icon={<MdAdd />}
        label="Adicionar novo Cofre"
        disabled={vaultListLength >= 4}
      />
      {selectedVault ? (
        <div className="flex flex-col my-1 gap-1">
          <p className="mt-2 text-chetwode-blue-950 dark:text-chetwode-blue-50">
            Cofre Selecionado:{" "}
          </p>
          <span className="px-1 rounded-lg font-medium text-chetwode-blue-700 bg-chetwode-blue-200 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-200">
            {selectedVault.name}
          </span>
        </div>
      ) : (
        <p className="mt-2 italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75">
          Selecione um Cofre clicando no &quot;+&quot; dele
        </p>
      )}
      <ActionButton
        action={() => {
          handleModal("vaultUpdate");
        }}
        icon={<MdEdit />}
        label={"Editar Cofre"}
        disabled={selectedVault === null}
      />
      <ActionButton
        action={() => {
          handleModal("vaultDelete");
        }}
        icon={<MdDelete />}
        label={"Deletar Cofre"}
        disabled={selectedVault === null}
      />
    </div>
  );
}
