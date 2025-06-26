import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

interface IInputProps {
  state: string | number;
  setState: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;

  label: string;
  placeholder?: string;
  id: string;
  name?: string;
  inputType: "basic" | "decorated";
  icon?: ReactNode;
  type: "text" | "number";
  required?: boolean;
  step?: string;
  maxLimit?: number;
  minLimit?: number;
}

export default function Input(prop: IInputProps) {
  return (
    <>
      {prop.inputType === "basic" && <BasicInput {...prop} />}
      {prop.inputType === "decorated" && <DecoratedInput {...prop} />}
    </>
  );
}

function BasicInput({
  state,
  setState,
  label,
  placeholder,
  id,
  type,
  name,
  required,
  step,
  maxLimit,
  minLimit,
}: IInputProps) {
  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      // @ts-expect-error: setState can be number or string
      setState(Number(ev.target.value));
    } else {
      // @ts-expect-error: setState can be number or string
      setState(ev.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-chetwode-blue-950">
        {label} {required && <span className="text-chetwode-blue-600">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name ?? id}
        id={id}
        step={step ?? "0.01"}
        className="p-1 rounded-lg border-2 border-transparent outline-none bg-chetwode-blue-200 text-chetwode-blue-900 duration-300 ease-in-out focus:border-chetwode-blue-600"
        value={state}
        onChange={handleInputChange}
        required={required}
        min={minLimit}
        max={maxLimit}
      />
    </div>
  );
}

function DecoratedInput({
  state,
  setState,
  label,
  placeholder,
  id,
  name,
  type,
  required,
  icon,
  step,
  maxLimit,
  minLimit,
}: IInputProps) {
  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (type === "number") {
      // @ts-expect-error: setState can be number or string
      setState(Number(ev.target.value));
    } else {
      // @ts-expect-error: setState can be number or string
      setState(ev.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-chetwode-blue-950">
        {label} {required && <span className="text-chetwode-blue-600">*</span>}
      </label>
      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          name={name ?? id}
          id={id}
          step={step ?? "0.01"}
          className="peer w-full p-1 rounded-lg border-2 border-transparent outline-none bg-chetwode-blue-200 text-chetwode-blue-900 duration-300 ease-in-out focus:border-chetwode-blue-600"
          value={state}
          onChange={handleInputChange}
          required={required}
          min={minLimit}
          max={maxLimit}
        />
        <span className="flex items-center justify-center absolute right-0 top-1/2 h-full w-10 border-2 border-l-0 rounded-r-lg -translate-y-1/2 text-3xl bg-chetwode-blue-300 text-chetwode-blue-950 border-transparent duration-300 ease-in-out peer-focus:border-chetwode-blue-600">
          {icon}
        </span>
      </div>
    </div>
  );
}
