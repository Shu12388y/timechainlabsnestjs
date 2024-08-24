-- CreateEnum
CREATE TYPE "TODOSTATUS" AS ENUM ('DONE', 'ACTIVE');

-- CreateTable
CREATE TABLE "TODO" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "description" TEXT,
    "status" "TODOSTATUS" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TODO_pkey" PRIMARY KEY ("id")
);
