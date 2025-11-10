import { goalService } from '../services/goal.service';
import { getUser } from '../utils/getUser';

export async function getGoal() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await goalService.get(userId);
  if (!res.data) return null;

  return res.data;
}
