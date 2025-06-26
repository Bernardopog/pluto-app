"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import {
  useTransactionFilterStore,
  ValueType,
} from "@/app/stores/useTransactionFilterStore";
import Radio from "@/app/ui/Radio";
import { FormEvent, useState } from "react";

export default function ModalValueFilter() {
  const { valueFilter, setValueFilter, setFirstValue, setSecondValue } =
    useTransactionFilterStore();
  const { toggleModal } = useModalStore();

  const [typeValueFilter, setTypeValueFilter] =
    useState<ValueType>(valueFilter);
  const [firstValueInput, setFirstValueInput] = useState<number>(0);
  const [secondValueInput, setSecondValueInput] = useState<number>(0);

  const handleSelectValueType = (value: ValueType) => {
    setSecondValueInput(0);
    setTypeValueFilter(value);
  };
  const handleCancel = () => {
    setFirstValueInput(0);
    setSecondValueInput(0);
    toggleModal();
  };
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setValueFilter(typeValueFilter);
    setFirstValue(firstValueInput);
    setSecondValue(secondValueInput);
    toggleModal();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Radio
        id="all"
        name="value"
        label="Todos os valores"
        state={typeValueFilter === "all"}
        setState={() => handleSelectValueType("all")}
      />
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="between"
          name="value"
          label="Entre valores"
          state={typeValueFilter === "between"}
          setState={() => handleSelectValueType("between")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span>A partir de:</span>
          <input
            type="number"
            step="0.01"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== "between"}
          />
          <span className="inline-block ml-4">Ate:</span>
          <input
            type="number"
            step="0.01"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={secondValueInput}
            onChange={(ev) => setSecondValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== "between"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="positive"
          name="value"
          label="Valores positivos"
          state={typeValueFilter === "positive"}
          setState={() => handleSelectValueType("positive")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span className="inline-block ml-4">Acima de:</span>
          <input
            type="number"
            step="0.01"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== "positive"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="negative"
          name="value"
          label="Valores negativos"
          state={typeValueFilter === "negative"}
          setState={() => handleSelectValueType("negative")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span className="inline-block ml-4">Abaixo de:</span>
          <input
            type="number"
            step="0.01"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== "negative"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="exactly"
          name="value"
          label="Valores negativos"
          state={typeValueFilter === "exactly"}
          setState={() => handleSelectValueType("exactly")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span className="inline-block ml-4">Exatamente igual a:</span>
          <input
            type="number"
            step="0.01"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== "exactly"}
          />
        </div>
      </fieldset>
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
          Filtrar por Valor
        </button>
      </div>
    </form>
  );
}
