-- DropForeignKey
ALTER TABLE "LinearIssue" DROP CONSTRAINT "LinearIssue_project_id_fkey";

-- AlterTable
ALTER TABLE "LinearIssue" ALTER COLUMN "project_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "LinearProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
