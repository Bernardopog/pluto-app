"use client";

import { modalContentMap } from "@/app/data/modalContentMap";
import { useModalStore } from "@/app/stores/useModalStore";

export default function ModalContent() {
  const selectedModal = useModalStore((s) => s.selectedModal);

  return <>{selectedModal ? modalContentMap[selectedModal] : null}</>;
}
