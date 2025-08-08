/*
  Warnings:

  - Changed the type of `icon` on the `Vault` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."VaultIcons" AS ENUM ('plane', 'piggy', 'car');

-- AlterTable
ALTER TABLE "public"."Vault" DROP COLUMN "icon",
ADD COLUMN     "icon" "public"."VaultIcons" NOT NULL;
