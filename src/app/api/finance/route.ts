import { IFinance } from "@/interfaces/IFinance";
import { IMessage } from "@/interfaces/IMessage";
import { financeService } from "@/server/services/finance.service";
import { getUser } from "@/server/utils/getUser";

export async function GET() {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { message, status, data } = await financeService.get(userId);

  return Response.json({ message, data }, { status });
}

export async function PATCH(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  const body = await req.json();

  let res: IMessage<IFinance | null> = { message: "", status: 200, data: null };

  if (action === "balance")
    res = await financeService.updateBalance(userId, body.value);
  else if (action === "income")
    res = await financeService.updateIncome(userId, body.value);
  else {
    res = { message: "Ação inválida", status: 400, data: null };
    return Response.json(
      { message: res.message, data: res.data },
      { status: res.status }
    );
  }

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
}
