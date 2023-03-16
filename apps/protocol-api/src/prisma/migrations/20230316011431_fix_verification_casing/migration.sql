/*
  Warnings:

  - You are about to drop the column `attestation_threshold` on the `GuildContributionVerificationStatus` table. All the data in the column will be lost.
  - Added the required column `attestationThreshold` to the `GuildContributionVerificationStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuildContributionVerificationStatus" DROP COLUMN "attestation_threshold",
ADD COLUMN     "attestationThreshold" INTEGER NOT NULL;
