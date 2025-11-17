'use client';

import { MdFilePresent, MdPieChart } from 'react-icons/md';
import { iconsArray } from '@/data/iconMap';
import { useModalVaultLogic } from '@/logic/vault/useModalVaultLogic';
import Input from '@/ui/Input';
import ModalFooter from '../ModalFooter';

export default function ModalVault({ type }: { type: 'create' | 'update' }) {
  const {
    vaultName,
    vaultLimit,
    vaultIcon,
    setVaultName,
    setVaultLimit,
    setVaultIcon,
    hasError,
    handleSubmit,
    handleCancel,
  } = useModalVaultLogic(type);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        id='vaultName'
        label='Nome do Cofre'
        inputType='decorated'
        state={vaultName}
        setState={setVaultName}
        type='text'
        icon={<MdFilePresent />}
      />
      <div>
        <Input
          id='vaultLimit'
          label='Valor alvo do Cofre'
          inputType='decorated'
          state={vaultLimit}
          setState={setVaultLimit}
          type='number'
          icon={<MdPieChart />}
          minLimit={0}
        />
      </div>
      <p className='text-chetwode-blue-950 dark:text-chetwode-blue-50'>
        Selecione um ícone:
      </p>
      <ul className='flex items-start min-h-32 p-2 gap-2 rounded-lg bg-chetwode-blue-200'>
        {iconsArray.map((icon) => (
          <li
            key={icon.name}
            className={`flex items-center gap-2 p-1 rounded-lg cursor-pointer duration-300 ease-in-out  ${
              vaultIcon === icon.name
                ? 'bg-chetwode-blue-800 text-chetwode-blue-100 hover:bg-chetwode-blue-700'
                : 'text-chetwode-blue-950 hover:bg-chetwode-blue-300'
            }`}
          >
            <button type='button' onClick={() => setVaultIcon(icon.name)}>
              {icon.icon({ className: 'size-8' })}
            </button>
          </li>
        ))}
      </ul>
      {hasError && (
        <p className='text-red-600 dark:text-red-400'>
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um valor alvo e um ícone.
        </p>
      )}
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className={`w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out ${type === 'create' ? 'modal-btn-create' : 'modal-btn-update'}`}
        >
          {type === 'create' ? 'Criar' : 'Editar'} Cofre
        </button>
      </ModalFooter>
    </form>
  );
}
