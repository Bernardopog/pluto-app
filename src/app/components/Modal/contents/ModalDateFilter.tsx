"use client";
import { useModalStore } from "@/app/stores/useModalStore";
import {
  DateType,
  useTransactionFilterStore,
} from "@/app/stores/useTransactionFilterStore";
import Radio from "@/app/ui/Radio";
import { FormEvent, useState } from "react";

export default function ModalDateFilter() {
  const {
    firstDate,
    secondDate,
    setFirstDate,
    setSecondDate,
    resetDates,
    dateFilter,
    setDateFilter,
  } = useTransactionFilterStore();
  const { toggleModal } = useModalStore();

  const [firstDateInput, setFirstDateInput] = useState<string>(
    firstDate.toISOString().split("T")[0]
  );
  const [secondDateInput, setSecondDateInput] = useState<string | null>(
    secondDate?.toISOString().split("T")[0] || null
  );
  const [typeDateFilter, setTypeDateFilter] = useState<DateType>(dateFilter);

  const handleSelectDateType = (value: DateType) => {
    setTypeDateFilter(value);
    setSecondDate(null);
    setSecondDateInput(null);
  };

  const handleCancel = () => {
    setFirstDateInput(new Date().toISOString().split("T")[0]);
    setSecondDateInput(null);
    toggleModal();
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (dateFilter === "all") resetDates();

    setDateFilter(typeDateFilter);

    setFirstDate(new Date(firstDateInput));
    if (secondDateInput) setSecondDate(new Date(secondDateInput));

    toggleModal();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Radio
        id="all"
        name="date"
        label="Todas datas"
        state={typeDateFilter === "all"}
        setState={() => handleSelectDateType("all")}
      />
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="between"
          name="date"
          label="Entre"
          state={typeDateFilter === "between"}
          setState={() => handleSelectDateType("between")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span>Durante:</span>
          <input
            type="date"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstDateInput}
            onChange={(ev) => setFirstDateInput(ev.target.value)}
            disabled={typeDateFilter !== "between"}
          />
          <span className="inline-block ml-4">Ate:</span>
          <input
            type="date"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={secondDateInput ?? ""}
            onChange={(ev) => setSecondDateInput(ev.target.value)}
            min={firstDateInput}
            disabled={typeDateFilter !== "between"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="before"
          name="date"
          label="Antes"
          state={typeDateFilter === "before"}
          setState={() => handleSelectDateType("before")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span>Antes de:</span>
          <input
            type="date"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstDateInput}
            onChange={(ev) => setFirstDateInput(ev.target.value)}
            disabled={typeDateFilter !== "before"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="after"
          name="date"
          label="Depois"
          state={typeDateFilter === "after"}
          setState={() => handleSelectDateType("after")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span>Depois de:</span>
          <input
            type="date"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstDateInput}
            onChange={(ev) => setFirstDateInput(ev.target.value)}
            disabled={typeDateFilter !== "after"}
          />
        </div>
      </fieldset>
      <fieldset className="flex justify-between gap-2">
        <Radio
          id="exactly"
          name="date"
          label="Exatamente"
          state={typeDateFilter === "exactly"}
          setState={() => handleSelectDateType("exactly")}
        />
        <div className="flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50">
          <span>Exatamente:</span>
          <input
            type="date"
            className="inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200"
            value={firstDateInput}
            onChange={(ev) => setFirstDateInput(ev.target.value)}
            disabled={typeDateFilter !== "exactly"}
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
          Filtrar por Data
        </button>
      </div>
    </form>
  );
}
