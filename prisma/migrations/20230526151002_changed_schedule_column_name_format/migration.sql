/*
  Warnings:

  - You are about to drop the column `dayOfWeek` on the `schedules` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `schedules` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[day_of_week]` on the table `schedules` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `day_of_week` to the `schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurant_id` to the `schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_restaurantId_fkey";

-- DropIndex
DROP INDEX "schedules_dayOfWeek_key";

-- AlterTable
ALTER TABLE "schedules" DROP COLUMN "dayOfWeek",
DROP COLUMN "restaurantId",
ADD COLUMN     "day_of_week" INTEGER NOT NULL,
ADD COLUMN     "restaurant_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "schedules_day_of_week_key" ON "schedules"("day_of_week");

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
