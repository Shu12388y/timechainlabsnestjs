/*
  Warnings:

  - Added the required column `userEmail` to the `TODO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TODO" ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TODO" ADD CONSTRAINT "TODO_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
