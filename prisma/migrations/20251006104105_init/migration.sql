-- CreateTable
CREATE TABLE "MyCart" (
    "id" SERIAL NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "MyCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MyCart" ADD CONSTRAINT "MyCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
