import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import Divider from "@/app/ui/Divider";
import Input from "@/app/ui/Input";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { MdAdd, MdAddCircle, MdRemove, MdRemoveCircle } from "react-icons/md";
import { useShallow } from "zustand/shallow";

export default function ModalBalanceConfiguration() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    }))
  );

  const { balance, income, updateBalance } = useFinanceStore(
    useShallow((s) => ({
      balance: s.financeData.item.balance,
      income: s.financeData.item.balance,
      updateBalance: s.financeMethods.patch,
    }))
  );
  const { selectedVaultId, getTotalMoneySavedFromVault, vaultList } =
    useVaultStore(
      useShallow((s) => ({
        selectedVaultId: s.selectedDashboardVault,
        getTotalMoneySavedFromVault: s.getTotalMoneySavedFromVault,
        vaultList: s.vaultData.list,
      }))
    );

  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list
  );

  const [valueToBalance, setValueToBalance] = useState<number>(balance);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    if (valueToBalance < 0) return setHasError(true);

    updateBalance("balance", valueToBalance);

    toggleModal();
    selectModalType(null);
  };

  const handleCancel = () => {
    toggleModal();
    selectModalType(null);
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const txnExpensesValue: number = useMemo(
    () =>
      transactionList
        .filter(
          (txn) =>
            txn.date.getMonth() === currentMonth &&
            txn.date.getFullYear() === currentYear
        )
        .filter((txn) => txn.value < 0)
        .reduce((acc, item) => acc + item.value, 0),
    [transactionList, currentMonth, currentYear]
  );

  const vaultSavedValue = getTotalMoneySavedFromVault(selectedVaultId ?? 0);

  const selectedVault = vaultList.find((vault) => vault.id === selectedVaultId);

  const handleBalanceChange = () => {
    return {
      add: (value: number) => {
        setValueToBalance(valueToBalance + value);
      },
      remove: (value: number) => {
        if (valueToBalance - value < 0) return;
        setValueToBalance(valueToBalance - value);
      },
    };
  };

  useEffect(() => {
    setValueToBalance(balance);
  }, [balance]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <fieldset>
        <h3 className="subsubtitle">Ações Rápidas</h3>
        <ul className="grid grid-cols-2 items-center justify-end mt-2 gap-2">
          <li>
            <button
              type="button"
              className="group flex justify-center relative w-full"
              onClick={() => handleBalanceChange().add(income)}
            >
              <div className="flex items-center justify-center w-full p-2 rounded-lg duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900">
                <MdAddCircle />
                <p>Adicionar Renda</p>
              </div>
              <div className="flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-green-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none">
                {moneyFormatter(income)}
              </div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="group flex justify-center relative w-full"
              onClick={() => handleBalanceChange().remove(income)}
            >
              <div className="flex items-center justify-center w-full p-2 rounded-lg duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900">
                <MdRemoveCircle />
                <p>Subtrair Renda</p>
              </div>
              <div className="flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-red-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none">
                {moneyFormatter(income)}
              </div>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="group flex justify-center relative w-full"
              onClick={() =>
                handleBalanceChange().remove(Math.abs(txnExpensesValue))
              }
            >
              <div className="flex items-center justify-center w-full p-2 rounded-lg duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900">
                <MdRemove />
                <p>Subtrair Despesa do Mês</p>
              </div>
              <div className="flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-red-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none">
                {moneyFormatter(Math.abs(txnExpensesValue))}
              </div>
            </button>
          </li>
          {selectedVault ? (
            <li>
              <button
                type="button"
                className="group flex justify-center relative w-full"
                onClick={() => handleBalanceChange().add(vaultSavedValue)}
              >
                <div className="flex items-center justify-center w-full p-2 rounded-lg duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900">
                  <MdAdd />
                  <p>Adicionar valor do Cofre</p>
                </div>
                <div className="flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-green-400 overflow-hidden text-nowrap group-hover:w-full group-hover:opacity-100 group-hover:blur-none">
                  <b>{selectedVault?.name}:&nbsp;</b>
                  <span>{moneyFormatter(vaultSavedValue)}</span>
                </div>
              </button>
            </li>
          ) : (
            <li className="flex justify-center bg-chetwode-blue-200 p-2 rounded-lg text-chetwode-blue-950">
              Selecione um Cofre
            </li>
          )}
        </ul>
      </fieldset>
      <Divider direction="horizontal" />
      <fieldset>
        <h3 className="subsubtitle">Editar Saldo</h3>
        <div className="flex mt-2 gap-2">
          <div className="flex-1 p-2 border-2 rounded-lg gap-2 border-chetwode-blue-100 shadow-md">
            <Input
              id="balance"
              label="Editar valor do Saldo:"
              inputType="basic"
              state={valueToBalance}
              setState={setValueToBalance}
              type="number"
              step="0.1"
              minLimit={0}
            />
          </div>
          <div className="flex-1 p-2 border-2 rounded-lg gap-2 border-chetwode-blue-100 text-chetwode-blue-950 shadow-md">
            Valor final do Saldo:
            <div className="border-2 border-transparent p-1 rounded-lg bg-chetwode-blue-200 grayscale-100">
              {moneyFormatter(valueToBalance)}
            </div>
          </div>
        </div>
      </fieldset>
      {hasError && (
        <p className="text-red-600">
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um limite e uma cor.
        </p>
      )}
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Editar Saldo
        </button>
      </div>
    </form>
  );
}
