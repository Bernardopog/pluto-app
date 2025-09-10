import { IMessage } from "@/interfaces/IMessage";
import { financeRepository } from "../repositories/finance.repository";
import { IFinance } from "@/interfaces/IFinance";
import { createMessage } from "../utils/message";

interface IFinanceService {
  get: (userId: number) => Promise<IMessage<IFinance | null>>;
  updateBalance: (
    userId: number,
    newValue: number
  ) => Promise<IMessage<IFinance | null>>;
  updateIncome: (
    userId: number,
    newValue: number
  ) => Promise<IMessage<IFinance | null>>;
}

export const financeService: IFinanceService = {
  get: async (userId) => {
    const res = await financeRepository.get(userId);
    return createMessage("Finanças obtidas com sucesso", 200, res);
  },
  updateBalance: async (userId, newValue) => {
    const res = await financeRepository.updateBalance(userId, newValue);
    if (!res) return createMessage("Finança não encontrada", 404, null);

    return createMessage("Finanças atualizadas com sucesso", 200, res);
  },
  updateIncome: async (userId, newValue) => {
    const res = await financeRepository.updateIncome(userId, newValue);
    if (!res) return createMessage("Finança não encontrada", 404, null);

    return createMessage("Finanças criadas com sucesso", 200, res);
  },
};
