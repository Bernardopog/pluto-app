import { iconsMap } from "@/app/data/iconMap";
import { useModalStore } from "@/app/stores/useModalStore";
import { IVaultItem, useVaultStore } from "@/app/stores/useVaultStore";
import Input from "@/app/ui/Input";
import { FormEvent, useEffect, useState } from "react";
import { MdAttachMoney, MdFilePresent } from "react-icons/md";

export default function ModalVaultAddItem() {
  const { vaultList, addVaultItem, selectedVault } = useVaultStore();
  const { toggleModal } = useModalStore();

  const [vaultItemName, setVaultItemName] = useState<string>("");
  const [vaultItemValue, setVaultItemValue] = useState<string>("");
  const [vaultAssignedId, setVaultAssignedId] = useState<number | null>(
    selectedVault?.id ?? null
  );

  const [hasError, setHasError] = useState<boolean>(false);
  const validator = (): boolean => {
    if (vaultItemName.trim() === "") return false;
    if (Number.isNaN(Number(vaultItemValue))) return false;
    if (Number(vaultItemValue) < 0) return false;
    if (vaultAssignedId === null) return false;
    return true;
  };

  const resetFields = () => {
    setVaultItemName("");
    setVaultItemValue("");
    setVaultAssignedId(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validator()) {
      setHasError(false);

      if (vaultAssignedId === null) return;

      const data: IVaultItem = {
        id: (Math.random() * 100000).toString(),
        name: vaultItemName,
        value: Number(vaultItemValue),
        vaultId: vaultAssignedId,
      };

      addVaultItem(data);
      toggleModal();
      return;
    }
    setHasError(true);
    resetFields();
    toggleModal();
  };

  const handleCancel = () => {
    resetFields();
    setHasError(false);
    toggleModal();
  };

  useEffect(() => {
    if (selectedVault) setVaultAssignedId(selectedVault.id);
  }, [selectedVault]);

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <Input
        id="vaultItemName"
        label="Nome do Item"
        inputType="decorated"
        state={vaultItemName}
        setState={setVaultItemName}
        type="text"
        icon={<MdFilePresent />}
      />
      <Input
        id="vaultItemValue"
        label="Valor do Item"
        inputType="decorated"
        state={vaultItemValue}
        setState={setVaultItemValue}
        type="text"
        icon={<MdAttachMoney />}
      />
      <p className="mt-4 text-chetwode-blue-950">Cofre:</p>
      <ul className="grid grid-cols-4 gap-4">
        {vaultList.map((vault) => (
          <li
            key={vault.id}
            className={`rounded-lg duration-300 ease-in-out ${
              vault.id === vaultAssignedId
                ? "bg-chetwode-blue-800 text-chetwode-blue-100 hover:bg-chetwode-blue-700"
                : "bg-chetwode-blue-200 text-chetwode-blue-950 hover:bg-chetwode-blue-300"
            }`}
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-2 rounded-lg"
              onClick={() => setVaultAssignedId(vault.id)}
            >
              {vault.name} {iconsMap[vault.icon].icon({})}
            </button>
          </li>
        ))}
      </ul>
      {hasError && (
        <p className="text-red-600">
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um valor alvo e um ícone.
        </p>
      )}
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
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Criar Item
        </button>
      </div>
    </form>
  );
}
