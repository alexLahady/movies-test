/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

/*
// A refaire correctement avant de migrate
// Définir le modèle User
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String
  movies Movie[] // en relation avec un ou plusieurs films
}

// Définir le modèle Movie
model Movie {
  id          Int    @id @default(autoincrement())
  title       String
  description String
  userId      Int
  user        User   @relation(fields: [userId], references: [id]) // en relation avec l'utilisateur
}

*/