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
  getAll: () => Promise<ITransaction[]>;
  create: (
    data: ITransactionCreateDTO
  ) => Promise<IMessage<ITransaction | null>>;
  update: (
    id: number,
    data: ITransactionUpdateDTO
  ) => Promise<IMessage<ITransaction | null>>;
  delete: (id: number) => Promise<IMessage<null>>;
}

const txnValidate = (data: ITransactionCreateDTO | ITransactionUpdateDTO) =>
  transactionSchema.safeParse(data);

export const transactionService: ITransanctionService = {
  getAll: async () => {
    return await transactionRepository.getAll();
  },
  create: async (data) => {
    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage("Erro ao criar transação", 400, null);
    }

    const res = await transactionRepository.create(transformedData);

    return createMessage("Transação criada com sucesso", 201, res);
  },
  update: async (id, data) => {
    if (!idValidator(id)) {
      return createMessage("Erro ao atualizar transação", 418, null);
    }

    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage("Erro ao atualizar transação", 418, null);
    }

    const res = await transactionRepository.update(id, transformedData);
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
  delete: async (id) => {
    if (id <= 0) {
      return createMessage("Erro ao excluir transação", 400, null);
    }
    const res = await transactionRepository.delete(id);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage("Transação não encontrada", res.status, null);
      } else
        return createMessage("Erro ao deletar transação", res.status, null);
    }

    return createMessage("Transação excluida com sucesso", res.status, null);
  },
};
