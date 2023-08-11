-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "tokenId" TEXT;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE SET NULL ON UPDATE CASCADE;
