/*
  Warnings:

  - You are about to drop the column `enable_attribution_notification_period` on the `DiscordUser` table. All the data in the column will be lost.
  - You are about to drop the column `enable_mint_notification_period` on the `DiscordUser` table. All the data in the column will be lost.
  - You are about to drop the column `enable_new_guild_notification_period` on the `DiscordUser` table. All the data in the column will be lost.
  - You are about to drop the column `enable_submit_reminder_period` on the `DiscordUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DiscordUser" DROP COLUMN "enable_attribution_notification_period",
DROP COLUMN "enable_mint_notification_period",
DROP COLUMN "enable_new_guild_notification_period",
DROP COLUMN "enable_submit_reminder_period",
ADD COLUMN     "enable_attribution_notification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_mint_notification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_new_guild_notification" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enable_submit_reminder" BOOLEAN NOT NULL DEFAULT false;
