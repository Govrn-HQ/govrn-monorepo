/*
  Warnings:

  - You are about to drop the column `guild_id` on the `VerificationSetting` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "VerificationSetting" DROP CONSTRAINT "VerificationSetting_guild_id_fkey";

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "verification_setting_id" INTEGER;

-- AlterTable
ALTER TABLE "VerificationSetting" DROP COLUMN "guild_id";

-- AddForeignKey
ALTER TABLE "Guild" ADD CONSTRAINT "Guild_verification_setting_id_fkey" FOREIGN KEY ("verification_setting_id") REFERENCES "VerificationSetting"("id") ON DELETE SET NULL ON UPDATE CASCADE;
