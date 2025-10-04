/*
  Warnings:

  - Added the required column `nestedcategoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "nestedcategoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_nestedcategoryId_fkey" FOREIGN KEY ("nestedcategoryId") REFERENCES "NestedCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
