import type { ReactNode } from 'react';
import ModalBalanceConfiguration from '../components/Modal/contents/ModalBalanceConfiguration';
import ModalBudget from '../components/Modal/contents/ModalBudget';
import ModalBudgetDelete from '../components/Modal/contents/ModalBudgetDelete';
import ModalBudgetTransfer from '../components/Modal/contents/ModalBudgetTransfer';
import ModalCategoryFilter from '../components/Modal/contents/ModalCategoryFilter';
import ModalDateFilter from '../components/Modal/contents/ModalDateFilter';
import ModalGoalReassign from '../components/Modal/contents/ModalGoalReassign';
import ModalGoals from '../components/Modal/contents/ModalGoals';
import ModalIncomeConfiguration from '../components/Modal/contents/ModalIncomeConfiguration';
import ModalStats from '../components/Modal/contents/ModalStats';
import ModalTransaction from '../components/Modal/contents/ModalTransaction';
import ModalTransactionDelete from '../components/Modal/contents/ModalTransactionDelete';
import ModalTransactionSimpleFilter from '../components/Modal/contents/ModalTransactionSimpleFilter';
import ModalTypeFilter from '../components/Modal/contents/ModalTypeFilter';
import ModalValueFilter from '../components/Modal/contents/ModalValueFilter';
import ModalVault from '../components/Modal/contents/ModalVault';
import ModalVaultDelete from '../components/Modal/contents/ModalVaultDelete';
import ModalVaultDeleteItem from '../components/Modal/contents/ModalVaultDeleteItem';
import ModalVaultItem from '../components/Modal/contents/ModalVaultItem';
import type { ModalType } from '../stores/useModalStore';

type IModalContentMap = {
  [K in Exclude<ModalType, null>]: ReactNode;
};

export const modalContentMap: IModalContentMap = {
  stats: <ModalStats />,
  transactionSimpleFilter: <ModalTransactionSimpleFilter />,
  transactionCreate: <ModalTransaction type='create' />,
  transactionUpdate: <ModalTransaction type='update' />,
  transactionDelete: <ModalTransactionDelete type='individual' />,
  transactionDeleteAll: <ModalTransactionDelete type='all' />,
  transactionDeleteGroup: <ModalTransactionDelete type='group' />,
  budgetCreate: <ModalBudget type='create' />,
  budgetUpdate: <ModalBudget type='update' />,
  budgetDelete: <ModalBudgetDelete />,
  budgetTransfer: <ModalBudgetTransfer />,
  vaultCreate: <ModalVault type='create' />,
  vaultUpdate: <ModalVault type='update' />,
  vaultDelete: <ModalVaultDelete />,
  vaultAddItem: <ModalVaultItem type='create' />,
  vaultUpdateItem: <ModalVaultItem type='update' />,
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
