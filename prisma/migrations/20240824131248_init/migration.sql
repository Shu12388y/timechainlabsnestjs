-- DropForeignKey
ALTER TABLE "TODO" DROP CONSTRAINT "TODO_userEmail_fkey";

-- AlterTable
ALTER TABLE "TODO" ALTER COLUMN "userEmail" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TODO" ADD CONSTRAINT "TODO_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
