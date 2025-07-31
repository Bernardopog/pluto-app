import { IBudgetCreateDTO } from "@/server/dto/budget.dto";
import { budgetService } from "@/server/services/budget.service";
import { getUser } from "@/server/utils/getUser";

export const GET = async () => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { message, status, data } = await budgetService.getAll(userId);

  return Response.json(
    { message, data },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    }
  );
};

export const POST = async (req: Request) => {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: IBudgetCreateDTO = await req.json();

  const { message, status, data } = await budgetService.create(body, userId);

  return Response.json({ message, data }, { status });
};
