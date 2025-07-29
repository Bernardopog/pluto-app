import { IVaultItem } from "@/interfaces/IVault";
import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { FormEvent, useEffect, useState } from "react";

export const useModalVaultItemLogic = (type: "create" | "update") => {
  const {
    vaultList,
    addVaultItem,
    editVaultItem,
    selectedVault,
    selectedVaultItem,
  } = useVaultStore();
  const { toggleModal } = useModalStore();

  const [vaultItemName, setVaultItemName] = useState<string>("");
  const [vaultItemValue, setVaultItemValue] = useState<number>(0);
  const [vaultAssignedId, setVaultAssignedId] = useState<number | null>(
    selectedVault?.id ?? null
  );

  const [hasError, setHasError] = useState<boolean>(false);
  const validator = (): boolean => {
    if (vaultItemName.trim() === "") return false;
    if (Number.isNaN(Number(vaultItemValue))) return false;
    if (Number(vaultItemValue) < 0) return false;
    if (vaultAssignedId === null) return false;
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (vaultAssignedId === null) return;

    if (validator()) {
      setHasError(false);
      if (type === "create") {
        const data = {
          id: (Math.random() * 100000).toString(),
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        addVaultItem(data);
        toggleModal();
        return;
      } else {
        const data: IVaultItem = {
          id: selectedVaultItem!.id,
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        editVaultItem(selectedVaultItem!.id, data);
        toggleModal();
        return;
      }
    }

    setHasError(true);
    toggleModal();
  };

  const handleCancel = () => {
    setHasError(false);
    toggleModal();
  };

  useEffect(() => {
    if (type === "create") return;
    if (type === "update") setVaultItemName(selectedVault?.name ?? "");

    if (selectedVaultItem) {
      setVaultItemName(selectedVaultItem.name);
      setVaultItemValue(selectedVaultItem.value);
      setVaultAssignedId(selectedVaultItem.vaultId);
    }
  }, [selectedVaultItem, selectedVault, type]);

  return {
    handleSubmit,
    handleCancel,
    hasError,
    vaultList,
    vaultItemName,
    setVaultItemName,
    vaultItemValue,
    setVaultItemValue,
    vaultAssignedId,
    setVaultAssignedId,
  };
};
