import { IFinance } from "@/interfaces/IFinance";
import { prisma } from "@/lib/db";

interface IFinanceRepository {
  get: (userId: number) => Promise<IFinance | null>;
  updateBalance: (userId: number, newValue: number) => Promise<IFinance | null>;
  updateIncome: (userId: number, newValue: number) => Promise<IFinance | null>;
}

export const financeRepository: IFinanceRepository = {
  get: async (userId) => {
    return await prisma.finance.findUnique({
      where: {
        userId,
      },
      omit: {
        userId: true,
      },
    });
  },
  updateBalance: async (userId, newValue) => {
    return await prisma.finance.update({
      where: {
        userId,
      },
      data: {
        balance: newValue,
      },
      omit: {
        userId: true,
      },
    });
  },
  updateIncome: async (userId, newValue) => {
    return await prisma.finance.update({
      where: {
        userId,
      },
      data: {
        income: newValue,
      },
      omit: {
        userId: true,
      },
    });
  },
};
