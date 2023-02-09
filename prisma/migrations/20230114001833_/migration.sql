/*
  Warnings:

  - You are about to drop the column `is_shop` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `membership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `modifier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shop` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sessionToken]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Made the column `sessionToken` on table `Session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `expires` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "customer" DROP CONSTRAINT "customer_userId_fkey";

-- DropForeignKey
ALTER TABLE "membership" DROP CONSTRAINT "membership_pass_id_fkey";

-- DropForeignKey
ALTER TABLE "membership" DROP CONSTRAINT "membership_userId_fkey";

-- DropForeignKey
ALTER TABLE "pass" DROP CONSTRAINT "pass_shop_id_fkey";

-- DropIndex
DROP INDEX "Session_userId_key";

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "sessionToken" SET NOT NULL,
ALTER COLUMN "expires" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_shop";

-- DropTable
DROP TABLE "customer";

-- DropTable
DROP TABLE "member";

-- DropTable
DROP TABLE "membership";

-- DropTable
DROP TABLE "menu";

-- DropTable
DROP TABLE "modifier";

-- DropTable
DROP TABLE "pass";

-- DropTable
DROP TABLE "shop";

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
