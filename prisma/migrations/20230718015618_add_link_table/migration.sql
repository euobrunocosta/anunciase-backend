/*
  Warnings:

  - You are about to drop the column `map` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Store` table. All the data in the column will be lost.
  - You are about to drop the column `whatsapp` on the `Store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "map";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "instagram",
DROP COLUMN "phone",
DROP COLUMN "whatsapp";

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "customName" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
