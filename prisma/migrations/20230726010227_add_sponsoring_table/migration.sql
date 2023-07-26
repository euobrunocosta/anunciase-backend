-- CreateTable
CREATE TABLE "Sponsoring" (
    "id" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sponsoring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductToSponsoring" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToSponsoring" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSponsoring_AB_unique" ON "_ProductToSponsoring"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSponsoring_B_index" ON "_ProductToSponsoring"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToSponsoring_AB_unique" ON "_CategoryToSponsoring"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToSponsoring_B_index" ON "_CategoryToSponsoring"("B");

-- AddForeignKey
ALTER TABLE "Sponsoring" ADD CONSTRAINT "Sponsoring_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSponsoring" ADD CONSTRAINT "_ProductToSponsoring_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSponsoring" ADD CONSTRAINT "_ProductToSponsoring_B_fkey" FOREIGN KEY ("B") REFERENCES "Sponsoring"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSponsoring" ADD CONSTRAINT "_CategoryToSponsoring_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSponsoring" ADD CONSTRAINT "_CategoryToSponsoring_B_fkey" FOREIGN KEY ("B") REFERENCES "Sponsoring"("id") ON DELETE CASCADE ON UPDATE CASCADE;
