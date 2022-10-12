/*
  Warnings:

  - A unique constraint covering the columns `[chain_id,on_chain_id]` on the table `Contribution` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Contribution_on_chain_id_key";

-- AlterTable
ALTER TABLE "Contribution" ADD COLUMN     "chain_id" INTEGER;

-- CreateTable
CREATE TABLE "Chain" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "chain_id" TEXT NOT NULL,

    CONSTRAINT "Chain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chain_name_key" ON "Chain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Chain_chain_id_key" ON "Chain"("chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_chain_id_on_chain_id_key" ON "Contribution"("chain_id", "on_chain_id");

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "Chain"("id") ON DELETE SET NULL ON UPDATE CASCADE;
