import { goalRepository } from "../repositories/goal.repository";
import { getUser } from "../utils/getUser";

export async function getGoal() {
  const userId = await getUser();
  if (!userId) return null;

  return await goalRepository.get(userId);
}
