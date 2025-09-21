import { IContext } from "@/interfaces/IContext";
import { ITransactionUpdateDTO } from "@/server/dto/transition.dto";
import { transactionService } from "@/server/services/transaction.service";
import { getUser } from "@/server/utils/getUser";

export const PUT = async (req: Request, { params }: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: ITransactionUpdateDTO = await req.json();
  const id = (await params).id;

  const { message, status, data } = await transactionService.update(
    Number(id),
    body,
    userId
  );

  return Response.json({ message, data, status }, { status });
};

export const DELETE = async (_: Request, { params }: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const id = (await params).id;

  const { message, status, data } = await transactionService.delete(
    Number(id),
    userId
  );

  return Response.json({ message, data, status }, { status });
};
