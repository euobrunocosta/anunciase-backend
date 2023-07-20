/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_categoryId_fkey";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "_CategoryToStore" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToStore_AB_unique" ON "_CategoryToStore"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToStore_B_index" ON "_CategoryToStore"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToStore" ADD CONSTRAINT "_CategoryToStore_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToStore" ADD CONSTRAINT "_CategoryToStore_B_fkey" FOREIGN KEY ("B") REFERENCES "Store"("id") ON DELETE CASCADE ON UPDATE CASCADE;
