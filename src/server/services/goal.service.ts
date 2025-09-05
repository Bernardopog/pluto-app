import { IGoal } from "@/interfaces/IGoal";
import { IMessage } from "@/interfaces/IMessage";
import { createMessage } from "../utils/message";
import { goalRepository } from "../repositories/goal.repository";
import { IGoalCreateDTO, IGoalUpdateDTO } from "../dto/goal.dto";
import { goalReassignSchema, goalSchema } from "../schema/goal.schema";

interface IGoalService {
  get: (userId: number) => Promise<IMessage<IGoal | null>>;
  create: (
    data: IGoalCreateDTO,
    userId: number
  ) => Promise<IMessage<IGoal | null>>;
  complete: (userId: number) => Promise<IMessage<null>>;
  cancel: (userId: number) => Promise<IMessage<null>>;
  reassign: (
    newVaultId: IGoalUpdateDTO,
    userId: number
  ) => Promise<IMessage<IGoal | null>>;
}

const goalValidate = (
  data: IGoalCreateDTO | IGoalUpdateDTO,
  actionType: "create" | "reassign"
) => {
  if (actionType === "create") return goalSchema.safeParse(data);
  else return goalReassignSchema.safeParse(data);
};

export const goalService: IGoalService = {
  get: async (userId) => {
    const res = await goalRepository.get(userId);
    if (!res) {
      return createMessage("Meta não encontrada", 404, null);
    }
    return createMessage("Meta obtidas com sucesso", 200, res);
  },
  create: async (data, userId) => {
    const { success } = goalValidate(data, "create");
    if (!success) return createMessage("Erro ao criar meta", 400, null);

    try {
      const res = await goalRepository.create(data, userId);
      return createMessage("Meta criada com sucesso", 201, res);
    } catch (err) {
      const error = err as Error;
      return createMessage(error.message, 400, null);
    }
  },
  complete: async (userId) => {
    try {
      await goalRepository.complete(userId);
      return createMessage("Meta concluida com sucesso", 200, null);
    } catch (err) {
      const error = err as Error;
      return createMessage(error.message, 404, null);
    }
  },
  cancel: async (userId) => {
    try {
      await goalRepository.cancel(userId);
      return createMessage("Meta cancelada com sucesso", 200, null);
    } catch (err) {
      const error = err as Error;
      return createMessage(error.message, 404, null);
    }
  },
  reassign: async (newVaultId, userId) => {
    const { success } = goalValidate(newVaultId, "reassign");
    if (!success) return createMessage("Erro ao reatribuir meta", 400, null);

    try {
      const res = await goalRepository.reassign(
        newVaultId.assignedVault,
        userId
      );
      return createMessage("Meta reatribuida com sucesso", 200, res);
    } catch (err) {
      const error = err as Error;
      let status: number;
      if (error.message === "Meta não encontrada") {
        status = 404;
      } else {
        status = 400;
      }
      return createMessage(error.message, status, null);
    }
  },
};
