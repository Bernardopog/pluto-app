import { ModalType } from "@/app/stores/useModalStore";

interface IModalHeaderProps {
  type: ModalType;
}

export default function ModalHeader({ type }: IModalHeaderProps) {
  const formatType = (type: ModalType) => {
    switch (type) {
      case "goals":
        return "objetivos";
      default:
        return "indefinido";
    }
  };

  return (
    <header className="w-full p-2 rounded-t-lg bg-chetwode-blue-700">
      <h2 className="sub-title text-chetwode-blue-50">
        Modal de {formatType(type)}
      </h2>
    </header>
  );
}
