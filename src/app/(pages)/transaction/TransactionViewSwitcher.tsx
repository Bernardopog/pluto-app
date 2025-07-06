"use client";

import { useState } from "react";
import TransactionTablePage from "./TransactionTablePage";
import TransactionChartPage from "./TransactionChartPage";
import TransactionSwitchViewButton from "@/app/components/TransactionPage/TransactionSwitchView/TransactionSwitchViewButton";
import Inert from "@/app/components/Inert";

export default function TransactionViewSwitcher() {
  const [view, setView] = useState<"table" | "chart">("table");

  return (
    <div
      className={`transaction-view-page-layout grid h-[calc(100vh-32px-24px)] min-h-0 duration-300 ease-in-out ${
        view === "table"
          ? "transaction-view-page-layout--txn"
          : "transaction-view-page-layout--chart"
      }`}
    >
      <Inert
        isVisible={view === "table"}
        className="min-h-0 h-full max-h-[calc(100vh-32px-24px)] overflow-y-auto"
      >
        <TransactionTablePage />
      </Inert>

      <Inert
        isVisible={view === "chart"}
        className="min-h-0 h-full max-h-[calc(100vh-32px-24px)] overflow-clip"
      >
        <TransactionChartPage />
      </Inert>

      <TransactionSwitchViewButton view={view} setView={setView} />
    </div>
  );
}
