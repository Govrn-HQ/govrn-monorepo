/*
  Warnings:

  - You are about to drop the `LinearJobRun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LinearJobRun";

-- CreateTable
CREATE TABLE "JobRun" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedDate" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "JobRun_pkey" PRIMARY KEY ("id")
);
