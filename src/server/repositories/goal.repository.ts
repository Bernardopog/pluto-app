import type { IGoal } from '@/interfaces/IGoal';
import { prisma } from '@/lib/db';
import type { IGoalCreateDTO } from '../dto/goal.dto';

interface IGoalRepository {
  get: (userId: number) => Promise<IGoal | null>;
  create: (data: IGoalCreateDTO, userId: number) => Promise<IGoal | null>;
  complete: (userId: number) => Promise<null>;
  cancel: (userId: number) => Promise<null>;
  reassign: (newAssignedId: number, userId: number) => Promise<IGoal>;
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
    if (found) throw new Error('Meta existente');

    const res = await prisma.goal.create({ data: { ...data, userId } });

    if (res)
      await prisma.stats.update({
        where: { userId },
        data: { totalGoals: { increment: 1 } },
      });

    return res;
  },
  complete: async (userId) => {
    const found = await checkFound(userId);
    if (!found) throw new Error('Meta não encontrada');

    await prisma.goal.delete({ where: { userId } });

    await prisma.stats.update({
      where: { userId },
      data: { completedGoals: { increment: 1 } },
    });

    return null;
  },
  cancel: async (userId) => {
    const found = await checkFound(userId);
    if (!found) throw new Error('Meta não encontrada');

    await prisma.goal.delete({ where: { userId } });

    await prisma.stats.update({
      where: { userId },
      data: { failedGoals: { increment: 1 } },
    });

    return null;
  },
  reassign: async (newVaultId, userId) => {
    const isValid = await prisma.goal.findUnique({ where: { userId } });
    if (isValid?.progress !== 'vault')
      throw new Error('Meta não possui um cofre');

    const found = await checkFound(userId);
    if (!found) throw new Error('Meta não encontrada');

    const res = await prisma.goal.update({
      where: { userId },
      data: { assignedVault: newVaultId },
    });
    return res;
  },
};
