import { prisma } from "@/lib/db";

import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";
import { IVaultItemCreateDTO, IVaultItemUpdateDTO } from "../dto/vaultItem.dto";
import { IVaultItem } from "@/interfaces/IVault";
import { IResult } from "@/interfaces/IResult";

interface IVaultItemRepository {
  getAll(userId: number): Promise<IVaultItem[]>;
  create(data: IVaultItemCreateDTO, userId: number): Promise<IVaultItem>;
  update(
    id: number,
    data: IVaultItemUpdateDTO,
    userId: number
  ): Promise<IResult<IVaultItem>>;
  delete(id: number, userId: number): Promise<IResult<null>>;
}

export const vaultItemRepository: IVaultItemRepository = {
  getAll: async (userId) => {
    return prisma.vaultItem.findMany({
      where: { userId },
      orderBy: { id: "asc" },
    });
  },
  create: async (data, userId) => {
    return prisma.vaultItem.create({ data: { ...data, userId } });
  },
  update: async (id, data, userId) => {
    try {
      const res = await prisma.vaultItem.update({
        where: { id, userId },
        data,
      });
      return { success: true, status: 200, data: res };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Item not found" };
      } else {
        throw { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
  delete: async (id, userId) => {
    try {
      await prisma.vaultItem.delete({ where: { id, userId } });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Item not found" };
      } else {
        throw { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
};
