-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_membership_status_id_fkey";

-- AlterTable
ALTER TABLE "DiscordUser" ADD COLUMN     "attribution_notification_period_min" INTEGER NOT NULL DEFAULT 10080,
ADD COLUMN     "enable_attribution_notification_period" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_mint_notification_period" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_new_guild_notification_period" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_notifications" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_submit_reminder_period" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mint_notification_period_min" INTEGER NOT NULL DEFAULT 10080,
ADD COLUMN     "new_guild_notification_period_min" INTEGER NOT NULL DEFAULT 10080,
ADD COLUMN     "submit_reminder_period_min" INTEGER NOT NULL DEFAULT 10080;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_membership_status_id_fkey" FOREIGN KEY ("membership_status_id") REFERENCES "GuildMembershipStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
