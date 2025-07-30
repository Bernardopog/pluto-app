"use server";

import { prisma } from "@/lib/db";
import * as bcrypt from "bcrypt";

type RegisterState = {
  success: boolean;
  message: string;
};

export async function registerUser(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const name = formData.get("name") as string;
  const email = formData.get("email")?.toString().toLowerCase() as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const regexOnlyLetters = /^[A-Za-z]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    name.trim() === "" ||
    name.length < 2 ||
    name.length > 48 ||
    name.includes(" ") ||
    !regexOnlyLetters.test(name)
  ) {
    return { success: false, message: "Nome inválido" };
  }

  if (email.trim() === "" || !email.includes("@") || !regexEmail.test(email)) {
    return { success: false, message: "Email inválido" };
  }

  if (password !== confirmPassword) {
    return { success: false, message: "Senhas não coincidem" };
  }

  if (password.length < 8 || password.length > 48) {
    return { success: false, message: "Senha inválida" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: true, message: "Usuário criado com sucesso!" };
  } catch {
    return { success: false, message: "Erro ao criar usuário" };
  }
}
