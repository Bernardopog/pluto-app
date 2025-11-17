'use client';

import type { KeyboardEvent, MouseEvent } from 'react';
import { useShallow } from 'zustand/shallow';
import Inert from '@/components/Inert';
import { ModalContent, ModalHeader } from '@/components/Modal';
import { useModalStore } from '@/stores/useModalStore';

export default function Modal() {
  const { isModalOpen, selectedModal } = useModalStore(
    useShallow((s) => ({
      isModalOpen: s.isModalOpen,
      selectedModal: s.selectedModal,
    })),
  );
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const handleModal = () => {
    toggleModal();
    if (!isModalOpen) return;
    setTimeout(() => selectModalType(null), 300);
  };

  return (
    <Inert isVisible={isModalOpen}>
      {/** biome-ignore lint/a11y/useSemanticElements: <Avoid hydratation error> */}
      <div
        role='button'
        tabIndex={0}
        className={`flex items-center justify-center fixed z-60 w-full bg-black/25 duration-300 ease-in-out overflow-clip backdrop-blur-xs ${
          isModalOpen ? 'h-screen' : 'h-0'
        }
        `}
        onClick={handleModal}
        onKeyDown={handleModal}
        aria-label='Fechar modal'
      >
        <section
          role='dialog'
          aria-modal='true'
          onClick={(e: MouseEvent) => e.stopPropagation()}
          onKeyDown={(e: KeyboardEvent) => e.stopPropagation()}
          className='base-card min-w-72 w-full max-w-216 p-0 max-h-[calc(100vh-4rem)] overflow-auto'
        >
          <ModalHeader type={selectedModal} />
          <div className='p-2'>
            <ModalContent />
          </div>
        </section>
      </div>
    </Inert>
  );
}
