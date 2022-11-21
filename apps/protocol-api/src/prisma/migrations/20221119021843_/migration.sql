-- AlterTable
ALTER TABLE "Attestation" ADD COLUMN     "attestation_status_id" INTEGER;

-- CreateTable
CREATE TABLE "AttestationStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "AttestationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttestationStatus_name_key" ON "AttestationStatus"("name");

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_attestation_status_id_fkey" FOREIGN KEY ("attestation_status_id") REFERENCES "AttestationStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
