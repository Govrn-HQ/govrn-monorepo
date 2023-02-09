-- DropForeignKey
ALTER TABLE "DiscordUser" DROP CONSTRAINT "DiscordUser_user_id_fkey";

-- AlterTable
ALTER TABLE "DiscordUser" ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "active_token" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "DiscordUser" ADD CONSTRAINT "DiscordUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
