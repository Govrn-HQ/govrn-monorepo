/*
  Warnings:

  - A unique constraint covering the columns `[user_id,guild_id,membership_status_id]` on the table `GuildUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membership_status_id` to the `GuildUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "GuildUser_user_id_guild_id_key";

INSERT INTO "GuildMembershipStatus" (name)
VALUES ('Supporter')
ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION supporter_id() RETURNS int
  LANGUAGE SQL AS
$$
SELECT id
From "GuildMembershipStatus"
WHERE name = 'Supporter';
$$;


-- AlterTable
ALTER TABLE "GuildUser" ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "membership_status_id" INTEGER NOT NULL default supporter_id();

-- CreateIndex
CREATE UNIQUE INDEX "GuildUser_user_id_guild_id_membership_status_id_key" ON "GuildUser"("user_id", "guild_id", "membership_status_id");

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_membership_status_id_fkey" FOREIGN KEY ("membership_status_id") REFERENCES "GuildMembershipStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "GuildUser"
  ALTER COLUMN "membership_status_id" DROP DEFAULT;
