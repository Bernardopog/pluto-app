"use client";
import { useMessageStore } from "@/app/stores/useMessageStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useShallow } from "zustand/shallow";

export default function ModalVaultDeleteItem() {
  const { vaultList, selectedVaultItem } = useVaultStore(
    useShallow((s) => ({
      vaultList: s.vaultData.list,
      selectedVaultItem: s.vaultItemSelection.selected,
    }))
  );
  const removeVaultItem = useVaultStore((s) => s.vaultItemMethods.delete);
  const toggleModal = useModalStore((s) => s.toggleModal);

  const setMessage = useMessageStore((s) => s.setMessage);

  const handleDelete = (id: number) => {
    removeVaultItem(id).then(({ message, status }) =>
      setMessage({
        message,
        status,
        description:
          status === 200
            ? "Item deletado com sucesso!"
            : "Ocorreu um erro ao deletar o item",
      })
    );
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center text-chetwode-blue-950">
        Você tem certeza que quer deletar esse Item do Cofre{" "}
        {
          vaultList.find((vault) => selectedVaultItem?.vaultId == vault.id)
            ?.name
        }
        ?
      </p>
      {selectedVaultItem && (
        <div className="flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200">
          <span>Nome: {selectedVaultItem.name}</span>
          <span>Valor: {moneyFormatter(selectedVaultItem.value)}</span>
        </div>
      )}
      <p className="text-2xl text-center text-red-900">
        Essa ação nao pode ser desfeita!
      </p>
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-red-200 text-red-950 border-red-600 duration-300 ease-in-out hover:bg-red-300 active:bg-red-500 active:text-red-100"
          onClick={() => handleDelete(selectedVaultItem!.id)}
        >
          Deletar Item
        </button>
      </div>
    </div>
  );
}
