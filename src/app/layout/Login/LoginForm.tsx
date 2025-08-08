"use client";

import ServerInput from "@/app/ui/ServerInput";
import { useActionState, useEffect } from "react";
import { MdCheckBox, MdEmail, MdLock, MdWarning } from "react-icons/md";
import { loginUser } from "./action";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/stores/useAuthStore";

export default function LoginForm() {
  const { setUserId } = useAuthStore();
  const initialState: { success: boolean; message: string; token?: number } = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(loginUser, initialState);

  const router = useRouter();

  useEffect(() => {
    if (!state) return;
    if (state.success === true) {
      setUserId(state.token!);
      const timeout = setTimeout(() => router.push("/dashboard"), 1000);

      return () => clearTimeout(timeout);
    }
  }, [state, setUserId, router]);

  return (
    <form
      action={formAction}
      className="flex flex-col min-w-96 max-w-128 h-fit p-4 rounded-lg gap-2 bg-chetwode-blue-50 shadow-md"
    >
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
      <button
        type="submit"
        className="mt-4 p-1.5 rounded-lg bg-chetwode-blue-700 text-chetwode-blue-50 duration-300 ease-in-out hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900"
      >
        Entrar
      </button>
      {state?.success === false && state?.message.length > 1 && (
        <p className="flex items-center justify-between p-2 gap-4 rounded-lg bg-red-200 text-red-800">
          <span className="font-bold">{state.message}</span>
          <MdWarning className="text-2xl opacity-50" />
        </p>
      )}
      {state?.success === true && (
        <p className="flex items-center justify-between p-2 gap-4 rounded-lg bg-green-200 text-green-800">
          <span className="font-bold">Usuário logado com sucesso</span>
          <MdCheckBox className="text-2xl opacity-50" />
        </p>
      )}
    </form>
  );
}
