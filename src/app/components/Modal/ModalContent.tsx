"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import ModalGoals from "./contents/ModalGoals";
import ModalStats from "./contents/ModalStats";
import ModalTransaction from "./contents/ModalTransaction";
import ModalTransactionDelete from "./contents/ModalTransactionDelete";
import ModalBudget from "./contents/ModalBudget";
import ModalDateFilter from "./contents/ModalDateFilter";
import ModalTypeFilter from "./contents/ModalTypeFilter";
import ModalValueFilter from "./contents/ModalValueFilter";
import ModalCategoryFilter from "./contents/ModalCategoryFilter";
import ModalBudgetDelete from "./contents/ModalBudgetDelete";
import ModalBudgetTransfer from "./contents/ModalBudgetTransfer";
import ModalVaultDelete from "./contents/ModalVaultDelete";
import ModalVault from "./contents/ModalVault";

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
      {selectedModal === "budgetCreate" && <ModalBudget type="create" />}
      {selectedModal === "budgetUpdate" && <ModalBudget type="update" />}
      {selectedModal === "budgetDelete" && <ModalBudgetDelete />}
      {selectedModal === "budgetTransfer" && <ModalBudgetTransfer />}
      {selectedModal === "vaultCreate" && <ModalVault type="create" />}
      {selectedModal === "vaultUpdate" && <ModalVault type="update" />}
      {selectedModal === "vaultDelete" && <ModalVaultDelete />}
      {selectedModal === "filterDate" && <ModalDateFilter />}
      {selectedModal === "filterValue" && <ModalValueFilter />}
      {selectedModal === "filterCategory" && <ModalCategoryFilter />}
      {selectedModal === "filterType" && <ModalTypeFilter />}
    </>
  );
}
