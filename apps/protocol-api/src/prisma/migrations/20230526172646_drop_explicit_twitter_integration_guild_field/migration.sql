/*
  Warnings:

  - You are about to drop the column `twitter_integration_id` on the `Guild` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Guild_twitter_integration_id_key";

-- AlterTable
ALTER TABLE "Guild" DROP COLUMN "twitter_integration_id";
