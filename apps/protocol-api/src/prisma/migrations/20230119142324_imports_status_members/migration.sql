/*
  Warnings:

  - Added the required column `import_status_id` to the `GuildImport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GuildImport" ADD COLUMN     "import_status_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "GuildUser" ADD COLUMN     "guild_import_id" INTEGER;

-- CreateTable
CREATE TABLE "GuildImportStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "GuildImportStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildImportStatus_name_key" ON "GuildImportStatus"("name");

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guild_import_id_fkey" FOREIGN KEY ("guild_import_id") REFERENCES "GuildImport"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildImport" ADD CONSTRAINT "GuildImport_import_status_id_fkey" FOREIGN KEY ("import_status_id") REFERENCES "GuildImportStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
