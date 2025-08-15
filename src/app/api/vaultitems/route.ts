import { getUser } from "@/server/utils/getUser";
import { IVaultItemCreateDTO } from "@/server/dto/vaultItem.dto";
import { vaultItemService } from "@/server/services/vaultItem.service";

export async function GET() {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });

  const { message, status, data } = await vaultItemService.getAll(userId);
  return Response.json({ message, data }, { status });
}

export async function POST(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });
  const body: IVaultItemCreateDTO = await req.json();

  const { message, status, data } = await vaultItemService.create(body, userId);

  return Response.json({ message, data }, { status });
}
