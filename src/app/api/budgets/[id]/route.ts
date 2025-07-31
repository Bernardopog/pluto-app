import { IContext } from "@/interfaces/IContext";
import { IBudgetUpdateDTO } from "@/server/dto/budget.dto";
import { budgetService } from "@/server/services/budget.service";
import { getIdFromContext } from "@/server/utils/getIdFromContext";
import { getUser } from "@/server/utils/getUser";

export const PUT = async (req: Request, context: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: IBudgetUpdateDTO = await req.json();
  const id: string = await getIdFromContext(context);

  const { message, status, data } = await budgetService.update(
    Number(id),
    body,
    userId
  );

  return Response.json({ message, data }, { status });
};

export const DELETE = async (_: Request, context: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const id: string = await getIdFromContext(context);

  const { message, status, data } = await budgetService.delete(
    Number(id),
    userId
  );

  return Response.json({ message, data }, { status });
};
