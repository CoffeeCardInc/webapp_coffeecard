/*
  Warnings:

  - Made the column `pass_id` on table `membership` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "membership" DROP CONSTRAINT "membership_pass_id_fkey";

-- AlterTable
ALTER TABLE "membership" ALTER COLUMN "creation_on" DROP NOT NULL,
ALTER COLUMN "subscribed_on" DROP NOT NULL,
ALTER COLUMN "active" DROP NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "total_redemptions" DROP NOT NULL,
ALTER COLUMN "remaining_redemptions" DROP NOT NULL,
ALTER COLUMN "pass_id" SET NOT NULL,
ALTER COLUMN "activated" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "membership" ADD CONSTRAINT "membership_pass_id_fkey" FOREIGN KEY ("pass_id") REFERENCES "pass"("pass_id") ON DELETE RESTRICT ON UPDATE CASCADE;
