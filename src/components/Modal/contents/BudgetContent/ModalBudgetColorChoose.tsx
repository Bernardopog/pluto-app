import Radio from "@/ui/Radio";

interface IModalBudgetColorChooseProps {
  budgetColorType: "hex" | "hsl" | "rgb";
  setBudgetColorType: React.Dispatch<
    React.SetStateAction<"hex" | "hsl" | "rgb">
  >;
}

export default function ModalBudgetColorChoose({
  budgetColorType,
  setBudgetColorType,
}: IModalBudgetColorChooseProps) {
  return (
    <div className="flex pt-2 gap-6">
      <Radio
        id="hex"
        name="color"
        state={budgetColorType === "hex"}
        setState={() => setBudgetColorType("hex")}
        label="HEX"
      />
      <Radio
        id="hsl"
        name="color"
        state={budgetColorType === "hsl"}
        setState={() => setBudgetColorType("hsl")}
        label="HSL"
      />
      <Radio
        id="rgb"
        name="color"
        state={budgetColorType === "rgb"}
        setState={() => setBudgetColorType("rgb")}
        label="RGB"
      />
    </div>
  );
}
