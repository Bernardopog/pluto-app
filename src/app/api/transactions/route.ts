import { ITransactionCreateDTO } from "@/server/dto/transition.dto";
import { transactionService } from "@/server/services/transaction.service";

export const GET = async () => {
  const list = await transactionService.getAll();
  return Response.json(list, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
};

export const POST = async (req: Request) => {
  const body: ITransactionCreateDTO = await req.json();

  const res = await transactionService.create(body);

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};
