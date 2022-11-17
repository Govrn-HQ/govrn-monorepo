-- DropForeignKey
ALTER TABLE "Attestation" DROP CONSTRAINT "Attestation_confidence_id_fkey";

-- AlterTable
ALTER TABLE "Attestation" ALTER COLUMN "confidence_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_confidence_id_fkey" FOREIGN KEY ("confidence_id") REFERENCES "AttestationConfidence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
