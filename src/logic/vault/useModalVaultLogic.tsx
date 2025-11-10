import { type FormEvent, useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useVaultStore } from '@/stores/useVaultStore';
import type { iconNameType } from '@/types/IconNameType';

export const useModalVaultLogic = (type: 'create' | 'update') => {
  const { create, update } = useVaultStore(
    useShallow((s) => ({
      create: s.vaultMethods.create,
      update: s.vaultMethods.update,
    })),
  );
  const selectedVault = useVaultStore((s) => s.vaultSelection.selected);
  const toggleModal = useModalStore((s) => s.toggleModal);

  const setMessage = useMessageStore((s) => s.setMessage);

  const [vaultName, setVaultName] = useState<string>('');
  const [vaultLimit, setVaultLimit] = useState<string>('');
  const [vaultIcon, setVaultIcon] = useState<iconNameType | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClose = () => {
    toggleModal();
    setVaultName('');
    setVaultLimit('');
    setVaultIcon(null);
    setHasError(false);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const validator = (): boolean => {
      if (vaultName.trim() === '') return false;
      if (Number.isNaN(Number(vaultLimit))) return false;
      if (Number(vaultLimit) < 0) return false;
      if (vaultIcon === null) return false;
      return true;
    };

    setHasError(!validator());
    if (!validator()) return;

    const data = {
      name: vaultName,
      targetPrice: Number(vaultLimit),
      icon: vaultIcon ?? 'piggy',
    };

    if (type === 'create') {
      create(data).then(({ message, status, data }) =>
        setMessage({
          message,
          status,
          description:
            status === 201
              ? `Seu cofre (${data?.name}) foi criado com sucesso!`
              : 'Ocorreu um erro ao criar o cofre',
        }),
      );
    } else {
      if (selectedVault) {
        update(selectedVault.id, data).then(({ message, status, data }) =>
          setMessage({
            message,
            status,
            description:
              status === 200
                ? `Seu cofre (${data?.name}) foi atualizado com sucesso!`
                : 'Ocorreu um erro ao atualizar o cofre',
          }),
        );
      } else {
        setMessage({
          message: 'Nenhum cofre selecionado',
          status: 400,
          description: 'Selecione um cofre para atualizar.',
        });
      }
    }

    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    if (type === 'update') {
      if (selectedVault) {
        setVaultName(selectedVault.name);
        setVaultLimit(selectedVault.targetPrice.toString());
        setVaultIcon(selectedVault.icon);
      }
    }
  }, [type, selectedVault]);

  return {
    vaultName,
    setVaultName,
    vaultLimit,
    setVaultLimit,
    vaultIcon,
    setVaultIcon,
    hasError,
    handleSubmit,
    handleCancel,
  };
};
