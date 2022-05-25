-- AlterTable
ALTER TABLE "LinearIssue" ALTER COLUMN "linear_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "twitter_user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "TwitterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterTweet" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "twitter_tweet_id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "twitter_user_id" INTEGER,
    "contribution_id" INTEGER,

    CONSTRAINT "TwitterTweet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterAccount" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_name" TEXT NOT NULL,
    "guild_id" INTEGER,

    CONSTRAINT "TwitterAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_twitter_user_id_key" ON "TwitterUser"("twitter_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterUser_user_id_key" ON "TwitterUser"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterTweet_twitter_tweet_id_key" ON "TwitterTweet"("twitter_tweet_id");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterTweet_contribution_id_key" ON "TwitterTweet"("contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterAccount_account_name_key" ON "TwitterAccount"("account_name");

-- CreateIndex
CREATE UNIQUE INDEX "TwitterAccount_guild_id_key" ON "TwitterAccount"("guild_id");

-- AddForeignKey
ALTER TABLE "TwitterUser" ADD CONSTRAINT "TwitterUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterTweet" ADD CONSTRAINT "TwitterTweet_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterTweet" ADD CONSTRAINT "TwitterTweet_twitter_user_id_fkey" FOREIGN KEY ("twitter_user_id") REFERENCES "TwitterUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterAccount" ADD CONSTRAINT "TwitterAccount_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE SET NULL ON UPDATE CASCADE;
