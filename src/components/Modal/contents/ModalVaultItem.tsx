import { MdAttachMoney, MdFilePresent } from 'react-icons/md';
import { iconsMap } from '@/data/iconMap';
import { useModalVaultItemLogic } from '@/logic/vault/useModalVaultItemLogic';
import Checkbox from '@/ui/Checkbox';
import Divider from '@/ui/Divider';
import Input from '@/ui/Input';
import ModalFooter from '../ModalFooter';
import { ModalVaultCategory } from './VaultContent';

export default function ModalVaultItem({
  type,
}: {
  type: 'create' | 'update';
}) {
  const {
    vaultList,
    handleSubmit,
    handleCancel,
    hasError,
    vaultAssignedId,
    vaultItemName,
    vaultItemValue,
    setVaultAssignedId,
    setVaultItemName,
    setVaultItemValue,
    integrateWithTxn,
    setIntegrateWithTxn,
    vaultItemBudgetAssignedId,
    setVaultItemBudgetAssignedId,
  } = useModalVaultItemLogic(type);

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <Input
        id='vaultItemName'
        label='Nome do Item'
        inputType='decorated'
        state={vaultItemName}
        setState={setVaultItemName}
        type='text'
        icon={<MdFilePresent />}
      />
      <Input
        id='vaultItemValue'
        label='Valor do Item'
        inputType='decorated'
        state={vaultItemValue}
        setState={setVaultItemValue}
        type='number'
        icon={<MdAttachMoney />}
      />
      <Divider direction='horizontal' className='mt-2' />
      <h3 className='subsubtitle text-chetwode-blue-950 dark:text-chetwode-blue-50'>
        Cofre:
      </h3>
      <ul className='grid grid-cols-4 gap-4'>
        {vaultList.map((vault) => (
          <li
            key={vault.id}
            className={`rounded-lg duration-300 ease-in-out ${
              vault.id === vaultAssignedId
                ? 'bg-chetwode-blue-900 text-chetwode-blue-100 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-700 dark:bg-chetwode-blue-700 dark:hover:bg-chetwode-blue-600 dark:active:bg-chetwode-blue-500'
                : 'bg-chetwode-blue-200 text-chetwode-blue-950 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400'
            }`}
          >
            <button
              type='button'
              className='flex items-center justify-between w-full p-2 rounded-lg'
              onClick={() => setVaultAssignedId(vault.id)}
            >
              {vault.name} {iconsMap[vault.icon].icon({})}
            </button>
          </li>
        ))}
      </ul>
      <Divider direction='horizontal' className='mt-2' />
      {type === 'create' && (
        <>
          <h3 className='subsubtitle text-chetwode-blue-950 dark:text-chetwode-blue-50'>
            Transação:
          </h3>
          <Checkbox
            state={integrateWithTxn}
            setState={() => setIntegrateWithTxn(!integrateWithTxn)}
            label='Integrar com Transação'
          />
          {integrateWithTxn && (
            <ModalVaultCategory
              vaultItemBudgetAssignedId={vaultItemBudgetAssignedId}
              setVaultItemBudgetAssignedId={setVaultItemBudgetAssignedId}
            />
          )}
          <Divider direction='horizontal' className='mt-2' />
        </>
      )}
      {hasError && (
        <p className='text-red-600 dark:text-red-400'>
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um valor alvo e um ícone.
          {integrateWithTxn &&
            ' Certifique-se de escolher uma categoria para o item.'}
        </p>
      )}
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className={`w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out ${type === 'create' ? 'modal-btn-create' : 'modal-btn-update'}`}
        >
          {type === 'create' ? 'Criar' : 'Editar'} Item
        </button>
      </ModalFooter>
    </form>
  );
}
