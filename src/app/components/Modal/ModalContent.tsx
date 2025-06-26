"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import ModalGoals from "./contents/ModalGoals";
import ModalStats from "./contents/ModalStats";
import ModalTransaction from "./contents/ModalTransaction";
import ModalTransactionDelete from "./contents/ModalTransactionDelete";
import ModalBudget from "./contents/ModalBudget";

export default function ModalContent() {
  const { selectedModal } = useModalStore();

  return (
    <>
      {selectedModal === "goals" && <ModalGoals />}
      {selectedModal === "stats" && <ModalStats />}
      {selectedModal === "transactionCreate" && (
        <ModalTransaction type="create" />
      )}
      {selectedModal === "transactionUpdate" && (
        <ModalTransaction type="update" />
      )}
      {selectedModal === "transactionDelete" && <ModalTransactionDelete />}
      {selectedModal === "budgetCreate" && <ModalBudget />}
      {selectedModal === "filterDate" && <p>Filtro por data</p>}
      {selectedModal === "filterValue" && <p>Filtro por valor</p>}
      {selectedModal === "filterCategory" && <p>Filtro por categoria</p>}
      {selectedModal === "filterType" && <p>Filtro por tipo</p>}
    </>
  );
}
