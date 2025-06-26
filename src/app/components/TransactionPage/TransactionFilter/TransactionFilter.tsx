"use client";

import { useDebouncedInput } from "@/app/hooks/useDebouncedInput";
import DebounceInput from "@/app/ui/DebounceInput";
import { ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import {
  TransactionFilterType,
  useModalStore,
} from "@/app/stores/useModalStore";
import TransactionFilterButton from "./TransactionFilterButton";

export default function TransactionFilter() {
  const { handleChangeDebounce } = useDebouncedInput();
  const { toggleModal, selectModalType } = useModalStore();

  const modalController = (modalType: TransactionFilterType) => {
    selectModalType(modalType);
    toggleModal();
  };

  return (
    <form id="transaction-filter" className="base-card flex flex-col">
      <h2 className="subtitle">Filtros</h2>
      <div className="flex justify-end">
        <button
          className="p-1.5 rounded-lg duration-300 ease-in-out font-bold hover:brightness-95 active:brightness-75 bg-chetwode-blue-900 text-chetwode-blue-50"
          type="reset"
        >
          Limpar todos filtros
        </button>
      </div>
      <div role="group" className="flex justify-between items-end flex-1">
        <ul className="flex items-center w-2/3 gap-x-2">
          <li>
            <TransactionFilterButton
              label="Data"
              isActive={true}
              action={() => modalController("filterDate")}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Valor"
              isActive={false}
              action={() => modalController("filterValue")}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Categoria"
              isActive={false}
              action={() => modalController("filterCategory")}
            />
          </li>
          <li>
            <TransactionFilterButton
              label="Tipo"
              isActive={false}
              action={() => modalController("filterType")}
            />
          </li>
        </ul>
        <div className="w-1/3">
          <DebounceInput
            id="search"
            placeholder="Ex: Compra de um Notebook"
            icon={<MdSearch />}
            action={(ev: ChangeEvent<HTMLInputElement>) =>
              handleChangeDebounce(ev.target.value)
            }
          />
        </div>
      </div>
    </form>
  );
}
