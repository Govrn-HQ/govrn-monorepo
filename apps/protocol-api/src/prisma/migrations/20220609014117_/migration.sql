-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "display_name" TEXT,
    "address" TEXT NOT NULL,
    "chain_type_id" INTEGER NOT NULL,
    "full_name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "display_name" TEXT,
    "discord_id" BIGINT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "DiscordUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guild" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discord_id" BIGINT,
    "name" TEXT,
    "congrats_channel" INTEGER,
    "logo" TEXT,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "guild_id" INTEGER NOT NULL,

    CONSTRAINT "GuildUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildContribution" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guild_id" INTEGER NOT NULL,
    "contribution_id" INTEGER NOT NULL,

    CONSTRAINT "GuildContribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guild_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "GuildActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChainType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "ChainType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contribution" (
    "id" SERIAL NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "date_of_submission" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_of_engagement" TIMESTAMP(3) NOT NULL,
    "details" TEXT,
    "proof" TEXT,
    "on_chain_id" INTEGER,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "contribution_id" INTEGER NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attestation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confidence_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "contribution_id" INTEGER NOT NULL,
    "date_of_attestation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attestation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttestationConfidence" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "AttestationConfidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContributionStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "ContributionStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "default" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserActivity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_activity_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "CategoryActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryActivity" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearIssue" (
    "id" SERIAL NOT NULL,
    "archivedAt" TIMESTAMP(3),
    "autoArchivedAt" TIMESTAMP(3),
    "autoClosedAt" TIMESTAMP(3),
    "boardOrder" INTEGER,
    "branchName" TEXT,
    "canceledAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "customerTickerCount" INTEGER,
    "description" TEXT,
    "dueDate" TIMESTAMP(3),
    "estimate" DOUBLE PRECISION,
    "linear_id" TEXT,
    "identifier" TEXT,
    "priority" INTEGER,
    "priorityLabel" TEXT,
    "snoozedUntilAt" TIMESTAMP(3),
    "sortOrder" DOUBLE PRECISION,
    "startedAt" TIMESTAMP(3),
    "subIssueSortOrder" DOUBLE PRECISION,
    "title" TEXT,
    "trashed" BOOLEAN,
    "updatedAt" TIMESTAMP(3),
    "url" TEXT,
    "assignee_id" INTEGER,
    "creator_id" INTEGER,
    "cycle_id" INTEGER,
    "project_id" INTEGER,
    "team_id" INTEGER,
    "contribution_id" INTEGER,

    CONSTRAINT "LinearIssue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearUser" (
    "id" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3),
    "displayName" TEXT,
    "email" TEXT,
    "linear_id" TEXT NOT NULL,
    "name" TEXT,
    "url" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "LinearUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearCycle" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "linear_id" TEXT NOT NULL,

    CONSTRAINT "LinearCycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearProject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "linear_id" TEXT NOT NULL,

    CONSTRAINT "LinearProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearTeam" (
    "id" SERIAL NOT NULL,
    "linear_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "LinearTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobRun" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedDate" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "JobRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TwitterUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "twitter_user_id" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "DiscordUser_discord_id_key" ON "DiscordUser"("discord_id");

-- CreateIndex
CREATE UNIQUE INDEX "Guild_discord_id_key" ON "Guild"("discord_id");

-- CreateIndex
CREATE UNIQUE INDEX "GuildUser_user_id_guild_id_key" ON "GuildUser"("user_id", "guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "GuildContribution_guild_id_contribution_id_key" ON "GuildContribution"("guild_id", "contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "GuildActivityType_guild_id_activity_type_id_key" ON "GuildActivityType"("guild_id", "activity_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "ChainType_name_key" ON "ChainType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_on_chain_id_key" ON "Contribution"("on_chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_user_id_contribution_id_key" ON "Partner"("user_id", "contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "Attestation_user_id_contribution_id_key" ON "Attestation"("user_id", "contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "AttestationConfidence_name_key" ON "AttestationConfidence"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContributionStatus_name_key" ON "ContributionStatus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityType_name_key" ON "ActivityType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserActivity_user_id_activity_type_id_key" ON "UserActivity"("user_id", "activity_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryActivityType_category_activity_id_activity_type_id_key" ON "CategoryActivityType"("category_activity_id", "activity_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryActivity_name_key" ON "CategoryActivity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LinearIssue_linear_id_key" ON "LinearIssue"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearIssue_contribution_id_key" ON "LinearIssue"("contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearUser_linear_id_key" ON "LinearUser"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearCycle_linear_id_key" ON "LinearCycle"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearProject_linear_id_key" ON "LinearProject"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearTeam_linear_id_key" ON "LinearTeam"("linear_id");

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
ALTER TABLE "User" ADD CONSTRAINT "User_chain_type_id_fkey" FOREIGN KEY ("chain_type_id") REFERENCES "ChainType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordUser" ADD CONSTRAINT "DiscordUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildContribution" ADD CONSTRAINT "GuildContribution_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildContribution" ADD CONSTRAINT "GuildContribution_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildActivityType" ADD CONSTRAINT "GuildActivityType_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildActivityType" ADD CONSTRAINT "GuildActivityType_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ContributionStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_confidence_id_fkey" FOREIGN KEY ("confidence_id") REFERENCES "AttestationConfidence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryActivityType" ADD CONSTRAINT "CategoryActivityType_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryActivityType" ADD CONSTRAINT "CategoryActivityType_category_activity_id_fkey" FOREIGN KEY ("category_activity_id") REFERENCES "CategoryActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "LinearUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "LinearUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "LinearCycle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "LinearProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "LinearTeam"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearUser" ADD CONSTRAINT "LinearUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterUser" ADD CONSTRAINT "TwitterUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterTweet" ADD CONSTRAINT "TwitterTweet_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterTweet" ADD CONSTRAINT "TwitterTweet_twitter_user_id_fkey" FOREIGN KEY ("twitter_user_id") REFERENCES "TwitterUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TwitterAccount" ADD CONSTRAINT "TwitterAccount_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE SET NULL ON UPDATE CASCADE;
