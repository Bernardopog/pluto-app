"use client";
import Inert from "@/app/components/Inert";
import NavbarLinkList from "./NavbarLinkList";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";

export default function Navbar() {
  const [isSiderbarOpen, setIsSiderbarOpen] = useState<boolean>(false);

  const handleSidebar = () => {
    setIsSiderbarOpen(!isSiderbarOpen);
  };

  return (
    <>
      <button
        className={`flex items-center justify-center absolute z-50 size-8 rounded-full text-2xl bg-chetwode-blue-800 text-star-dust-50 cursor-pointer duration-300 ease-in-out ${
          isSiderbarOpen ? "top-4 left-[calc(16rem-3rem)]" : "top-2 left-2"
        }`}
        aria-label={isSiderbarOpen ? "Fechar Menu" : "Abrir Menu"}
        title={isSiderbarOpen ? "Fechar Menu" : "Abrir Menu"}
        onClick={handleSidebar}
      >
        {isSiderbarOpen ? (
          <GoSidebarCollapse className="rotate-180" />
        ) : (
          <MdMenu />
        )}
      </button>
      <Inert
        isVisible={isSiderbarOpen}
        className={`absolute z-40 h-dvh duration-300 ease-in-out overflow-clip ${
          isSiderbarOpen ? "w-full" : "w-0"
        }`}
      >
        <div
          className="size-full bg-black/25 backdrop-blur-xs"
          onClick={handleSidebar}
        >
          <nav
            className="w-64 h-full py-4 bg-chetwode-blue-800 text-star-dust-50"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="ml-4 text-3xl font-bold">Pluto</h1>
            <NavbarLinkList handleSidebar={handleSidebar} />
          </nav>
        </div>
      </Inert>
    </>
  );
}
