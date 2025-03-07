/*
  Warnings:

  - You are about to drop the column `description` on the `Movies` table. All the data in the column will be lost.
  - Added the required column `overview` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `Movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "description",
ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vote_average" DOUBLE PRECISION NOT NULL;
