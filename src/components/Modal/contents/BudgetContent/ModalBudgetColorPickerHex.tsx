import Input from "@/ui/Input";
import { Dispatch, SetStateAction } from "react";
import { MdFormatPaint } from "react-icons/md";

interface IModalBudgetColorPickerHexProps {
  hex: string;
  setHex: Dispatch<SetStateAction<string>>;
}

export default function ModalBudgetColorPickerHex({
  hex,
  setHex,
}: IModalBudgetColorPickerHexProps) {
  return (
    <Input
      id="budgetColor"
      label="Cor da Categoria"
      inputType="decorated"
      state={hex}
      setState={setHex}
      type="text"
      icon={<MdFormatPaint />}
    />
  );
}
