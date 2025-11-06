"use client";
import {
  MdCheckBox,
  MdEmail,
  MdLock,
  MdPerson,
  MdWarning,
} from "react-icons/md";
import ServerInput from "@/ui/ServerInput";
import { registerUser } from "./action";
import { useActionState } from "react";

export default function RegisterForm() {
  const initialState: { success: boolean; message: string } = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(registerUser, initialState);

  if (state.success === true) {
    setTimeout(() => (window.location.href = "/login"), 1000);
  }

  return (
    <form
      action={formAction}
      className="flex flex-col min-w-96 max-w-128 h-fit p-4 rounded-lg gap-4 bg-chetwode-blue-50 shadow-md"
    >
      <ServerInput
        id="name"
        label="Nome"
        type="text"
        name="name"
        placeholder="Como devemos te chamar?"
        icon={<MdPerson />}
        required
      />
      <ServerInput
        id="email"
        label="Email"
        type="text"
        name="email"
        placeholder="Digite seu Email"
        icon={<MdEmail />}
        required
      />
      <ServerInput
        id="password"
        label="Senha"
        type="password"
        name="password"
        placeholder="Digite sua Senha"
        icon={<MdLock />}
        required
      />
      <ServerInput
        id="confirmPassword"
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        placeholder="Digite sua Senha novamente"
        icon={<MdLock />}
        required
      />
      <button
        type="submit"
        className="mt-4 p-1.5 rounded-lg bg-chetwode-blue-700 text-chetwode-blue-50 duration-300 ease-in-out hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900"
      >
        Criar conta
      </button>

      {state?.success === false && state?.message.length > 1 && (
        <p className="flex items-center justify-between p-2 gap-4 rounded-lg bg-red-200 text-red-800">
          <span className="font-bold">{state.message}</span>
          <MdWarning className="text-2xl opacity-50" />
        </p>
      )}
      {state?.success === true && (
        <p className="flex items-center justify-between p-2 gap-4 rounded-lg bg-green-200 text-green-800">
          <span className="font-bold">Usuário cadastrado com sucesso</span>
          <MdCheckBox className="text-2xl opacity-50" />
        </p>
      )}
    </form>
  );
}
