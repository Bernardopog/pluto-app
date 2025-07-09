import VaultList from "@/app/layout/Vault/VaultList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Vault",
  description: "Vault with your saved money",
};
export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Cofre</h2>
      <section className="vault-page grid min-h-[calc(100vh-32px-24px)]">
        <VaultList />
      </section>
    </main>
  );
}
