import type { IStats } from '@/interfaces/IStat';
import { prisma } from '@/lib/db';

interface IStatsRepository {
  get: (reqUserId: number) => Promise<IStats | null>;
}

export const statsRepository: IStatsRepository = {
  get: async (reqUserId) => {
    const res = await prisma.stats.findUnique({
      where: { userId: reqUserId },
      omit: { userId: true },
    });
    if (!res) return null;
    return res;
  },
};
