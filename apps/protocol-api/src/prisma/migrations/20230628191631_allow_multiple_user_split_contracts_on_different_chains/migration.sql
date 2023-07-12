/*
  Warnings:

  - A unique constraint covering the columns `[chain_id,user_split_contract_id]` on the table `SplitContract` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserSplitContract_user_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "SplitContract_chain_id_user_split_contract_id_key" ON "SplitContract"("chain_id", "user_split_contract_id");
