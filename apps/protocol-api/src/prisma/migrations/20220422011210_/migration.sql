-- DropForeignKey
ALTER TABLE "LinearIssue" DROP CONSTRAINT "LinearIssue_contribution_id_fkey";

-- DropForeignKey
ALTER TABLE "LinearUser" DROP CONSTRAINT "LinearUser_user_id_fkey";

-- AlterTable
ALTER TABLE "LinearIssue" ALTER COLUMN "contribution_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "LinearUser" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearUser" ADD CONSTRAINT "LinearUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
