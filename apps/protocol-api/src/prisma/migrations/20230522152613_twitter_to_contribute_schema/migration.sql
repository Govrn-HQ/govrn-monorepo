/*
  Warnings:

  - A unique constraint covering the columns `[twitter_integration_id]` on the table `Guild` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "twitter_integration_id" INTEGER;

-- CreateTable
CREATE TABLE "GuildTwitterIntegration" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guild_id" INTEGER NOT NULL,
    "hashtag" TEXT NOT NULL,

    CONSTRAINT "GuildTwitterIntegration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildTwitterIntegration_guild_id_key" ON "GuildTwitterIntegration"("guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "GuildTwitterIntegration_hashtag_key" ON "GuildTwitterIntegration"("hashtag");

-- CreateIndex
CREATE UNIQUE INDEX "Guild_twitter_integration_id_key" ON "Guild"("twitter_integration_id");

-- AddForeignKey
ALTER TABLE "GuildTwitterIntegration" ADD CONSTRAINT "GuildTwitterIntegration_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
