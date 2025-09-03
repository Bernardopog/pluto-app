import { IGoal } from "@/interfaces/IGoal";
import { IMessage } from "@/interfaces/IMessage";
import { createMessage } from "../utils/message";
import { goalRepository } from "../repositories/goal.repository";
import { IGoalCreateDTO } from "../dto/goal.dto";
import { goalSchema } from "../schema/goal.schema";

interface IGoalService {
  getAll: (userId: number) => Promise<IMessage<IGoal[]>>;
  create: (
    data: IGoalCreateDTO,
    userId: number
  ) => Promise<IMessage<IGoal | null>>;
}

const goalValidate = (data: IGoalCreateDTO) => goalSchema.safeParse(data);

export const goalService: IGoalService = {
  getAll: async (userId) => {
    const res = await goalRepository.getAll(userId);
    return createMessage("Metas obtidas com sucesso", 200, res);
  },
  create: async (data, userId) => {
    const { success } = goalValidate(data);
    if (!success) return createMessage("Erro ao criar meta", 400, null);

    const res = await goalRepository.create(data, userId);
    return createMessage("Meta criada com sucesso", 201, res);
  },
};
