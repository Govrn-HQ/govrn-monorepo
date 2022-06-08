-- CreateTable
CREATE TABLE "GuildActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guild_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "GuildActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildActivityType_guild_id_activity_type_id_key" ON "GuildActivityType"("guild_id", "activity_type_id");

-- AddForeignKey
ALTER TABLE "GuildActivityType" ADD CONSTRAINT "GuildActivityType_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildActivityType" ADD CONSTRAINT "GuildActivityType_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
