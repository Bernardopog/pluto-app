import { IVault, useVaultStore } from "@/app/stores/useVaultStore";
import { MdAdd } from "react-icons/md";

export default function VaultListBtn() {
  const { createVault } = useVaultStore();

  const handleVaultCreateion = () => {
    const data: IVault = {
      icon: "piggy",
      name: "Cofre",
      targetPrice: 0,
      id: Math.random() * 10000,
    };
    createVault(data);
  };

  return (
    <li>
      <button
        type="button"
        className="flex flex-col items-center justify-center size-full border-2 border-dashed rounded-lg font-bold text-xl shadow-md border-chetwode-blue-400 text-chetwode-blue-950 duration-300 ease-in-out hover:bg-chetwode-blue-600 hover:border-transparent hover:text-chetwode-blue-50 active:bg-chetwode-blue-800"
        onClick={handleVaultCreateion}
      >
        Adicionar Cofre
        <span className="text-3xl">
          <MdAdd />
        </span>
      </button>
    </li>
  );
}
