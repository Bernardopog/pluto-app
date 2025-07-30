import { IBudgetCreateDTO } from "@/server/dto/budget.dto";
import { budgetService } from "@/server/services/budget.service";

export const GET = async () => {
  const list = await budgetService.getAll();
  return Response.json(list, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
};

export const POST = async (req: Request) => {
  const body: IBudgetCreateDTO = await req.json();

  const res = await budgetService.create(body);

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
};
