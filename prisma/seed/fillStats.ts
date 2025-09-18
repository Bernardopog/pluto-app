import { PrismaClient } from "../../src/generated/prisma/index.js";
export const prismaClientScript = new PrismaClient();

async function main() {
  const usersWithoutStats = await prismaClientScript.user.findMany({
    where: { stats: null },
    select: { id: true },
  });

  console.log(
    `\nUsuários sem Stats: (${
      usersWithoutStats.length > 0
        ? `\x1b[31m${usersWithoutStats.length}\x1b[0m`
        : `\x1b[32m${usersWithoutStats.length}\x1b[0m`
    })`
  );

  for (const user of usersWithoutStats) {
    await prismaClientScript.stats.create({
      data: {
        userId: user.id,
        totalGoals: 0,
        completedGoals: 0,
        failedGoals: 0,
      },
    });
    console.log(
      `Stats criado com sucesso para (\x1b[33mUser\x1b[0m) de id: ${user.id}`
    );
  }
}

main()
  .then(() => {
    console.log("Script (\x1b[33mfillStats\x1b[0m) finalizado com sucesso\n");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prismaClientScript.$disconnect();
  });
