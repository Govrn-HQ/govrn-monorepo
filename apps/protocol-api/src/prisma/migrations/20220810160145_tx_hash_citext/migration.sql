-- Alter tx_hash Type.
ALTER TABLE "Contribution"
  ALTER COLUMN "tx_hash" SET DATA TYPE CITEXT USING tx_hash::citext;
