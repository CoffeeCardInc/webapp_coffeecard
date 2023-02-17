/*
  Warnings:

  - You are about to drop the column `Mobile` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Mobile",
ADD COLUMN     "mobile" TEXT;
