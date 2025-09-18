import { vaultItemService } from "../services/vaultItem.service";
import { getUser } from "../utils/getUser";

export async function getVaultItems() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await vaultItemService.getAll(userId);
  if (!res.data) return null;

  return res.data;
}
