/*
  Warnings:

  - You are about to drop the column `threshold` on the `GuildContribution` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `GuildContribution` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GuildContribution" DROP COLUMN "threshold",
DROP COLUMN "verified",
ADD COLUMN     "verification_status_id" INTEGER;

-- CreateTable
CREATE TABLE "GuildContributionVerificationStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "attestation_threshold" INTEGER NOT NULL,

    CONSTRAINT "GuildContributionVerificationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildContributionVerificationStatus_name_key" ON "GuildContributionVerificationStatus"("name");

-- AddForeignKey
ALTER TABLE "GuildContribution" ADD CONSTRAINT "GuildContribution_verification_status_id_fkey" FOREIGN KEY ("verification_status_id") REFERENCES "GuildContributionVerificationStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
