import { transactionService } from '../services/transaction.service';
import { getUser } from '../utils/getUser';

export async function getTransactions() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await transactionService.getAll(userId);
  if (!res.data) return null;

  return res.data;
}
