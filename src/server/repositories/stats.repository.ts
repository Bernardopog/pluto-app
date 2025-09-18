import { prisma } from "@/lib/db";
import { IStats } from "@/interfaces/IStat";

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
