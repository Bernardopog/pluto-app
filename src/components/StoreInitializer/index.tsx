'use client';

import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import type { IBudget } from '@/interfaces/IBudget';
import type { IFinance } from '@/interfaces/IFinance';
import type { IGoal } from '@/interfaces/IGoal';
import type { IStats } from '@/interfaces/IStat';
import type { ITransaction } from '@/interfaces/ITransaction';
import type { IVault, IVaultItem } from '@/interfaces/IVault';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useGoalsStore } from '@/stores/useGoalsStore';
import { useStatsStore } from '@/stores/useStatsStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useVaultStore } from '@/stores/useVaultStore';

export default function StoreInitializer({
  txnData,
  budgetData,
  vaultData,
  vaultItemsData,
  goalData,
  financeData,
  statsData,
}: {
  txnData: ITransaction[] | null;
  budgetData: IBudget[] | null;
  vaultData: IVault[] | null;
  vaultItemsData: IVaultItem[] | null;
  goalData: IGoal | null;
  financeData: IFinance;
  statsData: IStats | null;
}) {
  const { setTransactionData, setBudgetData } = useTransactionBudgetStore(
    useShallow((s) => ({
      setTransactionData: s.setTransactionData,
      setBudgetData: s.setBudgetData,
    })),
  );
  const { setVaultData, setVaultItemsData } = useVaultStore(
    useShallow((s) => ({
      setVaultData: s.setVaultData,
      setVaultItemsData: s.setVaultItemsData,
    })),
  );
  const setGoalData = useGoalsStore((s) => s.setGoalData);
  const setFinanceData = useFinanceStore((s) => s.setFinanceData);
  const setStatsData = useStatsStore((s) => s.setStatsData);

  useEffect(() => {
    if (txnData) {
      setTransactionData({ list: txnData, fetched: true, loading: false });
    }

    if (budgetData) {
      setBudgetData({ list: budgetData, fetched: true, loading: false });
    }

    if (vaultData) {
      setVaultData({ list: vaultData, fetched: true, loading: false });
    }

    if (vaultItemsData) {
      setVaultItemsData({
        list: vaultItemsData,
        fetched: true,
        loading: false,
      });
    }

    if (goalData) {
      setGoalData({ item: goalData, fetched: true, loading: false });
    }

    if (financeData) {
      setFinanceData({
        item: financeData,
        fetched: true,
        loading: false,
      });
    }

    if (statsData) {
      setStatsData({ item: statsData, fetched: true, loading: false });
    }
  }, [
    txnData,
    budgetData,
    vaultData,
    vaultItemsData,
    goalData,
    financeData,
    statsData,
    setBudgetData,
    setFinanceData,
    setGoalData,
    setStatsData,
    setTransactionData,
    setVaultData,
    setVaultItemsData,
  ]);

  return null;
}
