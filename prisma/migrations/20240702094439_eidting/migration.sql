/*
  Warnings:

  - You are about to drop the column `created` on the `Logs` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Logs" (
    "log_id" BIGINT NOT NULL PRIMARY KEY,
    "phoneOrEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'FAILED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "Logs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("companyId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Logs" ("companyId", "log_id", "phoneOrEmail", "status") SELECT "companyId", "log_id", "phoneOrEmail", "status" FROM "Logs";
DROP TABLE "Logs";
ALTER TABLE "new_Logs" RENAME TO "Logs";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
