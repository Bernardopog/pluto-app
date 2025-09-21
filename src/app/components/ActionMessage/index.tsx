"use client";
import { useMessageStore } from "@/app/stores/useMessageStore";
import { ReactNode, useEffect, useState } from "react";
import {
  MdArrowForward,
  MdCheck,
  MdClose,
  MdInfo,
  MdWarning,
} from "react-icons/md";
import { Bowlby_One_SC } from "next/font/google";
import Inert from "../Inert";

const alfaSlabOne = Bowlby_One_SC({ weight: "400", subsets: ["latin"] });

type StatusNameType =
  | "none"
  | "info"
  | "success"
  | "redirect"
  | "clientError"
  | "serverError";

export default function ActionMessage() {
  const [statusName, setStatusName] = useState<StatusNameType>("none");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const data = useMessageStore((s) => s.data);

  useEffect(() => {
    if (data.status >= 500) setStatusName("serverError");
    else if (data.status >= 400) setStatusName("clientError");
    else if (data.status >= 300) setStatusName("redirect");
    else if (data.status >= 200) setStatusName("success");
    else if (data.status >= 100) setStatusName("info");
    else setStatusName("none");
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [data]);

  const statusMap: Record<string, { style: string; icon: ReactNode }> = {
    none: {
      style:
        "bg-star-dust-50 border-chetwode-blue-900/25 text-chetwode-blue-950",
      icon: null,
    },
    info: {
      style: "bg-yellow-200 border-yellow-900/25 text-yellow-950",
      icon: <MdInfo />,
    },
    success: {
      style: "bg-green-200 border-green-900/25 text-green-950",
      icon: <MdCheck />,
    },
    redirect: {
      style: "bg-blue-200 border-blue-900/25 text-blue-950",
      icon: <MdArrowForward />,
    },
    clientError: {
      style: "bg-orange-200 border-orange-900/25 text-orange-950",
      icon: <MdClose />,
    },
    serverError: {
      style: "bg-red-200 border-red-900/25 text-red-950",
      icon: <MdWarning />,
    },
  };

  return (
    <Inert isVisible={isAnimating}>
      <article
        className={`absolute top-0 left-1/2 z-[100] -translate-x-1/2 min-w-64 w-9/10 max-w-[480px] h-24 p-2 border-2 rounded-lg shadow-lg duration-300 ease-in-out ${
          statusMap[statusName].style
        } ${isAnimating ? "translate-y-2" : "-translate-y-[150%]"}`}
      >
        {statusName !== "none" && (
          <div className="absolute top-0.5 right-0.5 border-2 rounded-full text-2xl">
            {statusMap[statusName].icon}
          </div>
        )}
        <h2 className="text-xl font-bold">{data.message}</h2>
        <p className="font-medium opacity-75">{data.description}</p>
        <span
          className={`absolute -bottom-1 right-0 text-5xl select-none opacity-10 ${alfaSlabOne.className}`}
        >
          {data.status >= 100 && data.status}
        </span>
      </article>
    </Inert>
  );
}
