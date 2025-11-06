import RegisterForm from "@/layout/Register/RegisterForm";
import Divider from "@/ui/Divider";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pluto | Register",
};

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen max-h-[calc(100dvh)] p-0 bg-gradient-to-t from-chetwode-blue-100 to-chetwode-blue-300 dark:from-chetwode-blue-800 dark:to-chetwode-blue-950">
      <section className="flex flex-col gap-2 rounded-lg">
        <h2 className="subtitle text-center">Registrar-se</h2>
        <RegisterForm />
        <Divider direction="horizontal" />
        <div className="flex flex-col items-end p-2 rounded-lg text-chetwode-blue-950 bg-chetwode-blue-50 shadow-md">
          <p>
            Já possui uma conta no{" "}
            <span className="text-chetwode-blue-700 font-bold">Pluto</span>?
          </p>
          <Link href="/login" className="underline text-chetwode-blue-900">
            Entrar agora mesmo
          </Link>
        </div>
      </section>
    </main>
  );
}
