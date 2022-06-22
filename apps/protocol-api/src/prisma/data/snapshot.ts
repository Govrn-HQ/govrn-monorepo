import 'tslib';
import * as fs from 'fs';
import { Logger } from '@govrn-monorepo/utils';
import { Prisma, PrismaClient } from '@prisma/client';

const writeCallback = (filename: string, err) => {
  if (err) {
    Logger.error(err);
  }
  Logger.success(`:: Data written to ${filename}`);
};

const writeToFile = async (filename: string, data: any[]) => {
  const path = `./apps/protocol-api/src/prisma/data/${filename}`;
  await fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
    writeCallback(filename, err);
  });
};

const linearUserSelectWithNoRelation: Prisma.LinearUserSelect = {
  active: true,
  createdAt: true,
  displayName: true,
  email: true,
  linear_id: true,
  name: true,
  url: true,
};

const linearIssueSelectWithNoRelation: Prisma.LinearIssueSelect = {
  archivedAt: true,
  autoArchivedAt: true,
  autoClosedAt: true,
  boardOrder: true,
  branchName: true,
  canceledAt: true,
  completedAt: true,
  createdAt: true,
  customerTickerCount: true,
  description: true,
  dueDate: true,
  estimate: true,
  linear_id: true,
  identifier: true,
  priority: true,
  priorityLabel: true,
  snoozedUntilAt: true,
  sortOrder: true,
  startedAt: true,
  subIssueSortOrder: true,
  title: true,
  trashed: true,
  updatedAt: true,
  url: true,
};

const linearCycleSelect: Prisma.LinearCycleSelect = {
  number: true,
  startsAt: true,
  endsAt: true,
  linear_id: true,
};

const linearTeamSelect: Prisma.LinearTeamSelect = {
  linear_id: true,
  name: true,
  key: true,
};

const linearProjectSelect: Prisma.LinearProjectSelect = {
  name: true,
  linear_id: true,
};

const linearIssueSelect: Prisma.LinearIssueSelect = {
  ...linearIssueSelectWithNoRelation,
  creator: { select: linearUserSelectWithNoRelation },
  assignee: { select: linearUserSelectWithNoRelation },
  cycle: { select: linearCycleSelect },
  project: { select: linearProjectSelect },
  team: { select: linearTeamSelect },
};

const linearUserSelect: Prisma.LinearUserSelect = {
  active: true,
  createdAt: true,
  displayName: true,
  email: true,
  linear_id: true,
  name: true,
  url: true,
  assigned_issues: {
    select: linearIssueSelect,
  },
  created_issues: {
    select: linearIssueSelect,
  },
};

const main = async () => {
  console.log('\n:: Collecting Started\n');

  const prisma = new PrismaClient({ errorFormat: 'pretty' });

  const linearUsers = await prisma.linearUser.findMany({
    select: linearUserSelect,
  });

  await writeToFile('linear-snapshot.json', linearUsers);
};
try {
  main();
} catch (e) {
  console.error(e);
}
