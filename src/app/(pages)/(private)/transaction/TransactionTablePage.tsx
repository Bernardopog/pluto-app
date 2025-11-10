import TransactionAction from '@/layout/Transaction/TransactionAction';
import TransactionFilter from '@/layout/Transaction/TransactionFilter';
import TransactionOverview from '@/layout/Transaction/TransactionOverview';
import TransactionTable from '@/layout/Transaction/TransactionTable';

export default function TransactionTablePage() {
  return (
    <section
      id='transaction-view-page-txn'
      className='transaction-page grid h-full'
    >
      <TransactionOverview />
      <TransactionFilter />
      <TransactionAction />
      <TransactionTable />
    </section>
  );
}
