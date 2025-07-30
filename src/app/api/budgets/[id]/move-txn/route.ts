import { IContext } from "@/interfaces/IContext";
import { budgetService } from "@/server/services/budget.service";
import { getIdFromContext } from "@/server/utils/getIdFromContext";

export const POST = async (req: Request, context: IContext) => {
  const body: { toId: number } = await req.json();
  const id = await getIdFromContext(context);

  const res = await budgetService.moveTxn(Number(id), body.toId);

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};
