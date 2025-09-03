import { IGoal } from "@/interfaces/IGoal";
import { prisma } from "@/lib/db";
import { IGoalCreateDTO } from "../dto/goal.dto";

interface IGoalRepository {
  getAll: (userId: number) => Promise<IGoal[]>;
  create: (data: IGoalCreateDTO, userId: number) => Promise<IGoal>;
}

export const goalRepository: IGoalRepository = {
  getAll: async (userId) => {
    const res = await prisma.goal.findMany({ where: { userId } });
    return res;
  },
  create: async (data, userId) => {
    const res = await prisma.goal.create({ data: { ...data, userId } });
    return res;
  },
};
