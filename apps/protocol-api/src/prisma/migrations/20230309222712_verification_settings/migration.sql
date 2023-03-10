-- CreateTable
CREATE TABLE "VerificationSettings" (
    "id" SERIAL NOT NULL,
    "guild_id" INTEGER,
    "num_of_attestations" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationSettings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VerificationSettings" ADD CONSTRAINT "VerificationSettings_guild_id_fkey" FOREIGN KEY ("guild_id") REFERENCES "Guild"("id") ON DELETE SET NULL ON UPDATE CASCADE;
