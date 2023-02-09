/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Session` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Session_sessionToken_key";

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "sessionToken" DROP NOT NULL,
ALTER COLUMN "expires" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_shop" SMALLINT NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "full_name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "passowrd" VARCHAR(255) NOT NULL,
    "date_of_birth" VARCHAR(255) NOT NULL,
    "language" VARCHAR(255),
    "city" VARCHAR(255),
    "membership_status" VARCHAR(255),
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modifier" TIMESTAMPTZ(6),
    "last_login" TIMESTAMPTZ(6),
    "userId" TEXT NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "shop_id" INTEGER,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "membership" (
    "userId" TEXT NOT NULL,
    "creation_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subscribed_on" TIMESTAMP(6) NOT NULL,
    "active" SMALLINT NOT NULL DEFAULT 0,
    "total_redemptions" INTEGER NOT NULL,
    "remaining_redemptions" INTEGER NOT NULL,
    "refill_frequency" INTEGER,
    "last_refill" TIMESTAMPTZ(6),
    "last_modifiered" TIMESTAMPTZ(6),
    "membership_id" SERIAL NOT NULL,
    "pass_id" INTEGER,

    CONSTRAINT "membership_pkey" PRIMARY KEY ("membership_id")
);

-- CreateTable
CREATE TABLE "menu" (
    "menu_id" SERIAL NOT NULL,
    "shop_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" TIMESTAMPTZ(6),
    "modifier_1" INTEGER,
    "modifier_2" INTEGER,
    "modifier_3" INTEGER,
    "modifier_4" INTEGER,
    "modifier_5" INTEGER,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("menu_id")
);

-- CreateTable
CREATE TABLE "modifier" (
    "modifier_id" SERIAL NOT NULL,
    "shop_id" INTEGER,
    "menu_id" INTEGER,
    "name" VARCHAR,
    "type" VARCHAR,
    "class" VARCHAR,
    "description" TEXT,
    "ingredients" TEXT,
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modifiered" TIMESTAMPTZ(6),

    CONSTRAINT "modifier_pkey" PRIMARY KEY ("modifier_id")
);

-- CreateTable
CREATE TABLE "pass" (
    "pass_id" SERIAL NOT NULL,
    "shop_id" INTEGER NOT NULL,
    "pass_name" INTEGER NOT NULL,
    "pass_description" TEXT,
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" TIMESTAMPTZ(6),
    "active" SMALLINT NOT NULL DEFAULT 0,
    "pass_base_price" DOUBLE PRECISION,
    "pass_base_price_frequency" INTEGER,
    "pass_payment_method" INTEGER,
    "pass_additional_pricing" INTEGER,
    "pass_other_options" INTEGER,
    "pass_currency" VARCHAR,
    "perk_item_1" INTEGER,
    "perk_item_2" INTEGER,
    "perk_item_3" INTEGER,
    "perk_item_4" INTEGER,
    "perk_item_5" INTEGER,
    "perk_item_6" INTEGER,
    "perk_item_7" INTEGER,
    "perk_item_8" INTEGER,
    "perk_item_9" INTEGER,
    "perk_item_10" INTEGER,
    "perk_item_11" INTEGER,
    "perk_item_12" INTEGER,
    "custom_perk_item_1" INTEGER,
    "custom_perk_item_2" INTEGER,
    "custom_perk_item_3" INTEGER,
    "custom_perk_item_4" INTEGER,
    "custom_perk_item_5" INTEGER,
    "custom_perk_item_6" INTEGER,
    "custom_perk_item_1_price" DOUBLE PRECISION,
    "custom_perk_item_2_price" DOUBLE PRECISION,
    "custom_perk_item_3_price" DOUBLE PRECISION,
    "custom_perk_item_4_price" DOUBLE PRECISION,
    "custom_perk_item_5_price" DOUBLE PRECISION,
    "custom_perk_item_6_price" DOUBLE PRECISION,
    "visible" INTEGER,
    "requirement_1" SMALLINT,
    "requirement_2" SMALLINT,
    "requirement_3" SMALLINT,
    "requirement_4" SMALLINT,
    "requirement_5" SMALLINT,
    "requirement_6" SMALLINT,
    "requirement_7" SMALLINT,
    "requirement_8" SMALLINT,
    "requirement_9" SMALLINT,

    CONSTRAINT "pass_pkey" PRIMARY KEY ("pass_id")
);

-- CreateTable
CREATE TABLE "shop" (
    "shop_id" SERIAL NOT NULL,
    "shop_name" VARCHAR(100),
    "shop_description" TEXT,
    "shop_address" TEXT,
    "shop_phone_number" VARCHAR(20),
    "shop_email" VARCHAR(255),
    "shop_owner_name" VARCHAR(100),
    "created_on" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_modified" TIMESTAMPTZ(6),
    "availability_1" INTEGER[],
    "availability_2" INTEGER[],
    "availability_3" INTEGER[],
    "availability_4" INTEGER[],
    "availability_5" INTEGER[],
    "availability_6" INTEGER[],
    "availability_7" INTEGER[],
    "active" SMALLINT,
    "shop_fee" DOUBLE PRECISION,
    "shop_pay_frquency" INTEGER,
    "shop_pay_date" TIMESTAMPTZ(6),

    CONSTRAINT "shop_pkey" PRIMARY KEY ("shop_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_userId_key" ON "customer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_userId_key" ON "Session"("userId");

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership" ADD CONSTRAINT "membership_pass_id_fkey" FOREIGN KEY ("pass_id") REFERENCES "pass"("pass_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership" ADD CONSTRAINT "membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pass" ADD CONSTRAINT "pass_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "shop"("shop_id") ON DELETE RESTRICT ON UPDATE CASCADE;
