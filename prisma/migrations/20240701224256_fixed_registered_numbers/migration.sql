/*
  Warnings:

  - Added the required column `companyName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `RegisteredNumbers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "companyId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "managerId" INTEGER NOT NULL,
    CONSTRAINT "Company_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Company" ("companyId", "managerId") SELECT "companyId", "managerId" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
CREATE UNIQUE INDEX "Company_companyName_key" ON "Company"("companyName");
CREATE UNIQUE INDEX "Company_managerId_key" ON "Company"("managerId");
CREATE TABLE "new_RegisteredNumbers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" BIGINT NOT NULL,
    "codeSent" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "RegisteredNumbers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("companyId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RegisteredNumbers" ("codeSent", "id", "number") SELECT "codeSent", "id", "number" FROM "RegisteredNumbers";
DROP TABLE "RegisteredNumbers";
ALTER TABLE "new_RegisteredNumbers" RENAME TO "RegisteredNumbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
