'use client';

import { MdFilePresent, MdOutlineWarning, MdPieChart } from 'react-icons/md';
import { useModalBudgetLogic } from '@/logic/budget/useModalBudgetLogic';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import Input from '@/ui/Input';
import { moneyFormatter } from '@/utils/moneyFormatter';
import {
  ModalBudgetColorChoose,
  ModalBudgetColorPickerHex,
  ModalBudgetColorPickerHsl,
  ModalBudgetColorPickerRgb,
} from './BudgetContent';

interface IModalBudgetProps {
  type: 'create' | 'update';
}

export default function ModalBudget({ type }: IModalBudgetProps) {
  const income = useFinanceStore((s) => s.financeData.item.income);
  const getTotalBudgetLimit = useTransactionBudgetStore(
    (s) => s.getTotalBudgetLimit,
  );
  const {
    budgetName,
    setBudgetName,
    budgetLimit,
    setBudgetLimit,
    budgetColorType,
    setBudgetColorType,
    hex,
    setHex,
    hue,
    setHue,
    saturation,
    setSaturation,
    lightness,
    setLightness,
    red,
    setRed,
    green,
    setGreen,
    blue,
    setBlue,
    hasError,
    handleSubmit,
    handleCancel,
  } = useModalBudgetLogic(type);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        id='budgetName'
        label='Nome da Categoria do Orçamento'
        inputType='decorated'
        state={budgetName}
        setState={setBudgetName}
        type='text'
        icon={<MdFilePresent />}
      />
      <fieldset>
        <div className='grid grid-cols-[0.75fr_0.25fr] items-end justify-between'>
          {budgetColorType === 'hex' && (
            <ModalBudgetColorPickerHex hex={hex} setHex={setHex} />
          )}
          {budgetColorType === 'hsl' && (
            <ModalBudgetColorPickerHsl
              hue={hue}
              setHue={setHue}
              saturation={saturation}
              setSaturation={setSaturation}
              lightness={lightness}
              setLightness={setLightness}
            />
          )}
          {budgetColorType === 'rgb' && (
            <ModalBudgetColorPickerRgb
              red={red}
              setRed={setRed}
              green={green}
              setGreen={setGreen}
              blue={blue}
              setBlue={setBlue}
            />
          )}
          <div
            className='place-self-end size-14 rounded-lg'
            style={{
              background: `${
                budgetColorType === 'hex'
                  ? hex
                  : budgetColorType === 'hsl'
                    ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
                    : `rgb(${red}, ${green}, ${blue})`
              }`,
            }}
          ></div>
        </div>
        <ModalBudgetColorChoose
          budgetColorType={budgetColorType}
          setBudgetColorType={setBudgetColorType}
        />
      </fieldset>
      <div>
        <Input
          id='budgetLimit'
          label='Limite de Gasto do Orçamento'
          inputType='decorated'
          state={budgetLimit}
          setState={setBudgetLimit}
          type='number'
          icon={<MdPieChart />}
          minLimit={0}
        />
        <div className='flex flex-col mt-2 gap-2 text-chetwode-blue-950 dark:text-chetwode-blue-200'>
          <span>
            Orçamento total alocado:{' '}
            <span className='inline-block px-1 rounded-sm font-bold text-chetwode-blue-600 bg-chetwode-blue-200 dark:text-chetwode-blue-800'>
              {moneyFormatter(getTotalBudgetLimit())}
            </span>
            {getTotalBudgetLimit() > income && (
              <span className='inline-flex items-center mx-1 px-1 gap-2 rounded-sm font-bold bg-red-200 text-red-600 opacity-75'>
                Você alocou mais do que seu rendimento
                <MdOutlineWarning />
              </span>
            )}
          </span>
          <span>
            Renda:{' '}
            <span className='inline-block px-1 rounded-sm font-bold text-chetwode-blue-600 bg-chetwode-blue-200 dark:text-chetwode-blue-800'>
              {moneyFormatter(income)}
            </span>
          </span>
        </div>
      </div>
      {hasError && (
        <p className='text-red-600 dark:text-red-400'>
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um limite e uma cor.
        </p>
      )}
      <div className='flex self-end gap-x-2'>
        <button
          type='button'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100'
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100'
        >
          {type === 'create' ? 'Criar' : 'Editar'} Orçamento
        </button>
      </div>
    </form>
  );
}
