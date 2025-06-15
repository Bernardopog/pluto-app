"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import ModalGoals from "./contents/ModalGoals";
import ModalStats from "./contents/ModalStats";

export default function ModalContent() {
  const { selectedModal } = useModalStore();

  return (
    <>
      {selectedModal === "goals" && <ModalGoals />}
      {selectedModal === "stats" && <ModalStats />}
    </>
  );
}
