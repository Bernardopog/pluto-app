import { transactionService } from "@/server/services/transaction.service";
import { getUser } from "@/server/utils/getUser";

export async function POST(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });
  const body: number[] = await req.json();

  const { message, status, data } = await transactionService.deleteMany(
    body,
    userId
  );

  return Response.json({ message, data, status }, { status });
}
