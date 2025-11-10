'use client';

import { modalContentMap } from '@/data/modalContentMap';
import { useModalStore } from '@/stores/useModalStore';

export default function ModalContent() {
  const selectedModal = useModalStore((s) => s.selectedModal);

  return <>{selectedModal ? modalContentMap[selectedModal] : null}</>;
}
