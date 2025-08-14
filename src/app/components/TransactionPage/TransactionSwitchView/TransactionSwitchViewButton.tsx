"use client";

import { MdBarChart, MdTableChart } from "react-icons/md";

interface ITransactionSwitchViewButtonProps {
  view: "table" | "chart";
  setView: (view: "table" | "chart") => void;
}

export default function TransactionSwitchViewButton({
  view,
  setView,
}: ITransactionSwitchViewButtonProps) {
  const handleViewSwitch = () => {
    if (view === "table") {
      setView("chart");
    } else {
      setView("table");
    }
  };

  return (
    <button
      className="fixed bottom-4 right-4 z-30 p-4 rounded-full text-2xl shadow-md bg-chetwode-blue-300 text-chetwode-blue-950 duration-300 ease-in-out hover:bg-chetwode-blue-600 hover:text-chetwode-blue-50 active:brightness-75"
      onClick={handleViewSwitch}
      aria-label={`Alterar visualização para ${
        view === "table" ? "gráfico" : "tabela"
      }`}
      title={`Alterar visualização para ${
        view === "table" ? "gráfico" : "tabela"
      }`}
    >
      {view === "table" && <MdBarChart />}
      {view === "chart" && <MdTableChart />}
    </button>
  );
}
