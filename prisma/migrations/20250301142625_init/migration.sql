/*
  Warnings:

  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "size" AS ENUM ('xs', 's', 'm', 'l', 'xl', 'xxl');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "sizes" "size"[];
