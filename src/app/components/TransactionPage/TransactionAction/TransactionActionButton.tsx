import { ReactNode } from "react";

interface ITransactionActionButtonProps {
  action: () => void;
  icon: ReactNode;
  label: string;
}

export default function TransactionActionButton({
  action,
  icon,
  label,
}: ITransactionActionButtonProps) {
  return (
    <button
      type="button"
      onClick={action}
      className="flex items-center p-1 pr-2 gap-x-2 rounded-full font-medium bg-chetwode-blue-200 text-chetwode-blue-950 ease-in-out duration-300 hover:brightness-95 active:brightness-75"
    >
      <span className="p-0.5 rounded-full text-2xl bg-chetwode-blue-800 text-chetwode-blue-50">
        {icon}
      </span>
      {label}
    </button>
  );
}
