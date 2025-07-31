import { ITransaction } from "@/interfaces/ITransaction";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "../dto/transition.dto";
import { transactionRepository } from "../repositories/transaction.repository";
import { IMessage } from "@/interfaces/IMessage";
import { createMessage } from "../utils/message";
import { transactionSchema } from "../schema/transaction.schema";
import { idValidator } from "../utils/idValidator";

interface ITransanctionService {
  getAll: (userId: number) => Promise<IMessage<ITransaction[]>>;
  create: (
    data: ITransactionCreateDTO,
    userId: number
  ) => Promise<IMessage<ITransaction | null>>;
  update: (
    id: number,
    data: ITransactionUpdateDTO,
    userId: number
  ) => Promise<IMessage<ITransaction | null>>;
  delete: (id: number, userId: number) => Promise<IMessage<null>>;
}

const txnValidate = (data: ITransactionCreateDTO | ITransactionUpdateDTO) =>
  transactionSchema.safeParse(data);

export const transactionService: ITransanctionService = {
  getAll: async (userId) => {
    const res = await transactionRepository.getAll(userId);
    return createMessage("Transações obtidas com sucesso", 200, res);
  },
  create: async (data, userId) => {
    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage("Erro ao criar transação", 400, null);
    }

    const res = await transactionRepository.create(transformedData, userId);

    return createMessage("Transação criada com sucesso", 201, res);
  },
  update: async (id, data, userId) => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar transação", 418, null);
    }

    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar transação", 418, null);
    }

    const res = await transactionRepository.update(id, transformedData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Transação não encontrada", res.status, null);
      } else
        return createMessage("Erro ao atualizar transação", res.status, null);
    }

    return createMessage(
      "Transação atualizada com sucesso",
      res.status,
      res.data
    );
  },
  delete: async (id, userId) => {
    if (id <= 0) {
      return createMessage("Erro ao excluir transação", 400, null);
    }
    const res = await transactionRepository.delete(id, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Transação não encontrada", res.status, null);
      } else
        return createMessage("Erro ao deletar transação", res.status, null);
    }

    return createMessage("Transação excluida com sucesso", res.status, null);
  },
};
