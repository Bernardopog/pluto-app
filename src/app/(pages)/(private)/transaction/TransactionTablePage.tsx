import TransactionAction from '@/layout/Transaction/TransactionAction';
import TransactionFilter from '@/layout/Transaction/TransactionFilter';
import TransactionOverview from '@/layout/Transaction/TransactionOverview';
import TransactionTable from '@/layout/Transaction/TransactionTable';

export default function TransactionTablePage() {
  return (
    <section className='transaction-page grid h-[calc(100vh-56px)]'>
      <TransactionOverview />
      <TransactionFilter />
      <TransactionAction />
      <TransactionTable />
    </section>
  );
}
