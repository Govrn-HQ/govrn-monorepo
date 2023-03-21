/*
  Warnings:

  - You are about to drop the `VerificationSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VerificationSettings" DROP CONSTRAINT "VerificationSettings_guild_id_fkey";

-- DropTable
DROP TABLE "VerificationSettings";

-- CreateTable
CREATE TABLE "VerificationSetting" (
    "id" SERIAL NOT NULL,
    "guild_id" INTEGER,
    "num_of_attestations" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationSetting_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerificationSetting" ADD CONSTRAINT "VerificationSetting_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE SET NULL ON UPDATE CASCADE;
