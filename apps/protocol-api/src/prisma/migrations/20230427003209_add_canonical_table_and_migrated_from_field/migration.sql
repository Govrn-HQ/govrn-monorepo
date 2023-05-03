-- AlterTable
ALTER TABLE "GuildActivityType" ADD COLUMN     "migrated_from_id" INTEGER;

-- CreateTable
CREATE TABLE "CanonicalGuildActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "guild_id" INTEGER NOT NULL,
    "guild_activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "CanonicalGuildActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CanonicalGuildActivityType_name_key" ON "CanonicalGuildActivityType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CanonicalGuildActivityType_guild_activity_type_id_key" ON "CanonicalGuildActivityType"("guild_activity_type_id");

-- AddForeignKey
ALTER TABLE "GuildActivityType" ADD CONSTRAINT "GuildActivityType_migrated_from_id_fkey" FOREIGN KEY ("migrated_from_id") REFERENCES "ActivityType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanonicalGuildActivityType" ADD CONSTRAINT "CanonicalGuildActivityType_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CanonicalGuildActivityType" ADD CONSTRAINT "CanonicalGuildActivityType_guild_activity_type_id_fkey" FOREIGN KEY ("guild_activity_type_id") REFERENCES "GuildActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
