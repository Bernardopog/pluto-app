import { statsRepository } from "../repositories/stats.repository";
import { getUser } from "../utils/getUser";

export async function getStats() {
  const userId = await getUser();
  if (!userId) return null;

  return await statsRepository.get(userId);
}
