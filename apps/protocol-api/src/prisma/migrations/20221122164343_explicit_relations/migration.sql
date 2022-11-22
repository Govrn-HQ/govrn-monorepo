/*
  Warnings:

  - You are about to drop the column `contribution_id` on the `TwitterTweet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TwitterTweet" DROP CONSTRAINT "TwitterTweet_contribution_id_fkey";

-- DropIndex
DROP INDEX "TwitterAccount_guild_id_key";

-- DropIndex
DROP INDEX "TwitterTweet_contribution_id_key";

-- DropIndex
DROP INDEX "TwitterUser_user_id_key";

-- AlterTable
ALTER TABLE "TwitterTweet" DROP COLUMN "contribution_id",
ADD COLUMN     "twitter_tweet_contribution_ids" INTEGER[];

-- CreateTable
CREATE TABLE "TwitterTweetContribution" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "twitter_tweet_id" INTEGER NOT NULL,
    "contribution_id" INTEGER NOT NULL,

    CONSTRAINT "TwitterTweetContribution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TwitterTweetContribution" ADD CONSTRAINT "TwitterTweetContribution_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterTweetContribution" ADD CONSTRAINT "TwitterTweetContribution_twitter_tweet_id_fkey" FOREIGN KEY ("twitter_tweet_id") REFERENCES "TwitterTweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
