import type { IVaultCreateDTO } from '@/server/dto/vault.dto';
import { vaultService } from '@/server/services/vault.service';
import { getUser } from '@/server/utils/getUser';

export async function GET() {
  const userId = await getUser();
  if (!userId) return Response.json('Não autorizado', { status: 401 });

  const { message, status, data } = await vaultService.getAll(userId);
  return Response.json({ message, data }, { status });
}

export async function POST(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json('Não autorizado', { status: 401 });

  const body: IVaultCreateDTO = await req.json();

  const { message, status, data } = await vaultService.create(body, userId);

  return Response.json({ message, data, status }, { status });
}
