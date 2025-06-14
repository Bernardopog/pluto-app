"use client";

import { useModalStore } from "@/app/stores/useModalStore";

export default function DashboardGoalsSelect() {
  const { toggleModal, selectModalType } = useModalStore();

  const handleModal = () => {
    toggleModal();
    selectModalType("goals");
  };

  return (
    <button
      className="text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75"
      onClick={handleModal}
    >
      Criar
    </button>
  );
}
