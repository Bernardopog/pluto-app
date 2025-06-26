import Input from "@/app/ui/Input";
import { Dispatch, SetStateAction } from "react";

interface IModalBudgetColorPickerRgbProps {
  red: string | number;
  setRed: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
  green: string | number;
  setGreen: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
  blue: string | number;
  setBlue: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
}

export default function ModalBudgetColorPickerRgb({
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue,
}: IModalBudgetColorPickerRgbProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Input
        id="budgetColor"
        label="Vermelho"
        inputType="basic"
        state={red}
        setState={setRed}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={255}
      />
      <Input
        id="budgetColor"
        label="Verde"
        inputType="basic"
        state={green}
        setState={setGreen}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={255}
      />
      <Input
        id="budgetColor"
        label="Azul"
        inputType="basic"
        state={blue}
        setState={setBlue}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={255}
      />
    </div>
  );
}
