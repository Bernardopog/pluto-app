import { transactionRepository } from "@/server/repositories/transaction.repository";
import { getUser } from "../utils/getUser";

export async function getTransactions() {
  const userId = await getUser();
  if (!userId) return null;

  return await transactionRepository.getAll(userId);
}
