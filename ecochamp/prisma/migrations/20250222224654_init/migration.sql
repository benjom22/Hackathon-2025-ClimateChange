-- AlterTable
ALTER TABLE "Rewards" ADD COLUMN     "name" VARCHAR(255) NOT NULL DEFAULT 'Default',
ADD COLUMN     "qrcode" VARCHAR(255);
