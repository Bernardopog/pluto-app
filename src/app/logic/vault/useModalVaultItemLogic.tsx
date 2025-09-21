import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { FormEvent, useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";
import { useMessageStore } from "@/app/stores/useMessageStore";

export const useModalVaultItemLogic = (type: "create" | "update") => {
  const { addVaultItem, editVaultItem } = useVaultStore(
    useShallow((s) => ({
      addVaultItem: s.vaultItemMethods.create,
      editVaultItem: s.vaultItemMethods.update,
    }))
  );
  const { vaultList, selectedVault, selectedVaultItem } = useVaultStore(
    useShallow((s) => ({
      vaultList: s.vaultData.list,
      selectedVault: s.vaultSelection.selected,
      selectedVaultItem: s.vaultItemSelection.selected,
    }))
  );
  const toggleModal = useModalStore((s) => s.toggleModal);

  const setMessage = useMessageStore((s) => s.setMessage);

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
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        addVaultItem(data).then(({ message, status, data }) =>
          setMessage({
            message,
            status,
            description:
              status === 201
                ? `Seu item (${data?.name}) foi criado com sucesso!`
                : "Ocorreu um erro ao criar o item",
          })
        );
        toggleModal();
        return;
      } else {
        const data = {
          name: vaultItemName,
          value: Number(vaultItemValue),
          vaultId: vaultAssignedId,
        };

        editVaultItem(selectedVaultItem!.id, data).then(
          ({ message, status, data }) =>
            setMessage({
              message,
              status,
              description:
                status === 200
                  ? `Seu item (${data?.name}) foi editado com sucesso!`
                  : "Ocorreu um erro ao editar o item",
            })
        );
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
