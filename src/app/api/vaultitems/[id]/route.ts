import type { IContext } from '@/interfaces/IContext';
import type { IVaultItemUpdateDTO } from '@/server/dto/vaultItem.dto';
import { vaultItemService } from '@/server/services/vaultItem.service';
import { getUser } from '@/server/utils/getUser';

export async function PUT(req: Request, { params }: IContext) {
  const userId = await getUser();
  if (!userId) return Response.json('Nao autorizado', { status: 401 });

  const id = (await params).id;
  const body: IVaultItemUpdateDTO = await req.json();

  const { message, status, data } = await vaultItemService.update(
    Number(id),
    body,
    userId,
  );

  return Response.json({ message, data, status }, { status });
}

export async function DELETE(_: Request, { params }: IContext) {
  const userId = await getUser();
  if (!userId) return Response.json('Nao autorizado', { status: 401 });
  const id = (await params).id;

  const { message, status, data } = await vaultItemService.delete(
    Number(id),
    userId,
  );

  return Response.json({ message, data, status }, { status });
}
