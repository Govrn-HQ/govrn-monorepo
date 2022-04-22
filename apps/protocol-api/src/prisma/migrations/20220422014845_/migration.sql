-- DropForeignKey
ALTER TABLE "LinearIssue" DROP CONSTRAINT "LinearIssue_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "LinearIssue" DROP CONSTRAINT "LinearIssue_cycle_id_fkey";

-- DropForeignKey
ALTER TABLE "LinearIssue" DROP CONSTRAINT "LinearIssue_team_id_fkey";

-- AlterTable
ALTER TABLE "LinearIssue" ALTER COLUMN "creator_id" DROP NOT NULL,
ALTER COLUMN "cycle_id" DROP NOT NULL,
ALTER COLUMN "team_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "LinearUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "LinearCycle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "LinearTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;
