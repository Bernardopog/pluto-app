import VaultAction from "@/layout/Vault/VaultAction";
import VaultChart from "@/layout/Vault/VaultChart";
import VaultList from "@/layout/Vault/VaultList";
import VaultOverview from "@/layout/Vault/VaultOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Vault",
  description: "Vault with your saved money",
};
export default function page() {
  return (
    <main className="page">
      <h2 className="main-title">Cofre</h2>
      <section className="vault-page grid mt-2">
        <VaultOverview />
        <VaultAction />
        <VaultList />
        <VaultChart />
      </section>
    </main>
  );
}
