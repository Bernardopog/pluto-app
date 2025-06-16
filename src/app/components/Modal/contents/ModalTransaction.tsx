"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import {
  ITransaction,
  useTransactionBudgetStore,
} from "@/app/stores/useTransactionBudgetStore";
import Divider from "@/app/ui/Divider";
import Input from "@/app/ui/Input";
import Radio from "@/app/ui/Radio";
import { useState } from "react";
import { MdAttachMoney, MdFilePresent } from "react-icons/md";

export default function ModalTransaction() {
  const { createTransation, budgetList } = useTransactionBudgetStore();
  const { toggleModal } = useModalStore();

  const [transactionName, setTransactionName] = useState<string>("");
  const [transactionValue, setTransactionValue] = useState<string>("");
  const [transactionDate, setTransactioDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [transactionCategory, setTransactionCategory] = useState<number | null>(
    null
  );
  const [transactionType, setTransactionType] = useState<"income" | "outcome">(
    "outcome"
  );
  const [hasError, setHasError] = useState<boolean>(false);

  const validator = () => {
    if (transactionName === "" || transactionName.trim() === "") return false;
    if (transactionValue === "" || Number.isNaN(Number(transactionValue)))
      return false;

    return true;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    let money = Number(transactionValue.replace(",", "."));
    if (money < 0) money *= -1;
    if (transactionType === "outcome") money *= -1;
    else money *= 1;

    if (
      !validator() ||
      transactionCategory === null ||
      Number.isNaN(Number(transactionCategory))
    ) {
      setHasError(true);
      return;
    }

    setHasError(false);

    const data: ITransaction = {
      id: Math.random() * 100000,
      name: transactionName,
      value: money,
      date: new Date(transactionDate),
      categoryId: Number(transactionCategory),
    };
    createTransation(data);
    toggleModal();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Nome da transação"
        id="name"
        inputType="decorated"
        icon={<MdFilePresent />}
        state={transactionName}
        setState={setTransactionName}
        type="text"
      />
      <fieldset className="flex flex-col gap-y-2">
        <div className="flex-1">
          <Input
            label="Valor da transação"
            id="value"
            inputType="decorated"
            icon={<MdAttachMoney />}
            state={transactionValue}
            setState={setTransactionValue}
            type="number"
          />
        </div>
        <div className="flex justify-between flex-1 gap-2">
          <div
            className={`w-full p-1 border-2 rounded-lg duration-300 ease-in-out ${
              transactionType === "outcome"
                ? "bg-red-300 border-red-600"
                : "bg-chetwode-blue-200 border-transparent"
            }`}
          >
            <Radio
              id="outcome"
              label="Gasto"
              state={transactionType === "outcome"}
              setState={() => setTransactionType("outcome")}
              name="type"
            />
          </div>
          <div
            className={`w-full p-1 border-2 rounded-lg duration-300 ease-in-out ${
              transactionType === "income"
                ? "bg-green-300 border-green-600"
                : "bg-chetwode-blue-200 border-transparent"
            }`}
          >
            <Radio
              id="income"
              label="Ganho"
              state={transactionType === "income"}
              setState={() => setTransactionType("income")}
              name="type"
            />
          </div>
        </div>
      </fieldset>
      <input
        type="date"
        className="mt-6 px-4 py-1.5 rounded-lg bg-chetwode-blue-200 text-chetwode-blue-950 duration-300 ease-in-out disabled:grayscale-75 disabled:opacity-40"
        max={new Date().toISOString().split("T")[0]}
        value={transactionDate}
        onChange={(ev) => setTransactioDate(ev.target.value)}
      />
      <span className="mt-2 opacity-50">
        <Divider direction="horizontal" />
      </span>
      <h3 className="subsubtitle">Categorias</h3>
      <ul className="flex flex-wrap gap-2">
        {budgetList.length > 0 &&
          budgetList.map((category) => (
            <li
              key={category.id}
              className={`flex-1 rounded-lg border-2 text-center duration-300 ease-in-out ${
                transactionCategory === category.id
                  ? "bg-chetwode-blue-300 border-chetwode-blue-600"
                  : "bg-chetwode-blue-200 border-transparent"
              }`}
            >
              <button
                type="button"
                className="p-2 rounded-lg"
                onClick={() => setTransactionCategory(category.id)}
              >
                <p className="text-nowrap">{category.name}</p>
              </button>
            </li>
          ))}
      </ul>
      <span className="mt-2 opacity-50">
        <Divider direction="horizontal" />
      </span>
      {hasError && (
        <p className="text-red-600">
          Parece que tem algum erro no formulário, certifique-se de escolher uma
          categoria, um nome e um valor.
        </p>
      )}
      <div className="flex self-end gap-x-2">
        <button
          type="button"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
          onClick={() => toggleModal()}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100"
        >
          Criar Transação
        </button>
      </div>
    </form>
  );
}
