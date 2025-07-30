import { prisma } from "@/lib/db";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "../dto/transition.dto";
import { ITransaction } from "@/interfaces/ITransaction";
import { IResult } from "@/interfaces/IResult";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

interface ITransactionRepository {
  getAll: () => Promise<ITransaction[]>;
  create: (data: ITransactionCreateDTO) => Promise<ITransaction>;
  update: (
    id: number,
    data: ITransactionUpdateDTO
  ) => Promise<IResult<ITransaction>>;
  delete: (id: number) => Promise<IResult<null>>;
}

export const transactionRepository: ITransactionRepository = {
  getAll: async () => {
    return await prisma.transaction.findMany();
  },
  create: async (data) => {
    return await prisma.transaction.create({ data });
  },
  update: async (id, data) => {
    try {
      const res = await prisma.transaction.update({ where: { id }, data });
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
  delete: async (id) => {
    try {
      await prisma.transaction.delete({ where: { id } });
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
};
