"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import ModalGoals from "./contents/ModalGoals";

export default function ModalContent() {
  const { selectedModal } = useModalStore();

  return <>{selectedModal === "goals" && <ModalGoals />}</>;
}
