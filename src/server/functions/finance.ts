import { financeRepository } from "@/server/repositories/finance.repository";
import { getUser } from "../utils/getUser";

export async function getFinance() {
  const userId = await getUser();
  if (!userId) return null;

  return await financeRepository.get(userId);
}
