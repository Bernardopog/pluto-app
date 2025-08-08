"use server";

import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { signJWT } from "@/lib/jwt";
import * as bcrypt from "bcrypt";

type RegisterState = {
  success: boolean;
  message: string;
  token?: number;
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
      const token = signJWT({
        userId: user.id.toString(),
      });

      (await cookies()).set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        path: "/",
        sameSite: "lax",
      });
      return {
        success: true,
        message: "Usuário logado com sucesso!",
        token: user.id,
      };
    }
  } catch {
    return { success: false, message: "Erro ao logar" };
  }
}
