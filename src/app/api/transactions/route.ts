import { ITransactionCreateDTO } from "@/server/dto/transition.dto";
import { transactionService } from "@/server/services/transaction.service";
import { getUser } from "@/server/utils/getUser";

export const GET = async () => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const res = await transactionService.getAll(userId);
  return Response.json(
    { message: res.message, data: res.data },
    {
      status: res.status,
      headers: { "Cache-Control": "no-store" },
    }
  );
};

export const POST = async (req: Request) => {
  const body: ITransactionCreateDTO = await req.json();
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { message, status, data } = await transactionService.create(
    body,
    userId
  );

  return Response.json({ message, data, status }, { status });
};
