"use client";

import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { BsPiggyBank } from "react-icons/bs";

export default function DashboardVaultSaved() {
  const { getTotalMoneySaved } = useVaultStore();

  return (
    <div className="flex items-center justify-center relative w-full min-h-24 p-2 rounded-lg bg-chetwode-blue-200 lg:w-1/4 lg:min-h-auto">
      <BsPiggyBank className="absolute top-2 left-2 text-4xl text-chetwode-blue-600 scale-x-[-1]" />
      <p className="font-medium text-lg text-chetwode-blue-700">
        R${" "}
        <span className="text-2xl text-chetwode-blue-950">
          {moneyFormatter(getTotalMoneySaved()).replace("R$", "")}
        </span>
      </p>
      <span className="absolute bottom-0 left-0 w-full rounded-b-lg font-medium text-center bg-chetwode-blue-300 text-chetwode-blue-950">
        Total poupado
      </span>
    </div>
  );
}
