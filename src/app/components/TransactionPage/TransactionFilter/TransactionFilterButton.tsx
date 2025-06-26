"use client";

import { MdClose } from "react-icons/md";

interface ITransactionFilterButtonProps {
  label: string;
  isActive: boolean;
  action: () => void;
  reset: () => void;
}

export default function TransactionFilterButton({
  label,
  isActive,
  action,
  reset,
}: ITransactionFilterButtonProps) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`min-w-32 p-1.5 rounded-lg duration-300 ease-in-out hover:brightness-95 active:brightness-75 ${
          isActive
            ? "font-bold text-chetwode-blue-100 bg-chetwode-blue-800"
            : "text-chetwode-blue-950 bg-chetwode-blue-200"
        }`}
        onClick={() => action()}
      >
        {label}
      </button>
      {isActive && (
        <button
          type="button"
          className="absolute top-0 right-0 rounded-sm text-lg text-chetwode-blue-950 bg-chetwode-blue-100"
          onClick={() => reset()}
        >
          <MdClose />
        </button>
      )}
    </div>
  );
}
