import { ReactNode } from "react";

interface IServerInputProps {
  label: string;
  placeholder?: string;
  id: string;
  name?: string;
  icon?: ReactNode;
  type: "text" | "number" | "email" | "password";
  required?: boolean;
}

export default function ServerInput({
  label,
  placeholder,
  id,
  name,
  type,
  required,
  icon,
}: IServerInputProps) {
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
          className="peer w-full p-1 rounded-lg border-2 border-transparent outline-none bg-chetwode-blue-200 text-chetwode-blue-900 duration-300 ease-in-out focus:border-chetwode-blue-600"
          required={required}
        />
        <span className="flex items-center justify-center absolute right-0 top-1/2 h-full w-10 border-2 border-l-0 rounded-r-lg -translate-y-1/2 text-3xl bg-chetwode-blue-300 text-chetwode-blue-950 border-transparent duration-300 ease-in-out peer-focus:border-chetwode-blue-600">
          {icon}
        </span>
      </div>
    </div>
  );
}
