import { iconNameType } from "@/app/data/iconMap";
import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { FormEvent, useEffect, useState } from "react";

export const useModalVaultLogic = (type: "create" | "update") => {
  const { createVault, updateVault, selectedVault } = useVaultStore();
  const { toggleModal } = useModalStore();

  const [vaultName, setVaultName] = useState<string>("");
  const [vaultLimit, setVaultLimit] = useState<string>("");
  const [vaultIcon, setVaultIcon] = useState<iconNameType | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClose = () => {
    toggleModal();
    setVaultName("");
    setVaultLimit("");
    setVaultIcon(null);
    setHasError(false);
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const validator = (): boolean => {
      if (vaultName.trim() === "") return false;
      if (Number.isNaN(Number(vaultLimit))) return false;
      if (Number(vaultLimit) < 0) return false;
      if (vaultIcon === null) return false;
      return true;
    };

    setHasError(!validator());
    if (!validator()) return;

    if (type === "create") {
      createVault({
        id: Math.random() * 100000,
        name: vaultName,
        targetPrice: Number(vaultLimit),
        icon: vaultIcon ?? "piggy",
      });
    } else {
      updateVault(selectedVault!.id, {
        id: selectedVault!.id,
        name: vaultName,
        targetPrice: Number(vaultLimit),
        icon: vaultIcon ?? "piggy",
      });
    }

    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    if (type === "update") {
      if (selectedVault) {
        setVaultName(selectedVault.name);
        setVaultLimit(selectedVault.targetPrice.toString());
        setVaultIcon(selectedVault.icon);
      }
    }
  }, [type, selectedVault]);

  return {
    vaultName,
    setVaultName,
    vaultLimit,
    setVaultLimit,
    vaultIcon,
    setVaultIcon,
    hasError,
    handleSubmit,
    handleCancel,
  };
};
