"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import { useShallow } from "zustand/shallow";

export default function DashboardStatsHeader() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    }))
  );

  const handleModal = () => {
    toggleModal();
    selectModalType("stats");
  };

  return (
    <header className="flex justify-between">
      <h2 className="subtitle">Estatísticas</h2>
      <button
        className="text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75"
        onClick={handleModal}
      >
        Adicionar
      </button>
    </header>
  );
}
