import { ReactNode } from "react";
import { ModalType } from "../stores/useModalStore";

import ModalGoals from "../components/Modal/contents/ModalGoals";
import ModalStats from "../components/Modal/contents/ModalStats";
import ModalTransaction from "../components/Modal/contents/ModalTransaction";
import ModalTransactionDelete from "../components/Modal/contents/ModalTransactionDelete";
import ModalBudget from "../components/Modal/contents/ModalBudget";
import ModalDateFilter from "../components/Modal/contents/ModalDateFilter";
import ModalTypeFilter from "../components/Modal/contents/ModalTypeFilter";
import ModalValueFilter from "../components/Modal/contents/ModalValueFilter";
import ModalCategoryFilter from "../components/Modal/contents/ModalCategoryFilter";
import ModalBudgetDelete from "../components/Modal/contents/ModalBudgetDelete";
import ModalBudgetTransfer from "../components/Modal/contents/ModalBudgetTransfer";
import ModalVaultDelete from "../components/Modal/contents/ModalVaultDelete";
import ModalVault from "../components/Modal/contents/ModalVault";
import ModalVaultDeleteItem from "../components/Modal/contents/ModalVaultDeleteItem";
import ModalVaultItem from "../components/Modal/contents/ModalVaultItem";
import ModalTransactionSimpleFilter from "../components/Modal/contents/ModalTransactionSimpleFilter";
import ModalGoalReassign from "../components/Modal/contents/ModalGoalReassign";
import ModalBalanceConfiguration from "../components/Modal/contents/ModalBalanceConfiguration";
import ModalIncomeConfiguration from "../components/Modal/contents/ModalIncomeConfiguration";

type IModalContentMap = {
  [K in Exclude<ModalType, null>]: ReactNode;
};

export const modalContentMap: IModalContentMap = {
  stats: <ModalStats />,
  transactionSimpleFilter: <ModalTransactionSimpleFilter />,
  transactionCreate: <ModalTransaction type="create" />,
  transactionUpdate: <ModalTransaction type="update" />,
  transactionDeleteGroup: <ModalTransactionDelete type="individual" />,
  transactionDeleteAll: <ModalTransactionDelete type="group" />,
  transactionDelete: <ModalTransactionDelete type="all" />,
  budgetCreate: <ModalBudget type="create" />,
  budgetUpdate: <ModalBudget type="update" />,
  budgetDelete: <ModalBudgetDelete />,
  budgetTransfer: <ModalBudgetTransfer />,
  vaultCreate: <ModalVault type="create" />,
  vaultUpdate: <ModalVault type="update" />,
  vaultDelete: <ModalVaultDelete />,
  vaultAddItem: <ModalVaultItem type="create" />,
  vaultUpdateItem: <ModalVaultItem type="update" />,
  vaultDeleteItem: <ModalVaultDeleteItem />,
  filterDate: <ModalDateFilter />,
  filterValue: <ModalValueFilter />,
  filterCategory: <ModalCategoryFilter />,
  filterType: <ModalTypeFilter />,
  goalCreate: <ModalGoals />,
  goalReassign: <ModalGoalReassign />,
  configBalance: <ModalBalanceConfiguration />,
  configIncome: <ModalIncomeConfiguration />,
};
