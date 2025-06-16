"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import ModalGoals from "./contents/ModalGoals";
import ModalStats from "./contents/ModalStats";
import ModalTransaction from "./contents/ModalTransaction";

export default function ModalContent() {
  const { selectedModal } = useModalStore();

  return (
    <>
      {selectedModal === "goals" && <ModalGoals />}
      {selectedModal === "stats" && <ModalStats />}
      {selectedModal === "transactionCreate" && <ModalTransaction />}
    </>
  );
}
