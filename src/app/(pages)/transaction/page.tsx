import TransactionViewSwitcher from "./TransactionViewSwitcher";

export default function TransactionPage() {
  return (
    <main className="page flex flex-col overflow-y-clip">
      <h2 className="main-title">Transações</h2>
      <TransactionViewSwitcher />
    </main>
  );
}
