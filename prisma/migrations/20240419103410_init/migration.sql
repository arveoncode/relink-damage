-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");
