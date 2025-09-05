import { IGoal } from "@/interfaces/IGoal";
import { prisma } from "@/lib/db";
import { IGoalCreateDTO } from "../dto/goal.dto";

interface IGoalRepository {
  get: (userId: number) => Promise<IGoal | null>;
  create: (data: IGoalCreateDTO, userId: number) => Promise<IGoal | null>;
  complete: (userId: number) => Promise<null>;
  cancel: (userId: number) => Promise<null>;
}

const checkFound = async (userId: number) => {
  const res = await prisma.goal.findUnique({ where: { userId } });
  if (!res) return null;
  return res;
};

export const goalRepository: IGoalRepository = {
  get: async (userId) => {
    const res = await prisma.goal.findUnique({ where: { userId } });
    if (!res) return null;
    return res;
  },
  create: async (data, userId) => {
    const found = await checkFound(userId);
    if (found) throw new Error("Meta existente");
    const res = await prisma.goal.create({ data: { ...data, userId } });
    return res;
  },
  complete: async (userId) => {
    const found = await checkFound(userId);
    if (!found) throw new Error("Meta nao encontrada");
    await prisma.goal.delete({ where: { userId } });
    return null;
  },
  cancel: async (userId) => {
    const found = await checkFound(userId);
    if (!found) throw new Error("Meta nao encontrada");
    await prisma.goal.delete({ where: { userId } });
    return null;
  },
};
