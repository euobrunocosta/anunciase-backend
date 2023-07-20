/*
  Warnings:

  - You are about to drop the column `customName` on the `Link` table. All the data in the column will be lost.
  - Added the required column `customTitle` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" DROP COLUMN "customName",
ADD COLUMN     "customTitle" TEXT NOT NULL;
