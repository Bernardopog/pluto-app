import { useMemo } from 'react';
import { useVaultStore } from '@/stores/useVaultStore';
import { moneyFormatter } from '@/utils/moneyFormatter';

export default function StatSavedMoney() {
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);

  const totalMoneySaved = useMemo(
    () => vaultItemList.reduce((acc, item) => acc + item.value, 0),
    [vaultItemList],
  );

  const formattedTotalMoneySaved = moneyFormatter(totalMoneySaved);

  return (
    <>
      <h3 className='subsubtitle'>Dinheiro Poupado</h3>
      <p className='stat-result'>{formattedTotalMoneySaved}</p>
    </>
  );
}
