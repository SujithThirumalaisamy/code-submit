-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "languageID" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "submissionID" INTEGER NOT NULL,
    "submissionTime" TIMESTAMP(3) NOT NULL,
    "output" TEXT NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
