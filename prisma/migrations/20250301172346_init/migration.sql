/*
  Warnings:

  - Added the required column `collection` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "collection" TEXT NOT NULL,
ADD COLUMN     "img" TEXT NOT NULL;
