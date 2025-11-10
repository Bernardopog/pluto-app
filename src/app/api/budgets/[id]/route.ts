import type { IContext } from '@/interfaces/IContext';
import type { IBudgetUpdateDTO } from '@/server/dto/budget.dto';
import { budgetService } from '@/server/services/budget.service';
import { getUser } from '@/server/utils/getUser';

export const PUT = async (req: Request, { params }: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json('Não autorizado', { status: 401 });
  const body: IBudgetUpdateDTO = await req.json();
  const id = (await params).id;

  const { message, status, data } = await budgetService.update(
    Number(id),
    body,
    userId,
  );

  return Response.json({ message, data, status }, { status });
};

export const DELETE = async (_: Request, { params }: IContext) => {
  const userId = await getUser();
  if (!userId) return Response.json('Não autorizado', { status: 401 });
  const id = (await params).id;

  const { message, status, data } = await budgetService.delete(
    Number(id),
    userId,
  );

  return Response.json({ message, data, status }, { status });
};
