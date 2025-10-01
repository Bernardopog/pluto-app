"use cleint";

import { useMessageStore } from "@/app/stores/useMessageStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useShallow } from "zustand/shallow";

export default function ModalVaultDelete() {
  const { deleteVault, getTotalMoneySavedFromVault } = useVaultStore(
    useShallow((s) => ({
      deleteVault: s.vaultMethods.delete,
      getTotalMoneySavedFromVault: s.getTotalMoneySavedFromVault,
    }))
  );
  const selectedVault = useVaultStore((s) => s.vaultSelection.selected);
  const toggleModal = useModalStore((s) => s.toggleModal);

  const setMessage = useMessageStore((s) => s.setMessage);

  const handleDelete = (id: number) => {
    deleteVault(id).then(({ message, status }) =>
      setMessage({
        message,
        status,
        description:
          status === 200
            ? "Cofre deletado com sucesso!"
            : "Ocorreu um erro ao deletar o cofre",
      })
    );
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className="flex flex-col">
      <p className="text-2xl text-center text-chetwode-blue-950 dark:text-chetwode-blue-100">
        Você tem certeza que quer deletar esse Cofre e suas poupanças?
      </p>
      {selectedVault && (
        <div className="flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50">
          <span>Nome: {selectedVault.name}</span>
          <span>Limite: {moneyFormatter(selectedVault.targetPrice)}</span>
          <span>
            Poupado:{" "}
            {moneyFormatter(getTotalMoneySavedFromVault(selectedVault.id))}
          </span>
        </div>
      )}
      <p className="text-2xl text-center text-red-900 dark:text-red-400">
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
          onClick={() => handleDelete(selectedVault!.id)}
        >
          Deletar Cofre
        </button>
      </div>
    </div>
  );
}
