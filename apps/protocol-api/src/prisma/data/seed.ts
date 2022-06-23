import { Prisma, PrismaClient } from '@prisma/client';
import { Logger } from '@govrn-monorepo/utils';
import * as LinearSnapshot from './linear-snapshot.json';
import { DBLinearCycle } from './types';

const createOrCreateCycleOnly = (cycle?: DBLinearCycle) => {
  if (!cycle) return undefined;

  return Prisma.validator<Prisma.LinearCycleCreateOrConnectWithoutIssuesInput>()(
    {
      where: { linear_id: cycle?.linear_id },
      create: {
        number: cycle?.number,
        startsAt: cycle?.startsAt,
        endsAt: cycle?.endsAt,
        linear_id: cycle?.linear_id,
      },
    }
  );
};

const writeLinearSnapshot = async () => {
  const client = new PrismaClient({ errorFormat: 'pretty' });

  const linearUsers = [];
  LinearSnapshot.linearUsers.forEach((u) => {
    if (!linearUsers.some((value) => value.linear_id === u.linear_id))
      linearUsers.push(u);
  });

  const usersCreation = linearUsers.map((user) =>
    client.linearUser.create({
      data: {
        active: user.active,
        createdAt: user.createdAt,
        displayName: user.displayName,
        email: user.email,
        linear_id: user.linear_id,
        name: user.name,
        url: user.url,
        assigned_issues: {
          connectOrCreate: user.assigned_issues.map((issue) => {
            return {
              where: {
                linear_id: issue.linear_id,
              },
              create: {
                archivedAt: issue.archivedAt,
                autoArchivedAt: issue.autoArchivedAt,
                autoClosedAt: issue.autoClosedAt,
                boardOrder: issue.boardOrder,
                branchName: issue.branchName,
                canceledAt: issue.canceledAt,
                completedAt: issue.completedAt,
                createdAt: issue.createdAt,
                customerTickerCount: issue.customerTickerCount,
                description: issue.description,
                dueDate: issue.dueDate,
                estimate: issue.estimate,
                linear_id: issue.linear_id,
                identifier: issue.identifier,
                priority: issue.priority,
                priorityLabel: issue.priorityLabel,
                snoozedUntilAt: issue.snoozedUntilAt,
                sortOrder: issue.sortOrder,
                startedAt: issue.startedAt,
                subIssueSortOrder: issue.subIssueSortOrder,
                title: issue.title,
                trashed: issue.trashed,
                updatedAt: issue.updatedAt,
                url: issue.url,
                cycle: {
                  connectOrCreate: createOrCreateCycleOnly(issue.cycle),
                },
              },
            };
          }),
        },
      },
    })
  );

  await client.$transaction(usersCreation);
};

const main = async () => {
  await writeLinearSnapshot();
};

try {
  main();
} catch (e) {
  Logger.error(e);
  process.exit(1);
}
