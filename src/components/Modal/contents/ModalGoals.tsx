'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { MdAttachMoney, MdOutlineRocketLaunch } from 'react-icons/md';
import type { IGoal } from '@/interfaces/IGoal';
import { useGoalsStore } from '@/stores/useGoalsStore';
import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useStatsStore } from '@/stores/useStatsStore';
import { useVaultStore } from '@/stores/useVaultStore';
import Checkbox from '@/ui/Checkbox';
import Divider from '@/ui/Divider';
import Input from '@/ui/Input';
import Radio from '@/ui/Radio';
import ModalFooter from '../ModalFooter';

export default function ModalGoals() {
  const create = useGoalsStore((s) => s.goalMethods.create);
  const statCreatedGoal = useStatsStore((s) => s.createGoal);
  const toggleModal = useModalStore((s) => s.toggleModal);
  const vaultList = useVaultStore((s) => s.vaultData.list);

  const setMessage = useMessageStore((s) => s.setMessage);

  const [goalName, setGoalName] = useState<string>('');
  const [goalPrice, setGoalPrice] = useState<string>('');
  const [wantDeadline, setWantDeadline] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>('');
  const [baseProgress, setBaseProgress] = useState<'balance' | 'vault'>(
    'balance',
  );
  const [selectedVaultId, setSelectedVaultId] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const [year, month, day] = deadline.split('-').map((val) => Number(val));
    const localDate = new Date(year, month - 1, day);

    let data: IGoal = {
      name: goalName,
      targetAmount: Number.isNaN(Number(goalPrice))
        ? Number(goalPrice.replace(',', '.'))
        : Number(goalPrice),
      deadline: wantDeadline ? localDate : null,
      progress: baseProgress,
      assignedVault: null,
      completed: false,
    };

    if (baseProgress === 'vault' && !selectedVaultId) {
      setHasError(true);
      return;
    }
    if (baseProgress === 'balance') data = { ...data, assignedVault: null };
    if (baseProgress === 'vault')
      data = { ...data, assignedVault: selectedVaultId };

    if (data.name && data.targetAmount) {
      create(data).then(({ message, status, data }) =>
        setMessage({
          message,
          status,
          description:
            status === 201
              ? `Objetivo (${data?.name}) criado com sucesso!`
              : 'Ocorreu um erro ao criar o objetivo',
        }),
      );
      statCreatedGoal();
      toggleModal();
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 250);
  }, []);

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <Input
        state={goalName}
        setState={setGoalName}
        label='Qual seu objetivo?'
        inputType='decorated'
        id='decorated'
        type='text'
        icon={<MdOutlineRocketLaunch />}
        placeholder='Ex: Comprar um videogame novo'
        required={true}
        ref={inputRef}
      />
      <Input
        state={goalPrice}
        setState={setGoalPrice}
        label='Quanto custa seu objetivo?'
        inputType='decorated'
        id='price'
        type='number'
        icon={<MdAttachMoney />}
        placeholder='Ex: 2.700,00'
        required={true}
      />
      <Divider direction='horizontal' className='mt-2' />
      <h3 className='subsubtitle'>Prazo</h3>
      <div className='flex justify-between mt-1'>
        <Checkbox
          label='Deseja adicionar um prazo?'
          state={wantDeadline}
          setState={setWantDeadline}
        />
        <input
          type='date'
          className='px-4 py-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 duration-300 ease-in-out disabled:grayscale-75 disabled:opacity-40'
          disabled={!wantDeadline}
          min={new Date().toISOString().split('T')[0]}
          value={deadline}
          onChange={(ev) => setDeadline(ev.target.value)}
        />
      </div>
      <Divider direction='horizontal' className='mt-2' />
      <div>
        <h3 className='subsubtitle inline'>Base de Progresso</h3>{' '}
        <span className='text-chetwode-blue-600 inline'>*</span>
      </div>
      <div className='flex mt-1 gap-x-2'>
        <div
          className={`p-1 border-2  w-full rounded-lg duration-300 ease-in-out ${
            baseProgress === 'balance'
              ? 'bg-chetwode-blue-300 border-chetwode-blue-600 dark:bg-chetwode-blue-800 dark:border-chetwode-blue-950'
              : 'bg-chetwode-blue-200 border-transparent dark:bg-chetwode-blue-600'
          }`}
        >
          <Radio
            label='Saldo'
            name='progress'
            id='balance'
            setState={setBaseProgress}
            state={baseProgress === 'balance'}
          />
        </div>
        <div
          className={`p-1 border-2  w-full rounded-lg duration-300 ease-in-out ${
            baseProgress === 'vault'
              ? 'bg-chetwode-blue-300 border-chetwode-blue-600 dark:bg-chetwode-blue-800 dark:border-chetwode-blue-950'
              : 'bg-chetwode-blue-200 border-transparent dark:bg-chetwode-blue-600'
          }`}
        >
          <Radio
            label='Poupança'
            name='progress'
            id='vault'
            setState={setBaseProgress}
            state={baseProgress === 'vault'}
          />
        </div>
      </div>
      {baseProgress === 'vault' && (
        <div>
          <h3 className='subsubtitle'>
            Selecione o Cofre
            <span className='font-normal text-chetwode-blue-600 inline'>*</span>
          </h3>

          <ul className='grid grid-cols-2 md:grid-cols-4 mt-2 gap-2'>
            {vaultList.map((vault) => (
              <li key={vault.id}>
                <button
                  type='button'
                  className={`w-full p-2 border-2 rounded-lg font-medium text-chetwode-blue-950 duration-300 ease-in-out ${
                    selectedVaultId === vault.id
                      ? 'bg-chetwode-blue-300 hover:bg-chetwode-blue-400 border-chetwode-blue-600'
                      : 'bg-chetwode-blue-200 hover:bg-chetwode-blue-300 border-transparent'
                  }`}
                  onClick={() => setSelectedVaultId(vault.id)}
                >
                  {vault.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {hasError && (
        <p className='text-red-600'>
          Parece que tem algum erro no formulário, certifique-se de escolher um
          objetivo, um valor e caso tenha marcado poupança escolha o cofre que
          você quer usar como base de progresso.
        </p>
      )}
      <ModalFooter cancelAction={toggleModal}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-create'
        >
          Criar Objetivo
        </button>
      </ModalFooter>
    </form>
  );
}
