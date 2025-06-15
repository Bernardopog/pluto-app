"use client";

import { useModalStore } from "@/app/stores/useModalStore";

export default function DashboardStatsHeader() {
  const { toggleModal } = useModalStore();

  const handleModal = () => {
    toggleModal();
  };

  return (
    <header className="flex justify-between">
      <h2 className="sub-title">Estatísticas</h2>
      <button
        className="text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75"
        onClick={handleModal}
      >
        Adicionar
      </button>
    </header>
  );
}
