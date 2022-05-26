-- AlterTable
ALTER TABLE "ActivityType" ADD COLUMN     "default" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "LinearIssue" ALTER COLUMN "linear_id" DROP NOT NULL;
