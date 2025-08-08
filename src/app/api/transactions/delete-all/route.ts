import { transactionService } from "@/server/services/transaction.service";
import { getUser } from "@/server/utils/getUser";

export async function DELETE() {
  const userId = await getUser();
  if (!userId) return Response.json("Nao autorizado", { status: 401 });

  const { message, status, data } = await transactionService.deleteAll(userId);

  return Response.json({ message, data }, { status });
}
