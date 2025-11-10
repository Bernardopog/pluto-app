import { type FormEvent, useEffect, useState } from 'react';
import type {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from '@/server/dto/transition.dto';
import type { IVaultItemCreateDTO } from '@/server/dto/vaultItem.dto';
import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useVaultStore } from '@/stores/useVaultStore';

export const useModalTransactionLogic = (type: 'create' | 'update') => {
  const transactionMethods = useTransactionBudgetStore(
    (s) => s.transactionMethods,
  );
  const vaultItemMethods = useVaultStore((s) => s.vaultItemMethods);
  const transactionSelection = useTransactionBudgetStore(
    (s) => s.transactionSelection,
  );

  const toggleModal = useModalStore((s) => s.toggleModal);
  const setMessage = useMessageStore((s) => s.setMessage);

  const [transactionName, setTransactionName] = useState('');
  const [transactionValue, setTransactionValue] = useState('');
  const [transactionDate, setTransactionDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [transactionCategory, setTransactionCategory] = useState<number | null>(
    null,
  );
  const [transactionType, setTransactionType] = useState<'income' | 'outcome'>(
    'outcome',
  );
  const [transactionVault, setTransactionVault] = useState<number | null>(null);
  const [integrateWithVault, setIntegrateWithVault] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (type === 'update' && transactionSelection.selected) {
      setTransactionName(transactionSelection.selected.name);
      setTransactionValue(transactionSelection.selected.value.toString());
      setTransactionCategory(transactionSelection.selected.categoryId);
      setTransactionDate(
        new Date(transactionSelection.selected.date)
          .toISOString()
          .split('T')[0],
      );
    }
  }, [type, transactionSelection.selected]);

  const handleReset = () => {
    setTransactionName('');
    setTransactionValue('');
    setTransactionCategory(null);
    setTransactionDate(new Date().toISOString().split('T')[0]);
    setTransactionVault(null);
    setTransactionType('outcome');
    setIntegrateWithVault(false);
    setHasError(false);
  };

  const validator = () => {
    if (transactionName.trim() === '') return false;
    if (transactionValue === '' || Number.isNaN(Number(transactionValue)))
      return false;
    if (integrateWithVault && !transactionVault) return false;
    return true;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    let money = Number(transactionValue);
    if (money < 0) money *= -1;
    if (transactionType === 'outcome') money *= -1;

    if (
      !validator() ||
      transactionCategory === null ||
      Number.isNaN(Number(transactionCategory))
    ) {
      setHasError(true);
      return;
    }

    const [year, month, day] = transactionDate
      .split('-')
      .map((val) => Number(val));
    const localDate = new Date(year, month - 1, day);

    const data: ITransactionCreateDTO | ITransactionUpdateDTO = {
      name: transactionName,
      value: money,
      date: localDate,
      categoryId: Number(transactionCategory),
    };

    if (type === 'create') {
      transactionMethods.create(data).then(({ message, status, data }) => {
        setMessage({
          message,
          status,
          description:
            status === 201
              ? `Sua transação (${data?.name}) foi criada com sucesso!`
              : 'Ocorreu um erro ao criar a transação',
        });
        if (status === 201 && integrateWithVault && transactionVault) {
          const vaultItemData: IVaultItemCreateDTO = {
            name: transactionName,
            value: money,
            vaultId: transactionVault,
          };

          vaultItemMethods.create(vaultItemData);
        }
      });

      handleReset();
    } else {
      transactionMethods
        .update(transactionSelection.selected!.id, data)
        .then(({ message, status, data }) =>
          setMessage({
            message,
            status,
            description:
              status === 200
                ? `Sua transação (${data?.name}) foi atualizada com sucesso!`
                : 'Ocorreu um erro ao atualizar a transação',
          }),
        );
    }

    toggleModal();
    transactionSelection.unselect();
  };

  const handleCancel = () => {
    toggleModal();
    handleReset();
    transactionSelection.unselect();
  };

  return {
    transactionName,
    setTransactionName,
    transactionValue,
    setTransactionValue,
    transactionDate,
    setTransactionDate,
    transactionCategory,
    setTransactionCategory,
    transactionType,
    setTransactionType,
    hasError,
    handleSubmit,
    handleReset,
    handleCancel,
    integrateWithVault,
    setIntegrateWithVault,
    transactionVault,
    setTransactionVault,
  };
};
