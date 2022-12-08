/*
  Warnings:

  - Added the required column `verification_status_id` to the `Guild` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "GuildVerificationStatus"
(
  "id"        SERIAL       NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "name"      TEXT         NOT NULL,

  CONSTRAINT "GuildVerificationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildVerificationStatus_name_key" ON "GuildVerificationStatus" ("name");

INSERT INTO "GuildVerificationStatus" (name)
VALUES ('Pending'),
       ('Verified')
ON CONFLICT DO NOTHING;

SELECT id
From "GuildVerificationStatus"
WHERE name = 'Pending';

CREATE OR REPLACE FUNCTION pending_id() RETURNS int
  LANGUAGE SQL AS
$$
SELECT id
From "GuildVerificationStatus"
WHERE name = 'Pending';
$$;

-- AlterTable
ALTER TABLE "Guild"
  ADD COLUMN "verification_status_id" INTEGER NOT NULL default pending_id();

-- AddForeignKey
ALTER TABLE "Guild"
  ADD CONSTRAINT "Guild_verification_status_id_fkey" FOREIGN KEY ("verification_status_id") REFERENCES "GuildVerificationStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Guild"
  ALTER COLUMN "verification_status_id" DROP DEFAULT;

