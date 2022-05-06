/*
  Warnings:

  - You are about to drop the column `category_activity_id` on the `ActivityType` table. All the data in the column will be lost.
  - You are about to drop the column `pritorityLabel` on the `LinearIssue` table. All the data in the column will be lost.
  - You are about to drop the column `dispaly_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActivityType" DROP CONSTRAINT "ActivityType_category_activity_id_fkey";

-- AlterTable
ALTER TABLE "ActivityType" DROP COLUMN "category_activity_id";

-- AlterTable
ALTER TABLE "Contribution" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "LinearIssue" DROP COLUMN "pritorityLabel",
ADD COLUMN     "priorityLabel" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "dispaly_name",
ADD COLUMN     "display_name" TEXT;

-- CreateTable
CREATE TABLE "GuildUser" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "guild_id" INTEGER NOT NULL,

    CONSTRAINT "GuildUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryActivityType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category_activity_id" INTEGER NOT NULL,
    "activity_type_id" INTEGER NOT NULL,

    CONSTRAINT "CategoryActivityType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildUser_user_id_guild_id_key" ON "GuildUser"("user_id", "guild_id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryActivityType_category_activity_id_activity_type_id_key" ON "CategoryActivityType"("category_activity_id", "activity_type_id");

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryActivityType" ADD CONSTRAINT "CategoryActivityType_activity_type_id_fkey" FOREIGN KEY ("activity_type_id") REFERENCES "ActivityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryActivityType" ADD CONSTRAINT "CategoryActivityType_category_activity_id_fkey" FOREIGN KEY ("category_activity_id") REFERENCES "CategoryActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
