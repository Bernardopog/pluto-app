'use client';
import { useShallow } from 'zustand/shallow';
import {
  VaultActionToItem,
  VaultActionToVault,
} from '@/components/VaultPage/VaultAction';
import {
  useModalStore,
  type VaultItemModalType,
  type VaultModalType,
} from '@/stores/useModalStore';
import { useVaultStore } from '@/stores/useVaultStore';
import Divider from '@/ui/Divider';

export default function VaultAction() {
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const handleModal = (typeOfModal: VaultModalType | VaultItemModalType) => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  return (
    <section
      id='vault-action'
      className='base-card flex flex-col gap-4 overflow-y-auto scrollbar-style scrollbar-thinner'
    >
      <VaultActionToVault
        handleModal={handleModal}
        vaultListLength={vaultList.length}
      />
      <Divider direction='horizontal' />
      <VaultActionToItem
        handleModal={handleModal}
        vaultListLength={vaultList.length}
      />
    </section>
  );
}
