/*
  Warnings:

  - You are about to drop the column `submissionID` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "submissionID",
DROP COLUMN "time";
