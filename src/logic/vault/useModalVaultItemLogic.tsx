import { type FormEvent, useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import type { ITransactionCreateDTO } from '@/server/dto/transition.dto';
import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useVaultStore } from '@/stores/useVaultStore';

export const useModalVaultItemLogic = (type: 'create' | 'update') => {
  const { addVaultItem, editVaultItem } = useVaultStore(
    useShallow((s) => ({
      addVaultItem: s.vaultItemMethods.create,
      editVaultItem: s.vaultItemMethods.update,
    })),
  );
  const { vaultList, selectedVault, selectedVaultItem } = useVaultStore(
    useShallow((s) => ({
      vaultList: s.vaultData.list,
      selectedVault: s.vaultSelection.selected,
      selectedVaultItem: s.vaultItemSelection.selected,
    })),
  );
  const toggleModal = useModalStore((s) => s.toggleModal);
  const setMessage = useMessageStore((s) => s.setMessage);

  const createTransaction = useTransactionBudgetStore(
    (s) => s.transactionMethods.create,
  );

  const [vaultItemName, setVaultItemName] = useState<string>('');
  const [vaultItemValue, setVaultItemValue] = useState<number>(0);
  const [vaultAssignedId, setVaultAssignedId] = useState<number | null>(
    selectedVault?.id ?? null,
  );
  const [vaultItemBudgetAssignedId, setVaultItemBudgetAssignedId] = useState<
    number | null
  >(null);
  const [integrateWithTxn, setIntegrateWithTxn] = useState(false);

  const [hasError, setHasError] = useState<boolean>(false);
  const validator = (): boolean => {
    if (vaultItemName.trim() === '') return false;
    if (Number.isNaN(Number(vaultItemValue))) return false;
    if (Number(vaultItemValue) < 0) return false;
    if (vaultAssignedId === null) return false;
    if (integrateWithTxn && !vaultItemBudgetAssignedId) return false;
    return true;
  };

  const handleReset = () => {
    setVaultItemName('');
    setVaultItemValue(0);
    setVaultAssignedId(selectedVault?.id ?? null);
    setVaultItemBudgetAssignedId(null);
    setIntegrateWithTxn(false);
    setHasError(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (vaultAssignedId === null) return;

    if (validator()) {
      setHasError(false);
      if (type === 'create') {
        const data = {
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        addVaultItem(data).then(({ message, status, data }) => {
          setMessage({
            message,
            status,
            description:
              status === 201
                ? `Seu item (${data?.name}) foi criado com sucesso!`
                : 'Ocorreu um erro ao criar o item',
          });

          if (status === 201 && integrateWithTxn && vaultItemBudgetAssignedId) {
            const txnData: ITransactionCreateDTO = {
              name: vaultItemName,
              value: Number(vaultItemValue),
              date: new Date(),
              categoryId: vaultItemBudgetAssignedId,
            };
            createTransaction(txnData);
          }
        });
        toggleModal();
        return;
      } else {
        const data = {
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        if (selectedVaultItem) {
          editVaultItem(selectedVaultItem.id, data).then(
            ({ message, status, data }) =>
              setMessage({
                message,
                status,
                description:
                  status === 200
                    ? `Seu item (${data?.name}) foi editado com sucesso!`
                    : 'Ocorreu um erro ao editar o item',
              }),
          );
        }
        toggleModal();
        return;
      }
    }

    setHasError(true);
  };

  const handleCancel = () => {
    setHasError(false);
    handleReset();
    toggleModal();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 250);
    if (type === 'create') return;
    if (type === 'update') setVaultItemName(selectedVault?.name ?? '');

    if (selectedVaultItem) {
      setVaultItemName(selectedVaultItem.name);
      setVaultItemValue(selectedVaultItem.value);
      setVaultAssignedId(selectedVaultItem.vaultId);
    }
  }, [selectedVaultItem, selectedVault, type]);

  return {
    handleSubmit,
    handleCancel,
    hasError,
    vaultList,
    vaultItemName,
    setVaultItemName,
    vaultItemValue,
    setVaultItemValue,
    vaultAssignedId,
    setVaultAssignedId,
    integrateWithTxn,
    setIntegrateWithTxn,
    vaultItemBudgetAssignedId,
    setVaultItemBudgetAssignedId,
    inputRef,
  };
};
