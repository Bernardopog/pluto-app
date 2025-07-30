import { IContext } from "@/interfaces/IContext";
import { IBudgetUpdateDTO } from "@/server/dto/budget.dto";
import { budgetService } from "@/server/services/budget.service";
import { getIdFromContext } from "@/server/utils/getIdFromContext";

export const PUT = async (req: Request, context: IContext) => {
  const body: IBudgetUpdateDTO = await req.json();
  const id: string = await getIdFromContext(context);

  const res = await budgetService.update(Number(id), body);

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};

export const DELETE = async (_: Request, context: IContext) => {
  const id: string = await getIdFromContext(context);

  const res = await budgetService.delete(Number(id));

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};
