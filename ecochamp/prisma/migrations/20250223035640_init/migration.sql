-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");
