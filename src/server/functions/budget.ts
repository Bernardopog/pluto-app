import { budgetRepository } from "../repositories/budget.repository";
import { getUser } from "../utils/getUser";

export async function getBudgets() {
  const userId = await getUser();
  if (!userId) return null;

  return await budgetRepository.getAll(userId);
}
