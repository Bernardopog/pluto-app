'use client';

import { useEffect, useMemo } from 'react';
import { MdWarning } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useGoalsStore } from '@/stores/useGoalsStore';
import { useModalStore } from '@/stores/useModalStore';
import { useStatsStore } from '@/stores/useStatsStore';
import { useVaultStore } from '@/stores/useVaultStore';
import { getPercentage } from '@/utils/getPercentage';
import { moneyFormatter } from '@/utils/moneyFormatter';
import DashboardGoalsPercentageDisplay from './DashboardGoalsPercentageDisplay';
import DashboardGoalsProgressBar from './DashboardGoalsProgressBar';

export default function DashboardGoalsCurrentGoal() {
  const goal = useGoalsStore((s) => s.goalData.item);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault,
  );
  const balance = useFinanceStore((s) => s.financeData.item.balance);
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const vaultListItem = useVaultStore((s) => s.vaultItemData.list);
  const cancel = useGoalsStore((s) => s.goalMethods.cancel);
  const complete = useGoalsStore((s) => s.goalMethods.complete);
  const toggleModal = useModalStore((s) => s.toggleModal);
  const selectModalType = useModalStore((s) => s.selectModalType);
  const { statCompleteGoal, statCancelGoal } = useStatsStore(
    useShallow((s) => ({
      statCompleteGoal: s.completeGoal,
      statCancelGoal: s.cancelGoal,
    })),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <Necessary for sync>
  const money = useMemo(() => {
    if (goal?.progress === 'vault') {
      const vault = vaultList.find((vault) => {
        return vault.id === goal.assignedVault;
      });
      if (!vault) return 0;
      return getTotalMoneySavedFromVault(vault.id);
    }

    return balance;
  }, [goal, balance, getTotalMoneySavedFromVault, vaultList, vaultListItem]);

  useEffect(() => {
    if (!goal?.deadline) return;

    const deadline = new Date(goal.deadline);
    const now = Date.now();

    if (deadline.getTime() < now) {
      if (goal?.progress === 'vault') {
        const vault = vaultList.find(
          (vault) => vault.id === goal.assignedVault,
        );
        if (!vault) return;
        const totalMoneySaved = getTotalMoneySavedFromVault(vault.id);
        const percentage = getPercentage(totalMoneySaved, goal.targetAmount);
        if (Number(percentage) >= 100) {
          complete();
          statCompleteGoal();
          return;
        }
      } else if (goal?.progress === 'balance') {
        const percentage = getPercentage(balance, goal.targetAmount);
        if (Number(percentage) >= 100) {
          complete();
          statCompleteGoal();
          return;
        }
      }

      cancel();
      statCancelGoal();
    }
  }, [
    goal,
    balance,
    cancel,
    complete,
    getTotalMoneySavedFromVault,
    vaultList,
    statCancelGoal,
    statCompleteGoal,
  ]);

  const deadlineFormatted = new Date(goal?.deadline || 0).toLocaleDateString();

  const handleModal = () => {
    toggleModal();
    selectModalType('goalReassign');
  };

  return (
    <>
      {goal ? (
        <div className='flex flex-col flex-1 relative p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-900 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-200'>
          <p className='font-bold text-center'>{goal.name}</p>
          <div className='flex justify-center gap-x-2'>
            <p className='font-bold inline'>{moneyFormatter(money)}</p>/
            <p className='font-medium inline'>
              {moneyFormatter(goal.targetAmount)}
            </p>
          </div>
          {goal.progress === 'vault' &&
            vaultList.findIndex((vault) => vault.id === goal.assignedVault) ===
              -1 && (
              <button
                type='button'
                className='absolute top-0 right-0 text-center text-sm size-fit rounded-lg p-1 bg-red-500 animate-pulse'
                aria-label='Atribuir a novo cofre'
                title='Atribuir a novo cofre'
                onClick={handleModal}
              >
                <MdWarning className='text-2xl text-star-dust-50' />
              </button>
            )}
          {goal.deadline && (
            <p className='text-center text-sm text-chetwode-blue-950/75 dark:text-chetwode-blue-200/75'>
              Prazo: {deadlineFormatted}
            </p>
          )}
          <DashboardGoalsPercentageDisplay
            money={money}
            totalPrice={goal.targetAmount}
          />
          <DashboardGoalsProgressBar
            money={money}
            totalPrice={goal.targetAmount}
          />
        </div>
      ) : (
        <p className='flex items-center justify-center h-full text-lg italic font-bold text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
          Nenhuma meta definida...
        </p>
      )}
    </>
  );
}
