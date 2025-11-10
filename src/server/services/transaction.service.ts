import type { IMessage } from '@/interfaces/IMessage';
import type { ITransaction } from '@/interfaces/ITransaction';
import { decimalToInt, intToDecimal } from '@/server/utils/convertMoney';
import type {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from '../dto/transition.dto';
import { transactionRepository } from '../repositories/transaction.repository';
import { transactionSchema } from '../schema/transaction.schema';
import { idValidator } from '../utils/idValidator';
import { createMessage } from '../utils/message';

interface ITransanctionService {
  getAll: (userId: number) => Promise<IMessage<ITransaction[]>>;
  create: (
    data: ITransactionCreateDTO,
    userId: number,
  ) => Promise<IMessage<ITransaction | null>>;
  update: (
    id: number,
    data: ITransactionUpdateDTO,
    userId: number,
  ) => Promise<IMessage<ITransaction | null>>;
  delete: (id: number, userId: number) => Promise<IMessage<null>>;
  deleteMany: (ids: number[], userId: number) => Promise<IMessage<null>>;
  deleteAll: (userId: number) => Promise<IMessage<null>>;
}

const txnValidate = (data: ITransactionCreateDTO | ITransactionUpdateDTO) =>
  transactionSchema.safeParse(data);

const toPersistence = (
  data: ITransactionCreateDTO | ITransactionUpdateDTO,
) => ({
  ...data,
  value: decimalToInt(data.value),
});

const toResponse = (data: ITransaction) => ({
  ...data,
  value: intToDecimal(data.value),
});

export const transactionService: ITransanctionService = {
  getAll: async (userId) => {
    const res = await transactionRepository.getAll(userId);

    const formattedRes = res.map((txn) => toResponse(txn));

    return createMessage('Transações obtidas com sucesso', 200, formattedRes);
  },
  create: async (data, userId) => {
    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage('Erro ao criar transação', 400, null);
    }

    const finalData = toPersistence(transformedData);

    const res = await transactionRepository.create(finalData, userId);

    const returnData = toResponse(res);

    return createMessage('Transação criada com sucesso', 201, returnData);
  },
  update: async (id, data, userId) => {
    if (!idValidator(id)) {
      return createMessage('Erro ao atualizar transação', 418, null);
    }

    const { success, data: transformedData } = txnValidate(data);

    if (!success) {
      return createMessage('Erro ao atualizar transação', 418, null);
    }

    const finalData = toPersistence(transformedData);

    const res = await transactionRepository.update(id, finalData, userId);
    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Transação não encontrada', res.status, null);
      } else
        return createMessage('Erro ao atualizar transação', res.status, null);
    }

    const returnData = toResponse(res.data as ITransaction);

    return createMessage(
      'Transação atualizada com sucesso',
      res.status,
      returnData,
    );
  },
  delete: async (id, userId) => {
    if (id <= 0) {
      return createMessage('Erro ao excluir transação', 400, null);
    }
    const res = await transactionRepository.delete(id, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Transação não encontrada', res.status, null);
      } else
        return createMessage('Erro ao deletar transação', res.status, null);
    }

    return createMessage('Transação excluida com sucesso', res.status, null);
  },
  deleteMany: async (ids, userId) => {
    const res = await transactionRepository.deleteMany(ids, userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Transações nao encontradas', res.status, null);
      } else
        return createMessage('Erro ao deletar transações', res.status, null);
    }

    return createMessage('Transações excluidas com sucesso', res.status, null);
  },
  deleteAll: async (userId) => {
    const res = await transactionRepository.deleteAll(userId);

    if (!res.success) {
      if (res.status === 404) {
        return createMessage('Transações nao encontradas', res.status, null);
      } else
        return createMessage('Erro ao deletar transações', res.status, null);
    }

    return createMessage('Transações excluidas com sucesso', res.status, null);
  },
};
