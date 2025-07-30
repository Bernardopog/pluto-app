import { prisma } from "@/lib/db";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "../dto/budget.dto";
import { IBudget } from "@/interfaces/IBudget";
import { IResult } from "@/interfaces/IResult";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

interface IBudgetRepository {
  getAll: () => Promise<IBudget[]>;
  create: (data: IBudgetCreateDTO) => Promise<IBudget>;
  update: (id: number, data: IBudgetUpdateDTO) => Promise<IResult<IBudget>>;
  delete: (id: number) => Promise<IResult<null>>;
  moveTxn: (fromId: number, toId: number) => Promise<IResult<null>>;
}

export const budgetRepository: IBudgetRepository = {
  getAll: async () => {
    return await prisma.budget.findMany();
  },
  create: async (data) => {
    return await prisma.budget.create({ data });
  },
  update: async (id, data) => {
    try {
      const res = await prisma.budget.update({ where: { id }, data });
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
  delete: async (id) => {
    try {
      await prisma.transaction.deleteMany({ where: { categoryId: id } });
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
  moveTxn: async (fromId, toId) => {
    try {
      await prisma.transaction.updateMany({
        where: { categoryId: fromId },
        data: { categoryId: toId },
      });
      await prisma.budget.delete({ where: { id: fromId } });
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
