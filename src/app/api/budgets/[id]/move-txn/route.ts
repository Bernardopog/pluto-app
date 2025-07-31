import { IContext } from "@/interfaces/IContext";
import { budgetService } from "@/server/services/budget.service";
import { getIdFromContext } from "@/server/utils/getIdFromContext";
import { getUser } from "@/server/utils/getUser";

export const POST = async (req: Request, context: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: { toId: number } = await req.json();
  const id = await getIdFromContext(context);

  const { message, status, data } = await budgetService.moveTxn(
    Number(id),
    body.toId,
    userId
  );

  return Response.json({ message, data }, { status });
};
