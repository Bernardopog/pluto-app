import { iconsMap } from '@/data/iconMap';
import type { IVault, IVaultItem } from '@/interfaces/IVault';
import { getPercentage } from '@/utils/getPercentage';
import { moneyFormatter } from '@/utils/moneyFormatter';
import { VaultIconProgress } from '.';

interface IVaultComplete extends IVault {
  items: IVaultItem[];
}

export default function VaultListItemProgress({
  vault,
}: {
  vault: IVaultComplete;
}) {
  return (
    <section className='flex-1 w-full p-2 rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-900'>
      <h3 className='subsubtitle'>Progresso</h3>
      <div className='flex flex-col justify-between h-[calc(100%-2rem)]'>
        <p className='mt-2 font-medium text-lg text-center text-chetwode-blue-950 dark:text-chetwode-blue-200'>
          {moneyFormatter(
            vault.items.reduce((acc, item) => acc + item.value, 0),
          )}
          /{moneyFormatter(vault.targetPrice)}
        </p>
        <div className='flex justify-between w-full px-4'>
          <VaultIconProgress
            icon={iconsMap[vault.icon].icon}
            progress={Number(
              getPercentage(
                vault.items.reduce((acc, item) => acc + item.value, 0),
                vault.targetPrice,
              ),
            )}
            backgroundIcon={
              iconsMap[vault.icon].hasOutline
                ? iconsMap[vault.icon].outlineIcon
                : iconsMap[vault.icon].icon
            }
          />
          <div className='flex items-center justify-center size-16 rounded-full bg-chetwode-blue-100 dark:bg-chetwode-blue-800'>
            <p className='font-medium text-center text-chetwode-blue-900 dark:text-chetwode-blue-100'>
              {getPercentage(
                vault.items.reduce((acc, item) => acc + item.value, 0),
                vault.targetPrice,
              )}
              %
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
