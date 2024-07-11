-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RegisteredNumbers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "codeSent" INTEGER,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "RegisteredNumbers_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("companyId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_RegisteredNumbers" ("codeSent", "companyId", "id", "number") SELECT "codeSent", "companyId", "id", "number" FROM "RegisteredNumbers";
DROP TABLE "RegisteredNumbers";
ALTER TABLE "new_RegisteredNumbers" RENAME TO "RegisteredNumbers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
