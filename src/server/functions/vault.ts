import { vaultRepository } from "../repositories/vault.repository";
import { getUser } from "../utils/getUser";

export async function getVaults() {
  const userId = await getUser();
  if (!userId) return null;

  return await vaultRepository.getAll(userId);
}
