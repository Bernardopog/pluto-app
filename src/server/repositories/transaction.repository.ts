import { prisma } from "@/lib/db";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "../dto/transition.dto";
import { ITransaction } from "@/interfaces/ITransaction";
import { IResult } from "@/interfaces/IResult";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

interface ITransactionRepository {
  getAll: (userId: number) => Promise<ITransaction[]>;
  create: (
    data: ITransactionCreateDTO,
    userId: number
  ) => Promise<ITransaction>;
  update: (
    id: number,
    data: ITransactionUpdateDTO,
    userId: number
  ) => Promise<IResult<ITransaction>>;
  delete: (id: number, userId: number) => Promise<IResult<null>>;
  deleteMany: (ids: number[], userId: number) => Promise<IResult<null>>;
  deleteAll: (userId: number) => Promise<IResult<null>>;
}

export const transactionRepository: ITransactionRepository = {
  getAll: async (userId) => {
    return await prisma.transaction.findMany({
      where: { userId },
      orderBy: [{ date: "desc" }, { id: "asc" }],
    });
  },
  create: async (data, userId) => {
    return await prisma.transaction.create({ data: { ...data, userId } });
  },
  update: async (id, data, userId) => {
    try {
      const res = await prisma.transaction.update({
        where: { id, userId },
        data,
      });
      return { success: true, status: 200, data: res };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Transaction not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
  delete: async (id, userId) => {
    try {
      await prisma.transaction.delete({ where: { id, userId } });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Transaction not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
  deleteMany: async (ids, userId) => {
    try {
      await prisma.transaction.deleteMany({
        where: { id: { in: ids }, userId },
      });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Transaction not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
  deleteAll: async (userId) => {
    try {
      await prisma.transaction.deleteMany({ where: { userId } });
      return { success: true, status: 200, data: null };
    } catch {
      return { success: false, status: 400, error: "Unknown error" };
    }
  },
};
