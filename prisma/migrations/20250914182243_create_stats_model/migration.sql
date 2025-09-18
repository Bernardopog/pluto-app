-- CreateTable
CREATE TABLE "public"."Stats" (
    "userId" INTEGER NOT NULL,
    "completedGoals" INTEGER NOT NULL DEFAULT 0,
    "totalGoals" INTEGER NOT NULL DEFAULT 0,
    "failedGoals" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Stats_userId_key" ON "public"."Stats"("userId");

-- AddForeignKey
ALTER TABLE "public"."Stats" ADD CONSTRAINT "Stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
