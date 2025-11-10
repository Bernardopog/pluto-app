import { vaultService } from '../services/vault.service';
import { getUser } from '../utils/getUser';

export async function getVaults() {
  const userId = await getUser();
  if (!userId) return null;

  const res = await vaultService.getAll(userId);
  if (!res.data) return null;

  return res.data;
}
