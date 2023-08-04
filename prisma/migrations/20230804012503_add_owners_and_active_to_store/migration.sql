-- AlterTable
ALTER TABLE "Store" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "owners" TEXT;
