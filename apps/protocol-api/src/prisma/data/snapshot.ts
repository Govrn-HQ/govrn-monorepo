import 'tslib';
import * as fs from 'fs';
import { Logger } from '@govrn-monorepo/utils';
import { PrismaClient } from '@prisma/client';

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

const main = async () => {
  console.log('\n:: Collecting Started\n');

  const client = new PrismaClient();

  const linearIssueSelect = {
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
    creator: {
      select: {
        active: true,
        createdAt: true,
        displayName: true,
        email: true,
        linear_id: true,
        name: true,
        url: true,
      },
    },
    assignee: {
      select: {
        active: true,
        createdAt: true,
        displayName: true,
        email: true,
        linear_id: true,
        name: true,
        url: true,
      },
    },
    cycle: {
      select: {
        number: true,
        startsAt: true,
        endsAt: true,
        linear_id: true,
      },
    },
    project: {
      select: {
        name: true,
        linear_id: true,
      },
    },
    team: {
      select: {
        linear_id: true,
        name: true,
        key: true,
      },
    },
  };

  const linearUsers = await client.linearUser.findMany({
    select: {
      active: true,
      createdAt: true,
      displayName: true,
      email: true,
      linear_id: true,
      name: true,
      url: true,
      // TODO: add user,
      assigned_issues: {
        select: linearIssueSelect,
      },
      created_issues: {
        select: linearIssueSelect,
      },
    },
  });

  await writeToFile('linear-snapshot.json', linearUsers);
};
try {
  main();
} catch (e) {
  console.error(e);
}
