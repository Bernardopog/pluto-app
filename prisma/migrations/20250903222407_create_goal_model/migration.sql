-- CreateEnum
CREATE TYPE "public"."GoalProgress" AS ENUM ('balance', 'vault');

-- CreateTable
CREATE TABLE "public"."Goal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "targetAmount" INTEGER NOT NULL,
    "deadline" TIMESTAMP(3),
    "progress" "public"."GoalProgress" NOT NULL,
    "assignedVault" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
