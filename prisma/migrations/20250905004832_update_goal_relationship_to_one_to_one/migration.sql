/*
  Warnings:

  - The primary key for the `Goal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Goal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Goal` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Goal" DROP CONSTRAINT "Goal_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "Goal_userId_key" ON "public"."Goal"("userId");
