import { financeService } from '../services/finance.service';
import { getUser } from '../utils/getUser';

export async function getFinance() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await financeService.get(userId);
  if (!res.data) return null;

  return res.data;
}
