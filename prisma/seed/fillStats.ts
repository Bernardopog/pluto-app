import { PrismaClient } from '../../src/generated/prisma/index.js';
export const prismaClientScript = new PrismaClient();

async function main() {
  const usersWithoutStats = await prismaClientScript.user.findMany({
    where: { stats: null },
    select: { id: true },
  });

  for (const user of usersWithoutStats) {
    await prismaClientScript.stats.create({
      data: {
        userId: user.id,
        totalGoals: 0,
        completedGoals: 0,
        failedGoals: 0,
      },
    });
  }
}

main()
  .then(() => {})
  .catch((_e) => {
    process.exit(1);
  })
  .finally(() => {
    prismaClientScript.$disconnect();
  });
