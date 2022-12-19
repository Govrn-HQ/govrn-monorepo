-- CreateTable
CREATE TABLE "IntegrationType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "IntegrationType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildImport" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authentication_token" INTEGER NOT NULL,
    "guild_id" INTEGER NOT NULL,
    "integration_type_id" INTEGER NOT NULL,

    CONSTRAINT "GuildImport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IntegrationType_name_key" ON "IntegrationType"("name");

-- AddForeignKey
ALTER TABLE "GuildImport" ADD CONSTRAINT "GuildImport_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildImport" ADD CONSTRAINT "GuildImport_integration_type_id_fkey" FOREIGN KEY ("integration_type_id") REFERENCES "IntegrationType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
