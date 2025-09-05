import { ModalType } from "@/app/stores/useModalStore";

interface IModalHeaderProps {
  type: ModalType;
}

export default function ModalHeader({ type }: IModalHeaderProps) {
  let defType = type as string;
  if (type?.includes("transaction")) defType = "transaction";
  else if (type?.includes("budget")) defType = "budget";
  else if (type?.includes("vault")) defType = "vault";
  else if (type?.includes("filter")) defType = "filter";
  else if (type?.includes("goal")) defType = "goal";

  const formatType = (type: string) => {
    switch (type) {
      case "goal":
        return "objetivos";
      case "stats":
        return "estatísticas";
      case "transaction":
        return "transação";
      case "budget":
        return "orçamento";
      case "vault":
        return "cofre";
      case "filter":
        return "filtro";
      default:
        return "indefinido";
    }
  };

  return (
    <header className="w-full p-2 rounded-t-lg bg-chetwode-blue-700">
      <h2 className="subtitle text-chetwode-blue-50">
        Modal de {formatType(defType)}
      </h2>
    </header>
  );
}
