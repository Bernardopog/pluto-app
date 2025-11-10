import { useVaultStore } from '@/stores/useVaultStore';

interface IModalTransactionVaultProps {
  transactionVault: number | null;
  setTransactionVault: (id: number) => void;
}

export default function ModalTransactionVault({
  transactionVault,
  setTransactionVault,
}: IModalTransactionVaultProps) {
  const vaultList = useVaultStore((s) => s.vaultData.list);

  return (
    <>
      <p className='mt-2 text-chetwode-blue-950 dark:text-chetwode-blue-50'>
        Selecione qual cofre deve receber a transação
      </p>
      <ul className='flex flex-wrap gap-2'>
        {vaultList.length > 0 &&
          vaultList.map((vault) => (
            <li
              key={vault.id}
              className={`flex-1 rounded-lg border-2 text-center duration-300 ease-in-out ${
                transactionVault === vault.id
                  ? 'bg-chetwode-blue-300 border-chetwode-blue-600'
                  : 'bg-chetwode-blue-200 border-transparent'
              }`}
            >
              <button
                type='button'
                className='w-full p-2 rounded-lg'
                onClick={() => setTransactionVault(vault.id)}
              >
                <p className='text-nowrap text-chetwode-blue-950'>
                  {vault.name}
                </p>
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
