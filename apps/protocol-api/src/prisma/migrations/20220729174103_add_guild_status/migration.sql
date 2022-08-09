-- CreateEnum
CREATE TYPE "GuildStatus" AS ENUM ('INPUTTED', 'VALIDATED', 'ONBOARDED');

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "status" "GuildStatus" NOT NULL DEFAULT E'INPUTTED';
