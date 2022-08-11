-- enable citext extension
CREATE EXTENSION IF NOT EXISTS citext;

-- AlterTable
ALTER TABLE "User"
  ALTER COLUMN "address" SET DATA TYPE CITEXT USING address::citext;
