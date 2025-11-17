'use client';

import type { ReactNode } from 'react';

interface IModalFooterProps {
  cancelAction: () => void;
  cancelMessage?: string;
  children: ReactNode;
}

export default function ModalFooter({
  cancelAction,
  cancelMessage = 'Cancelar',
  children,
}: IModalFooterProps) {
  return (
    <div className='flex self-end gap-x-2'>
      <button
        type='button'
        className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-color'
        onClick={cancelAction}
      >
        {cancelMessage}
      </button>
      {children}
    </div>
  );
}
