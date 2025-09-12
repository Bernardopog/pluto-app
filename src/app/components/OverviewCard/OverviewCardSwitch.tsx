"use client";
import { ReactNode, useState } from "react";
import { MdOutlineRotateRight, MdWarning } from "react-icons/md";

export default function OverviewCardSwitch({
  children,
}: {
  children: ReactNode;
}) {
  const childrenList = Array.isArray(children) ? children : [children];

  const [cardToShow, setCardToShow] = useState<number>(0);

  const handleChange = () => {
    if (cardToShow === 1) {
      setCardToShow(0);
    } else {
      setCardToShow(1);
    }
  };

  if (childrenList.length === 1)
    return (
      <div className="flex items-center">
        <MdWarning className="text-xl" />
        <p>Esse componente precisa de mais de um filho</p>
      </div>
    );

  return (
    <>
      <button
        type="button"
        className="absolute bottom-0 right-0 z-10 p-0.5 rounded-lg bg-chetwode-blue-600 text-2xl text-chetwode-blue-50 duration-300 ease-in-out"
        onClick={handleChange}
        aria-label="Mudar o tipo de despesa"
        title="Mudar o tipo de despesa"
      >
        <MdOutlineRotateRight />
      </button>
      {cardToShow === 0 ? childrenList[0] : childrenList[1]}
    </>
  );
}
