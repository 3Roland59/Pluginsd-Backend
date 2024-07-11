/*
  Warnings:

  - You are about to drop the column `companyid` on the `RegisteredNumbers` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `RegisteredNumbers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RegisteredNumbers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" BIGINT NOT NULL,
    "codeSent" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "RegisteredNumbers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("companyId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_RegisteredNumbers" ("codeSent", "id", "number") SELECT "codeSent", "id", "number" FROM "RegisteredNumbers";
DROP TABLE "RegisteredNumbers";
ALTER TABLE "new_RegisteredNumbers" RENAME TO "RegisteredNumbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
