/*
  Warnings:

  - You are about to drop the column `twitter_tweet_id` on the `TwitterTweet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[twitter_tweet_url]` on the table `TwitterTweet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `twitter_tweet_url` to the `TwitterTweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "TwitterTweet_twitter_tweet_id_key";

-- AlterTable
ALTER TABLE "TwitterTweet" DROP COLUMN "twitter_tweet_id",
ADD COLUMN     "twitter_tweet_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TwitterTweet_twitter_tweet_url_key" ON "TwitterTweet"("twitter_tweet_url");
