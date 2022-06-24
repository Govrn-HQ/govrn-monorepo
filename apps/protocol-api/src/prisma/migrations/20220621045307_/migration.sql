/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `TwitterUser` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TwitterUser" ALTER COLUMN "twitter_user_id" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_username_key" ON "TwitterUser"("username");
