import { iconsMap } from "@/app/data/iconMap";
import { useModalVaultItemLogic } from "@/app/logic/vault/useModalVaultItemLogic";
import Input from "@/app/ui/Input";
import { MdAttachMoney, MdFilePresent } from "react-icons/md";

export default function ModalVaultItem({
  type,
}: {
  type: "create" | "update";
}) {
  const {
    vaultList,
    handleSubmit,
    handleCancel,
    hasError,
    vaultAssignedId,
    vaultItemName,
    vaultItemValue,
    setVaultAssignedId,
    setVaultItemName,
    setVaultItemValue,
  } = useModalVaultItemLogic(type);

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
          {type === "create" ? "Criar" : "Editar"} Item
        </button>
      </div>
    </form>
  );
}
