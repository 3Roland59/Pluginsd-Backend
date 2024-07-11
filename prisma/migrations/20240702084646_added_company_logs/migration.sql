-- CreateTable
CREATE TABLE "Logs" (
    "log_id" BIGINT NOT NULL PRIMARY KEY,
    "phoneOrEmail" TEXT,
    "status" TEXT NOT NULL DEFAULT 'failed',
    "time" DATETIME,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "Logs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("companyId") ON DELETE CASCADE ON UPDATE CASCADE
);
