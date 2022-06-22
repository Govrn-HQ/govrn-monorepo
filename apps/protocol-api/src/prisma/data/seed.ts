import { PrismaClient } from '@prisma/client';
import { Logger } from '@govrn-monorepo/utils';
import * as LinearSnapshot from './linear-snapshot.json';

const writeLinearSnapshot = async () => {
  const client = new PrismaClient();

  const linearUsers = LinearSnapshot.linearUsers;

  const issue = linearUsers[0].assigned_issues[0];

  linearUsers.map(
    async (user) =>
      await client.linearUser.create({
        data: {
          active: user.active,
          createdAt: user.createdAt,
          displayName: user.displayName,
          email: user.email,
          linear_id: user.linear_id,
          name: user.name,
          url: user.url,
          assigned_issues: {
            connectOrCreate: {
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
                // cycle: {
                //   connectOrCreate: {
                //     where: { linear_id: 'issue.project?.linear_id' },
                //     create: {
                //       number: issue.cycle?.number,
                //       startsAt: issue.cycle?.startsAt,
                //       endsAt: issue.cycle?.endsAt,
                //       linear_id: issue.cycle?.linear_id,
                //     },
                //   },
                // },
              },
            },
          },
        },
      })
  );
};

const main = async () => {
  // await dropDB();
  //
  // setTimeout(async () => {
  //   await writeLinearSnapshot();
  // }, 5000);

  await writeLinearSnapshot();
};

try {
  main();
} catch (e) {
  Logger.error(e);
  process.exit(1);
}
