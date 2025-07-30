import { budgetRepository } from "../repositories/budget.repository";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "../dto/budget.dto";
import { createMessage } from "../utils/message";
import { IMessage } from "@/interfaces/IMessage";
import { budgetSchema } from "../schema/budget.schema";
import { IBudget } from "@/interfaces/IBudget";
import { idValidator } from "../utils/idValidator";

interface IBudgetService {
  getAll: () => Promise<IBudget[]>;
  create: (data: IBudgetCreateDTO) => Promise<IMessage<IBudget | null>>;
  update: (
    id: number,
    data: IBudgetUpdateDTO
  ) => Promise<IMessage<IBudgetUpdateDTO | null>>;
  delete: (id: number) => Promise<IMessage<null>>;
  moveTxn: (fromId: number, toId: number) => Promise<IMessage<null>>;
}

const budgetValidate = (data: IBudgetCreateDTO | IBudgetUpdateDTO) =>
  budgetSchema.safeParse(data);

export const budgetService: IBudgetService = {
  getAll: async () => {
    return await budgetRepository.getAll();
  },
  create: async (data) => {
    const { success } = budgetValidate(data);

    if (!success) {
      return createMessage<null>("Erro ao criar orçamento", 400, null);
    }

    const res = await budgetRepository.create(data);

    return createMessage("Orçamento criado com sucesso", 201, res);
  },
  update: async (id, data): Promise<IMessage<IBudgetUpdateDTO | null>> => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar orçamento", 400, null);
    }

    const { success } = budgetValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar orçamento", 400, null);
    }

    const res = await budgetRepository.update(id, data);
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
  delete: async (id) => {
    if (id <= 0) {
      return createMessage("Erro ao excluir orçamento", 400, null);
    }
    const res = await budgetRepository.delete(id);

    if (res.success === false) {
      if (res.status === 404) {
        return createMessage("Orçamento nao encontrado", res.status, null);
      } else
        return createMessage("Erro ao atualizar orçamento", res.status, null);
    }

    return createMessage("Orçamento excluido com sucesso", res.status, null);
  },
  moveTxn: async (fromId, toId) => {
    const res = await budgetRepository.moveTxn(fromId, toId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Orçamentos não encontrados", res.status, null);
      } else
        return createMessage("Erro ao atualizar orçamentos", res.status, null);
    }

    return createMessage("Transação movida com sucesso", res.status, null);
  },
};
