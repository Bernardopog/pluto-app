"use client";

import { useDebouncedInput } from "@/app/hooks/useDebouncedInput";
import DebounceInput from "@/app/ui/DebounceInput";
import { ChangeEvent, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import {
  TransactionFilterType,
  useModalStore,
} from "@/app/stores/useModalStore";
import TransactionFilterButton from "./TransactionFilterButton";
import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";

export default function TransactionFilter() {
  const { value, handleChangeDebounce } = useDebouncedInput();
  const { toggleModal, selectModalType } = useModalStore();
  const {
    dateFilter,
    valueFilter,
    categoryFilter,
    setSearchFilter,
    transactionTypeFilter,
    resetFullDateFilter,
    resetFullValueFilter,
    resetFullCategoryFilter,
    resetFullTypeFilter,
    resetFullFilter,
  } = useTransactionFilterStore();

  const modalController = (modalType: TransactionFilterType) => {
    selectModalType(modalType);
    toggleModal();
  };

  useEffect(() => {
    setSearchFilter(value);
  }, [value, setSearchFilter]);

  return (
    <form id="transaction-filter" className="base-card flex flex-col">
      <h2 className="subtitle">Filtros</h2>
      <div className="flex justify-end">
        <button
          className="p-1.5 rounded-lg duration-300 ease-in-out font-bold hover:brightness-95 active:brightness-75 bg-chetwode-blue-900 text-chetwode-blue-50"
          type="reset"
          onClick={() => resetFullFilter()}
        >
          Limpar todos filtros
        </button>
      </div>
      <div role="group" className="flex justify-between items-end flex-1">
        <ul className="flex items-center w-2/3 gap-x-2">
          <li>
            <TransactionFilterButton
              label="Data"
              isActive={dateFilter !== "all"}
              action={() => modalController("filterDate")}
              reset={() => resetFullDateFilter()}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Valor"
              isActive={valueFilter !== "all"}
              action={() => modalController("filterValue")}
              reset={() => resetFullValueFilter()}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Categoria"
              isActive={categoryFilter !== null}
              action={() => modalController("filterCategory")}
              reset={() => resetFullCategoryFilter()}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Tipo"
              isActive={transactionTypeFilter !== "all"}
              action={() => modalController("filterType")}
              reset={() => resetFullTypeFilter()}
            />
          </li>
        </ul>
        <div className="w-1/3">
          <DebounceInput
            id="search"
            placeholder="Ex: Compra de um Notebook"
            icon={<MdSearch />}
            action={(ev: ChangeEvent<HTMLInputElement>) => {
              handleChangeDebounce(ev.target.value);
            }}
          />
        </div>
      </div>
    </form>
  );
}
