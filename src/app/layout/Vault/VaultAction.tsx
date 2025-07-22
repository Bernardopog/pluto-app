"use client";
import { useModalStore, VaultModalType } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import ActionButton from "@/app/ui/ActionButton";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

export default function VaultAction() {
  const { vaultList, selectedVault } = useVaultStore();
  const { toggleModal, selectModalType } = useModalStore();

  const handleModal = (typeOfModal: VaultModalType) => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  return (
    <section id="vault-action" className="base-card flex flex-col gap-2">
      <ActionButton
        action={() => handleModal("vaultCreate")}
        icon={<MdAdd />}
        label="Adicionar novo Cofre"
        disabled={vaultList.length >= 4}
      />
      {selectedVault ? (
        <div className="flex flex-col my-1 gap-1">
          <p className="mt-2 text-chetwode-blue-950">Cofre Selecionado: </p>
          <span className="px-1 rounded-lg font-medium text-chetwode-blue-700 bg-chetwode-blue-200">
            {selectedVault.name}
          </span>
        </div>
      ) : (
        <p className="mt-2 italic text-chetwode-blue-950/75">
          Selecione um Cofre clicando no &quot;+&quot; dele
        </p>
      )}
      <ActionButton
        action={() => {
          handleModal("vaultUpdate");
        }}
        icon={<MdEdit />}
        label={"Editar Transação"}
        disabled={selectedVault === null}
      />
      <ActionButton
        action={() => {
          handleModal("vaultDelete");
        }}
        icon={<MdDelete />}
        label={"Deletar Transação"}
        disabled={selectedVault === null}
      />
    </section>
  );
}
