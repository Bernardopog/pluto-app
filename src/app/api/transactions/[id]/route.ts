import { IContext } from "@/interfaces/IContext";
import { ITransactionUpdateDTO } from "@/server/dto/transition.dto";
import { transactionService } from "@/server/services/transaction.service";
import { getIdFromContext } from "@/server/utils/getIdFromContext";

export const PUT = async (req: Request, context: IContext) => {
  const body: ITransactionUpdateDTO = await req.json();
  const id: string = await getIdFromContext(context);

  const res = await transactionService.update(Number(id), body);

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};

export const DELETE = async (_: Request, context: IContext) => {
  const id: string = await getIdFromContext(context);

  const res = await transactionService.delete(Number(id));

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};
