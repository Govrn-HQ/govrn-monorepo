-- CreateEnum
CREATE TYPE "ContributionPaymentType" AS ENUM ('TIP', 'REPORT');

-- CreateTable
CREATE TABLE "ContributionPayment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "contribution_id" INTEGER NOT NULL,
    "split_payment_id" INTEGER NOT NULL,
    "type" "ContributionPaymentType" NOT NULL,

    CONSTRAINT "ContributionPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContributionPayment_contribution_id_split_payment_id_key" ON "ContributionPayment"("contribution_id", "split_payment_id");

-- AddForeignKey
ALTER TABLE "ContributionPayment" ADD CONSTRAINT "ContributionPayment_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContributionPayment" ADD CONSTRAINT "ContributionPayment_split_payment_id_fkey" FOREIGN KEY ("split_payment_id") REFERENCES "SplitPayment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
