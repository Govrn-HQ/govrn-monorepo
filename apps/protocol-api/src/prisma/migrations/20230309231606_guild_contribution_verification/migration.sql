-- AlterTable
ALTER TABLE "GuildContribution" ADD COLUMN     "threshold" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
