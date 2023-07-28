/*
  Warnings:

  - You are about to drop the column `citiId` on the `Address` table. All the data in the column will be lost.
  - Made the column `cityId` on table `Address` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_citiId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "citiId",
ALTER COLUMN "cityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
