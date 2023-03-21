/*
  Warnings:

  - You are about to drop the column `attestationThreshold` on the `GuildContributionVerificationStatus` table. All the data in the column will be lost.
  - Added the required column `attestation_threshold` to the `GuildContributionVerificationStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuildContributionVerificationStatus" DROP COLUMN "attestationThreshold",
ADD COLUMN     "attestation_threshold" INTEGER NOT NULL;
