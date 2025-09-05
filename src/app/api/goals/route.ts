import { IMessage } from "@/interfaces/IMessage";
import { IGoalCreateDTO } from "@/server/dto/goal.dto";
import { goalService } from "@/server/services/goal.service";
import { getUser } from "@/server/utils/getUser";

export async function GET() {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });

  const { message, status, data } = await goalService.get(userId);
  return Response.json({ message, data }, { status });
}

export async function POST(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const body: IGoalCreateDTO = await req.json();

  const { message, status, data } = await goalService.create(body, userId);
  return Response.json({ message, data }, { status });
}

export async function DELETE(req: Request) {
  const userId = await getUser();
  if (!userId) return Response.json("Não autorizado", { status: 401 });
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  let res: IMessage<null> = { message: "", status: 200, data: null };

  if (action === "complete") {
    const resMessage = await goalService.complete(userId);
    res = resMessage;
  } else {
    const resMessage = await goalService.cancel(userId);
    res = resMessage;
  }

  return Response.json(
    { message: res.message, data: res.data },
    { status: res.status }
  );
}
