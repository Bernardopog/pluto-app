import { vaultItemRepository } from "../repositories/vaultItem.repository";
import { getUser } from "../utils/getUser";

export async function getVaultItems() {
  const userId = await getUser();
  if (!userId) return null;

  return await vaultItemRepository.getAll(userId);
}
