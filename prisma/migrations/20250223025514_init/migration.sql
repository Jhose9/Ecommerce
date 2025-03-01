-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" CHAR(70) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "details" TEXT[],
    "composition" TEXT[],

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
