-- CreateTable
CREATE TABLE "LinearIssue" (
    "id" SERIAL NOT NULL,
    "archivedAt" TIMESTAMP(3),
    "autoArchivedAt" TIMESTAMP(3),
    "autoClosedAt" TIMESTAMP(3),
    "boardOrder" INTEGER,
    "branchName" TEXT,
    "canceledAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "customerTickerCount" INTEGER,
    "description" TEXT,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "estimate" DOUBLE PRECISION,
    "linear_id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "priority" INTEGER,
    "pritorityLabel" TEXT,
    "snoozedUntilAt" TIMESTAMP(3),
    "sortOrder" DOUBLE PRECISION,
    "startedAt" TIMESTAMP(3),
    "subIssueSortOrder" DOUBLE PRECISION,
    "title" TEXT,
    "trashed" BOOLEAN,
    "updatedAt" TIMESTAMP(3),
    "url" TEXT,
    "assignee_id" INTEGER,
    "creator_id" INTEGER NOT NULL,
    "cycle_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "contribution_id" INTEGER NOT NULL,

    CONSTRAINT "LinearIssue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearUser" (
    "id" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3),
    "displayName" TEXT,
    "email" TEXT,
    "linear_id" TEXT NOT NULL,
    "name" TEXT,
    "url" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "LinearUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearCycle" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "linear_id" TEXT NOT NULL,

    CONSTRAINT "LinearCycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearProject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "linear_id" TEXT NOT NULL,

    CONSTRAINT "LinearProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinearTeam" (
    "id" SERIAL NOT NULL,
    "linear_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "LinearTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LinearIssue_linear_id_key" ON "LinearIssue"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearIssue_contribution_id_key" ON "LinearIssue"("contribution_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearUser_linear_id_key" ON "LinearUser"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearCycle_linear_id_key" ON "LinearCycle"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearProject_linear_id_key" ON "LinearProject"("linear_id");

-- CreateIndex
CREATE UNIQUE INDEX "LinearTeam_linear_id_key" ON "LinearTeam"("linear_id");

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_contribution_id_fkey" FOREIGN KEY ("contribution_id") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_assignee_id_fkey" FOREIGN KEY ("assignee_id") REFERENCES "LinearUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "LinearUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "LinearCycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "LinearProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearIssue" ADD CONSTRAINT "LinearIssue_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "LinearTeam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinearUser" ADD CONSTRAINT "LinearUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
