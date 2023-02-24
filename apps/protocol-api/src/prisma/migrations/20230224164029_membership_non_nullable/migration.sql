-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_membership_status_id_fkey";

-- AlterTable
ALTER TABLE "GuildUser" ALTER COLUMN "membership_status_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_membership_status_id_fkey" FOREIGN KEY ("membership_status_id") REFERENCES "GuildMembershipStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
