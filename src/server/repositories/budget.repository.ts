import { prisma } from "@/lib/db";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "../dto/budget.dto";
import { IBudget } from "@/interfaces/IBudget";
import { IResult } from "@/interfaces/IResult";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

interface IBudgetRepository {
  getAll: (userId: number) => Promise<IBudget[]>;
  create: (data: IBudgetCreateDTO, userId: number) => Promise<IBudget>;
  update: (
    id: number,
    data: IBudgetUpdateDTO,
    userId: number
  ) => Promise<IResult<IBudget>>;
  delete: (id: number, userId: number) => Promise<IResult<null>>;
  moveTxn: (
    fromId: number,
    toId: number,
    userId: number
  ) => Promise<IResult<null>>;
}

export const budgetRepository: IBudgetRepository = {
  getAll: async (userId) => {
    const res = await prisma.budget.findMany({ where: { userId } });
    return res;
  },
  create: async (data, userId) => {
    return await prisma.budget.create({ data: { ...data, userId } });
  },
  update: async (id, data, userId) => {
    try {
      const res = await prisma.budget.update({ where: { id, userId }, data });
      return { success: true, status: 200, data: res };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Budget not found" };
      }
      return { success: false, status: 400, error: "Unknown error" };
    }
  },
  delete: async (id, userId) => {
    try {
      await prisma.transaction.deleteMany({
        where: { categoryId: id, userId },
      });
      await prisma.budget.delete({ where: { id } });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404 };
      }
      return { success: false, status: 400 };
    }
  },
  moveTxn: async (fromId, toId, userId) => {
    try {
      await prisma.transaction.updateMany({
        where: { categoryId: fromId, userId },
        data: { categoryId: toId },
      });
      await prisma.budget.delete({ where: { id: fromId, userId } });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Budget not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
};
