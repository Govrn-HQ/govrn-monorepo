import { Prisma, PrismaClient } from '@prisma/client';
import { Logger } from '@govrn-monorepo/utils';
import * as LinearSnapshot from './linear-snapshot.json';

const connectOrCreateCycleOnly = (
  cycle?: Prisma.LinearCycleCreateWithoutIssuesInput
) => {
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

const connectOrCreateProjectOnly = (
  project?: Prisma.LinearProjectCreateWithoutIssuesInput
) => {
  if (!project) return undefined;

  return Prisma.validator<Prisma.LinearProjectCreateOrConnectWithoutIssuesInput>()(
    {
      where: { linear_id: project?.linear_id },
      create: {
        name: project.name,
        linear_id: project.linear_id,
      },
    }
  );
};

const connectOrCreateTeamOnly = (
  team?: Prisma.LinearTeamCreateWithoutIssuesInput
) => {
  if (!team) return undefined;

  return Prisma.validator<Prisma.LinearTeamCreateOrConnectWithoutIssuesInput>()(
    {
      where: { linear_id: team?.linear_id },
      create: {
        name: team.name,
        linear_id: team.linear_id,
        key: team.key,
      },
    }
  );
};

const connectOrCreateIssueOnly = (issue?) => {
  if (!issue) return undefined;

  return Prisma.validator<Prisma.LinearIssueCreateOrConnectWithoutAssigneeInput>()(
    {
      where: { linear_id: issue?.linear_id },
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
          connectOrCreate: connectOrCreateCycleOnly(issue?.cycle),
        },
        project: {
          connectOrCreate: connectOrCreateProjectOnly(issue.project),
        },
        team: {
          connectOrCreate: connectOrCreateTeamOnly(issue.team),
        },
      },
    }
  );
};

const createLinearUser = (user) => {
  return Prisma.validator<Prisma.LinearUserCreateArgs>()({
    data: {
      active: user.active,
      createdAt: user.createdAt,
      displayName: user.displayName,
      email: user.email,
      linear_id: user.linear_id,
      name: user.name,
      url: user.url,
      assigned_issues: {
        connectOrCreate: user.assigned_issues.map(connectOrCreateIssueOnly),
      },
      created_issues: {
        connectOrCreate: user.created_issues.map(connectOrCreateIssueOnly),
      },
    },
  });
};

const writeLinearSnapshot = async () => {
  const client = new PrismaClient({ errorFormat: 'pretty' });

  const linearUsers = LinearSnapshot.linearUsers;
  const usersCreation = linearUsers.map((user) =>
    client.linearUser.create(createLinearUser(user))
  );

  const users = await client.$transaction(usersCreation);
  Logger.success(
    `:: ${users.length} Linear user(s) with related issues, teams, and projects have been written.`
  );
};

const main = async () => {
  try {
    await writeLinearSnapshot();
  } catch (e) {
    Logger.error(e);

    Logger.warn(
      '\n\nMake sure to drop all tables to avoid constraints by running:'
    );
    Logger.warn('\t❯ yarn nx run protocol-api:truncate\n\n');

    process.exit(1);
  }
};

main();
