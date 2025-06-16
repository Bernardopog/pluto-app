import { ModalType } from "@/app/stores/useModalStore";

interface IModalHeaderProps {
  type: ModalType;
}

export default function ModalHeader({ type }: IModalHeaderProps) {
  let defType = type as string;
  if (type?.includes("transaction")) defType = "transaction";

  const formatType = (type: string) => {
    switch (type) {
      case "goals":
        return "objetivos";
      case "stats":
        return "estatísticas";
      case "transaction":
        return "transação";
      default:
        return "indefinido";
    }
  };

  return (
    <header className="w-full p-2 rounded-t-lg bg-chetwode-blue-700">
      <h2 className="sub-title text-chetwode-blue-50">
        Modal de {formatType(defType)}
      </h2>
    </header>
  );
}
