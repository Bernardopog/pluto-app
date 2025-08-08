import { IResult } from "@/interfaces/IResult";
import { IVault } from "@/interfaces/IVault";
import { IVaultCreateDTO, IVaultUpdateDTO } from "../dto/vault.dto";
import { prisma } from "@/lib/db";
import { PrismaClientKnownRequestError } from "@/generated/prisma/runtime/library";

interface IVaultRepository {
  getAll: (userId: number) => Promise<IVault[]>;
  create: (data: IVaultCreateDTO, userId: number) => Promise<IVault>;
  update: (
    id: number,
    data: IVaultUpdateDTO,
    userId: number
  ) => Promise<IResult<IVault>>;
  delete: (id: number, userId: number) => Promise<IResult<null>>;
}

export const vaultRepository: IVaultRepository = {
  getAll: async (userId) => {
    return await prisma.vault.findMany({
      where: { userId },
      include: { items: true },
    });
  },
  create: async (data, userId) => {
    return await prisma.vault.create({ data: { ...data, userId } });
  },
  update: async (id, data, userId) => {
    try {
      const res = await prisma.vault.update({
        where: { id, userId },
        data,
      });
      return { success: true, status: 200, data: res };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Vault not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
  delete: async (id, userId) => {
    try {
      await prisma.vault.delete({ where: { id, userId } });
      return { success: true, status: 200, data: null };
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2025"
      ) {
        return { success: false, status: 404, error: "Vault not found" };
      } else {
        return { success: false, status: 400, error: "Unknown error" };
      }
    }
  },
};
