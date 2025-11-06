import { useFinanceStore } from "@/stores/useFinanceStore";
import { useModalStore } from "@/stores/useModalStore";
import Input from "@/ui/Input";
import { FormEvent, useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function ModalIncomeConfiguration() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    }))
  );
  const { income, updateIncome } = useFinanceStore(
    useShallow((s) => ({
      income: s.financeData.item.income,
      updateIncome: s.financeMethods.patch,
    }))
  );

  const [valueToIncome, setValueToIncome] = useState<number>(0);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    updateIncome("income", valueToIncome);
    toggleModal();
    selectModalType(null);
  };

  const handleCancel = () => {
    toggleModal();
    selectModalType(null);
  };

  useEffect(() => {
    setValueToIncome(income);
  }, [income]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        id="income"
        label="Renda"
        inputType="basic"
        state={valueToIncome}
        setState={setValueToIncome}
        type="number"
        step={"0.01"}
        minLimit={0}
        maxLimit={1000000}
      />
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
          Editar Renda
        </button>
      </div>
    </form>
  );
}
