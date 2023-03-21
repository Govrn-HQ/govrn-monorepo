/*
  Warnings:

  - You are about to drop the column `attestation_threshold` on the `GuildContributionVerificationStatus` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `GuildContributionVerificationStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GuildContribution" ADD COLUMN     "attestation_threshold" INTEGER,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "GuildContributionVerificationStatus" DROP COLUMN "attestation_threshold",
DROP COLUMN "verified";
