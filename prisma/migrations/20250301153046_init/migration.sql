/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('xs', 's', 'm', 'l', 'xl', 'xxl');

-- DropIndex
DROP INDEX "User_password_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
ADD COLUMN     "number" BIGINT NOT NULL;

-- DropTable
DROP TABLE "products";

-- DropEnum
DROP TYPE "size";

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" CHAR(70) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "sizes" "Size"[],
    "details" TEXT[],
    "composition" TEXT[],

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "productsId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
