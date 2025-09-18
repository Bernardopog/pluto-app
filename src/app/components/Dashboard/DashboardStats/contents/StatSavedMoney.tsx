import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useMemo } from "react";

export default function StatSavedMoney() {
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);

  const totalMoneySaved = useMemo(
    () => vaultItemList.reduce((acc, item) => acc + item.value, 0),
    [vaultItemList]
  );

  const formattedTotalMoneySaved = moneyFormatter(totalMoneySaved);

  return (
    <>
      <h3 className="subsubtitle">Dinheiro Poupado</h3>
      <p className="stat-result">{formattedTotalMoneySaved}</p>
    </>
  );
}
