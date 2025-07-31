import { budgetRepository } from "../repositories/budget.repository";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "../dto/budget.dto";
import { createMessage } from "../utils/message";
import { IMessage } from "@/interfaces/IMessage";
import { budgetSchema } from "../schema/budget.schema";
import { IBudget } from "@/interfaces/IBudget";
import { idValidator } from "../utils/idValidator";

interface IBudgetService {
  getAll: (userId: number) => Promise<IMessage<IBudget[]>>;
  create: (
    data: IBudgetCreateDTO,
    userId: number
  ) => Promise<IMessage<IBudget | null>>;
  update: (
    id: number,
    data: IBudgetUpdateDTO,
    userId: number
  ) => Promise<IMessage<IBudgetUpdateDTO | null>>;
  delete: (id: number, userId: number) => Promise<IMessage<null>>;
  moveTxn: (
    fromId: number,
    toId: number,
    userId: number
  ) => Promise<IMessage<null>>;
}

const budgetValidate = (data: IBudgetCreateDTO | IBudgetUpdateDTO) =>
  budgetSchema.safeParse(data);

export const budgetService: IBudgetService = {
  getAll: async (userId) => {
    const res = await budgetRepository.getAll(userId);
    const message = createMessage("Orçamentos obtidos com sucesso", 200, res);

    return message;
  },
  create: async (data, userId) => {
    const { success } = budgetValidate(data);
    if (!success) {
      return createMessage<null>("Erro ao criar orçamento", 400, null);
    }

    const res = await budgetRepository.create(data, userId);

    return createMessage("Orçamento criado com sucesso", 201, res);
  },
  update: async (
    id,
    data,
    userId
  ): Promise<IMessage<IBudgetUpdateDTO | null>> => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar orçamento", 400, null);
    }

    const { success } = budgetValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar orçamento", 400, null);
    }

    const res = await budgetRepository.update(id, data, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Orçamento nao encontrado", res.status, null);
      } else
        return createMessage("Erro ao atualizar orçamento", res.status, null);
    }

    return createMessage(
      "Orçamento atualizado com sucesso",
      res.status,
      res.data
    );
  },
  delete: async (id, userId) => {
    if (id <= 0) {
      return createMessage("Erro ao excluir orçamento", 400, null);
    }
    const res = await budgetRepository.delete(id, userId);

    if (res.success === false) {
      if (res.status === 404) {
        return createMessage("Orçamento nao encontrado", res.status, null);
      } else
        return createMessage("Erro ao atualizar orçamento", res.status, null);
    }

    return createMessage("Orçamento excluido com sucesso", res.status, null);
  },
  moveTxn: async (fromId, toId, userId) => {
    const res = await budgetRepository.moveTxn(fromId, toId, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Orçamentos não encontrados", res.status, null);
      } else
        return createMessage("Erro ao atualizar orçamentos", res.status, null);
    }

    return createMessage("Transação movida com sucesso", res.status, null);
  },
};
