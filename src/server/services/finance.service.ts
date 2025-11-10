import type { IFinance } from '@/interfaces/IFinance';
import type { IMessage } from '@/interfaces/IMessage';
import { decimalToInt, intToDecimal } from '@/server/utils/convertMoney';
import { financeRepository } from '../repositories/finance.repository';
import { createMessage } from '../utils/message';

interface IFinanceService {
  get: (userId: number) => Promise<IMessage<IFinance | null>>;
  updateBalance: (
    userId: number,
    newValue: number,
  ) => Promise<IMessage<IFinance | null>>;
  updateIncome: (
    userId: number,
    newValue: number,
  ) => Promise<IMessage<IFinance | null>>;
}

const toResponse = (data: IFinance) => ({
  balance: intToDecimal(data.balance),
  income: intToDecimal(data.income),
});

export const financeService: IFinanceService = {
  get: async (userId) => {
    const res = await financeRepository.get(userId);

    const returnData = res ? toResponse(res) : null;

    return createMessage('Finanças obtidas com sucesso', 200, returnData);
  },
  updateBalance: async (userId, newValue) => {
    const finalData = decimalToInt(newValue);

    const res = await financeRepository.updateBalance(userId, finalData);
    if (!res) return createMessage('Finança não encontrada', 404, null);

    const returnData = toResponse(res);

    return createMessage('Finanças atualizadas com sucesso', 200, returnData);
  },
  updateIncome: async (userId, newValue) => {
    const finalData = decimalToInt(newValue);

    const res = await financeRepository.updateIncome(userId, finalData);
    if (!res) return createMessage('Finança não encontrada', 404, null);

    const returnData = toResponse(res);

    return createMessage('Finanças criadas com sucesso', 200, returnData);
  },
};
