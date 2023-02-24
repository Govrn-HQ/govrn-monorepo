/*
  Warnings:

  - Made the column `membership_status_id` on table `GuildUser` required. This step will fail if there are existing NULL values in that column.

*/
-- Fill missing data
UPDATE "GuildUser"
SET membership_status_id = (
    SELECT id FROM "GuildMembershipStatus" WHERE name = 'Member'
)
WHERE membership_status_id IS NULL;


-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_membership_status_id_fkey";

-- AlterTable
ALTER TABLE "GuildUser" ALTER COLUMN "membership_status_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_membership_status_id_fkey" FOREIGN KEY ("membership_status_id") REFERENCES "GuildMembershipStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
