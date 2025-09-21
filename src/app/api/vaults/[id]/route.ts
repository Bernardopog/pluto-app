import { IContext } from "@/interfaces/IContext";
import { IVaultUpdateDTO } from "@/server/dto/vault.dto";
import { vaultService } from "@/server/services/vault.service";
import { getUser } from "@/server/utils/getUser";

export async function PUT(req: Request, { params }: IContext) {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });
  const body: IVaultUpdateDTO = await req.json();
  const id = (await params).id;

  const { message, status, data } = await vaultService.update(
    Number(id),
    body,
    userId
  );

  return Response.json({ message, data, status }, { status });
}

export async function DELETE(_: Request, { params }: IContext) {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });
  const id = (await params).id;

  const { message, status, data } = await vaultService.delete(
    Number(id),
    userId
  );

  return Response.json({ message, data, status }, { status });
}
