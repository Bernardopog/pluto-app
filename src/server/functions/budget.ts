import { budgetService } from '../services/budget.service';
import { getUser } from '../utils/getUser';

export async function getBudgets() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await budgetService.getAll(userId);
  if (!res.data) return null;

  return res.data;
}
