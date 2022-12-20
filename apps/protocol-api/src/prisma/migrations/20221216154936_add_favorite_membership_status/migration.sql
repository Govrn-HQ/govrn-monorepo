-- AlterTable
ALTER TABLE "GuildUser" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "membership_status_id" INTEGER;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_membership_status_id_fkey" FOREIGN KEY ("membership_status_id") REFERENCES "GuildMembershipStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
