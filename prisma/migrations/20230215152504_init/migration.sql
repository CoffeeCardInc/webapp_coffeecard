/*
  Warnings:

  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `membership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `modifier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pass` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shop` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "customer" DROP CONSTRAINT "customer_userId_fkey";

-- DropForeignKey
ALTER TABLE "membership" DROP CONSTRAINT "membership_pass_id_fkey";

-- DropForeignKey
ALTER TABLE "membership" DROP CONSTRAINT "membership_userId_fkey";

-- DropForeignKey
ALTER TABLE "pass" DROP CONSTRAINT "pass_shop_id_fkey";

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
