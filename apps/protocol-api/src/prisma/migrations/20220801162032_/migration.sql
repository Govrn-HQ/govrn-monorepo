/*
  Warnings:

  - A unique constraint covering the columns `[tx_hash]` on the table `Contribution` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Contribution" ADD COLUMN     "tx_hash" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_tx_hash_key" ON "Contribution"("tx_hash");
