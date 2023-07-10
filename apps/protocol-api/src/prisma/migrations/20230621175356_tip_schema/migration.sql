-- CreateTable
CREATE TABLE "UserSplitContract" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL,

    CONSTRAINT "UserSplitContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitContract" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chain_id" INTEGER NOT NULL,
    "address" CITEXT NOT NULL,
    "tx_hash" CITEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "user_split_contract_id" INTEGER,

    CONSTRAINT "SplitContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SplitPayment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "token_address" CITEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "tx_hash" CITEXT NOT NULL,
    "sender_address" CITEXT NOT NULL,
    "recipient_address" CITEXT NOT NULL,
    "sender_user_id" INTEGER,
    "split_contract_id" INTEGER NOT NULL,

    CONSTRAINT "SplitPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSplitContract_user_id_key" ON "UserSplitContract"("user_id");

-- AddForeignKey
ALTER TABLE "UserSplitContract" ADD CONSTRAINT "UserSplitContract_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SplitContract" ADD CONSTRAINT "SplitContract_chain_id_fkey" FOREIGN KEY ("chain_id") REFERENCES "Chain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SplitContract" ADD CONSTRAINT "SplitContract_user_split_contract_id_fkey" FOREIGN KEY ("user_split_contract_id") REFERENCES "UserSplitContract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SplitPayment" ADD CONSTRAINT "SplitPayment_sender_user_id_fkey" FOREIGN KEY ("sender_user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SplitPayment" ADD CONSTRAINT "SplitPayment_split_contract_id_fkey" FOREIGN KEY ("split_contract_id") REFERENCES "SplitContract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
