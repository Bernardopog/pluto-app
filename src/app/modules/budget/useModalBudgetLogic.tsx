import { useState } from "react";
import {
  IBudget,
  useTransactionBudgetStore,
} from "@/app/stores/useTransactionBudgetStore";
import { useModalStore } from "@/app/stores/useModalStore";

export const useModalBudgetLogic = () => {
  const { toggleModal } = useModalStore();
  const { createBudgetCategory } = useTransactionBudgetStore();

  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetLimit, setBudgetLimit] = useState<number>(100);
  const [budgetColorType, setBudgetColorType] = useState<"hex" | "hsl" | "rgb">(
    "hex"
  );
  const [hasError, setHasError] = useState<boolean>(false);

  const [hex, setHex] = useState<string>("#000");

  const [hue, setHue] = useState<number>(0);
  const [saturation, setSaturation] = useState<number>(0);
  const [lightness, setLightness] = useState<number>(0);

  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);

  const handleReset = () => {
    setBudgetName("");
    setBudgetLimit(0);
    setHex("#000");
    setHue(0);
    setSaturation(0);
    setLightness(0);
    setRed(0);
    setGreen(0);
    setBlue(0);
    setHasError(false);
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    const isHexValid = (value: string) => {
      const formattedValue = value.replaceAll("#", "");

      if (formattedValue.length >= 6)
        return /^([A-Fa-f0-9]{6})$/.test(formattedValue);
      else if (formattedValue.length >= 3 && formattedValue.length < 6)
        return /^([A-Fa-f0-9]{3})$/.test(formattedValue);
      else return false;
    };

    const removeAlphaFromHEX = (value: string) => {
      const formattedValue = value.replaceAll("#", "");
      if (formattedValue.length >= 6) return `${formattedValue.slice(0, 6)}`;
      if (formattedValue.length >= 3) return `${formattedValue.slice(0, 3)}`;
      return "000000";
    };

    const validator = () => {
      if (budgetName.trim() === "") return false;
      if (Number.isNaN(Number(budgetLimit))) return false;
      if (budgetLimit < 0) return false;
      if (budgetColorType === "hex" && !isHexValid(hex)) return false;
      if (budgetColorType === "hsl" && (hue < 0 || hue > 360)) return false;
      if (budgetColorType === "hsl" && (saturation < 0 || saturation > 100))
        return false;
      if (budgetColorType === "hsl" && (lightness < 0 || lightness > 100))
        return false;
      if (budgetColorType === "rgb" && (red < 0 || red > 255)) return false;
      if (budgetColorType === "rgb" && (green < 0 || green > 255)) return false;
      if (budgetColorType === "rgb" && (blue < 0 || blue > 255)) return false;
      return true;
    };

    if (!validator()) {
      setHasError(true);
      return;
    } else {
      handleReset();
    }

    const data: IBudget = {
      id: Math.random() * 100000,
      name: budgetName,
      color:
        budgetColorType === "hex"
          ? `#${removeAlphaFromHEX(hex)}`
          : budgetColorType === "hsl"
          ? `hsl(${hue}, ${saturation}%, ${lightness}%)`
          : `rgb(${red}, ${green}, ${blue})`,
      limit: Number(budgetLimit),
    };

    createBudgetCategory(data);
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return {
    budgetName,
    setBudgetName,
    budgetLimit,
    setBudgetLimit,
    budgetColorType,
    setBudgetColorType,
    hasError,
    hex,
    setHex,
    hue,
    setHue,
    saturation,
    setSaturation,
    lightness,
    setLightness,
    red,
    setRed,
    green,
    setGreen,
    blue,
    setBlue,
    handleSubmit,
    handleCancel,
  };
};
