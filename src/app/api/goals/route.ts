import { IGoalCreateDTO } from "@/server/dto/goal.dto";
import { goalService } from "@/server/services/goal.service";
import { getUser } from "@/server/utils/getUser";

export async function GET() {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { message, status, data } = await goalService.getAll(userId);
  return Response.json({ message, data }, { status });
}

export async function POST(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: IGoalCreateDTO = await req.json();

  const { message, status, data } = await goalService.create(body, userId);
  return Response.json({ message, data }, { status });
}
