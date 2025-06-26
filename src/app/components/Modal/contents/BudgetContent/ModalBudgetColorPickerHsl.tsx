import Input from "@/app/ui/Input";
import { Dispatch, SetStateAction } from "react";

interface IModalBudgetColorPickerHslProps {
  hue: number;
  setHue: Dispatch<SetStateAction<number>>;
  saturation: number;
  setSaturation: Dispatch<SetStateAction<number>>;
  lightness: number;
  setLightness: Dispatch<SetStateAction<number>>;
}

export default function ModalBudgetColorPickerHsl({
  hue,
  setHue,
  saturation,
  setSaturation,
  lightness,
  setLightness,
}: IModalBudgetColorPickerHslProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Input
        id="budgetColor"
        label="Matiz"
        inputType="basic"
        state={hue}
        setState={setHue}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={360}
      />
      <Input
        id="budgetColor"
        label="Saturação"
        inputType="basic"
        state={saturation}
        setState={setSaturation}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={100}
      />
      <Input
        id="budgetColor"
        label="Brilho"
        inputType="basic"
        state={lightness}
        setState={setLightness}
        type="number"
        step={"1"}
        minLimit={0}
        maxLimit={100}
      />
    </div>
  );
}
