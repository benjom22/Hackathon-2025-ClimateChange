-- CreateTable
CREATE TABLE "Partners" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255) NOT NULL,

    CONSTRAINT "Partners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rewards" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,

    CONSTRAINT "Rewards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rewards" ADD CONSTRAINT "Rewards_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partners"("id") ON DELETE CASCADE ON UPDATE CASCADE;
