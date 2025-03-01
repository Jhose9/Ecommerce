/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" CHAR(70) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "details" TEXT[],
    "composition" TEXT[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
