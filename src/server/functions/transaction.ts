import { getUser } from "../utils/getUser";
import { transactionService } from "../services/transaction.service";

export async function getTransactions() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await transactionService.getAll(userId);
  if (!res.data) return null;

  return res.data;
}
