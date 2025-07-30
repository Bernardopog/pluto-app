"use server";

import { prisma } from "@/lib/db";
import * as bcrypt from "bcrypt";

type RegisterState = {
  success: boolean;
  message: string;
};

export async function loginUser(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const email = formData
    .get("email")
    ?.toString()
    .trim()
    .toLowerCase() as string;
  const password = formData.get("password") as string;

  if (email.trim() === "" || !email.includes("@")) {
    return { success: false, message: "Email inválido" };
  }

  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    const hashedPassword = user?.password;
    if (!hashedPassword) {
      return { success: false, message: "Usuário inválido" };
    }
    const match = await bcrypt.compare(password as string, hashedPassword);

    if (match === false) {
      return { success: false, message: "Erro ao logar" };
    } else {
      return { success: true, message: "Usuário logado com sucesso!" };
    }
  } catch {
    return { success: false, message: "Erro ao logar" };
  }
}
