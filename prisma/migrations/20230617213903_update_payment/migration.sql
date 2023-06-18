-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_cardId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "boleto" TEXT,
ALTER COLUMN "cardId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
