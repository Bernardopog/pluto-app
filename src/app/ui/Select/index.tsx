"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

interface ISelectProps {
  state: number | string;
  setState: Dispatch<SetStateAction<number | string>>;

  list: {
    id: number | string;
    name: string;
    value: number | string;
  }[];
}

export default function Select({ state, setState, list }: ISelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<number | string>(0);

  const handleOpen = () => setIsOpen(!isOpen);

  const handleSetValue = (value: number | string, itemId: number | string) => {
    setState(value);
    setIsOpen(false);
    setSelectedValue(itemId);
  };

  return (
    <div
      className={`relative w-64 p-1 rounded-lg text-chetwode-blue-950 duration-300 ease-in-out cursor-pointer ${
        isOpen ? "bg-chetwode-blue-200" : "bg-chetwode-blue-300"
      }`}
      onClick={handleOpen}
      role="combobox"
      aria-expanded={isOpen}
      aria-controls="select"
    >
      <span className="inline-flex justify-between w-full">
        {selectedValue ? (
          list.find((item) => item.id === selectedValue)?.name
        ) : (
          <p>Nenhum selecionado</p>
        )}
        <MdArrowDropDown className="text-2xl" />
      </span>
      {isOpen && (
        <ul
          role="listbox"
          className={`flex flex-col absolute top-10 left-0 w-full gap-2 border-2 rounded-lg shadow-lg bg-chetwode-blue-200 border-chetwode-blue-600`}
        >
          {list.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSetValue(item.value, item.id)}
              role="option"
              aria-selected={state === item.value}
              className={`p-2 cursor-pointer duration-300 ease-in-out hover:bg-chetwode-blue-300 first:rounded-t-lg last:rounded-b-lg ${
                state === item.value ? "bg-chetwode-blue-300" : ""
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
