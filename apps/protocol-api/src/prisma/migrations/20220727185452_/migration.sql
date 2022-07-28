-- DropForeignKey
ALTER TABLE "Attestation" DROP CONSTRAINT "Attestation_contribution_id_fkey";

-- DropForeignKey
ALTER TABLE "GuildContribution" DROP CONSTRAINT "GuildContribution_contribution_id_fkey";

-- DropForeignKey
ALTER TABLE "Partner" DROP CONSTRAINT "Partner_contribution_id_fkey";

-- AddForeignKey
ALTER TABLE "GuildContribution" ADD CONSTRAINT "GuildContribution_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
