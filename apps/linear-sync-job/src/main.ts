import {
  LinearClient,
  IssueConnection,
  Issue,
  LinearDocument,
} from '@linear/sdk';
import {
  GovrnProtocol,
  SortOrder,
  LinearIssueCreateManyInput,
  UpsertActivityTypeMutation,
  GetContributionStatusQuery,
  ListLinearUsersQuery,
} from '@govrn/protocol-client';
import 'tslib';

const protcolUrl = process.env.PROTOCOL_URL;
const protocolApiToken = process.env.PROTOCOL_API_TOKEN;

const STORE_WORKER_COUNT = 4;
const MAIN_WORKER_COUNT = 4;

const fetchLinearIssues = async (
  linearClient: LinearClient,
  completedAtFilter: { gt: Date },
) => {
  try {
    return await linearClient.issues({
      filter: {
        and: [{ completedAt: completedAtFilter }],
      },
      orderBy: LinearDocument.PaginationOrderBy.CreatedAt,
      first: 100,
    });
  } catch (e) {
    console.log(e);
  }
};

// sort low to high
const processIssue = async (
  issues: Issue[],
  resp: IssueConnection,
  govrn: GovrnProtocol,
  activity: UpsertActivityTypeMutation['upsertActivityType'],
  contributionStatus: GetContributionStatusQuery['contributionStatuses'][0],
  user: ListLinearUsersQuery['result'][0],
) => {
  let page = 1;
  let storePromises = [];
  console.log(`Processing first issues for user ${user.id}`);
  storePromises.push(
    storeContributions(issues, govrn, activity, contributionStatus, user),
  );
  while (issues.length > 0) {
    try {
      const next = await resp.fetchNext();
      console.log(`Processing ${page * 100 + 1} for user ${user.id}`);
      issues = next.nodes.slice(page * 100 + 1);
      const p = storeContributions(
        issues,
        govrn,
        activity,
        contributionStatus,
        user,
      );
      storePromises.push(p);
      if (storePromises.length >= STORE_WORKER_COUNT) {
        await Promise.all(storePromises);
        storePromises = [];
      }
      page = page + 1;
    } catch (e) {
      console.error(e);
      break;
    }
  }
  await Promise.all(storePromises);
};

const storeContributions = async (
  issues: Issue[],
  govrn: GovrnProtocol,
  activity: UpsertActivityTypeMutation['upsertActivityType'],
  contributionStatus: GetContributionStatusQuery['contributionStatuses'][0],
  user: ListLinearUsersQuery['result'][0],
) => {
  const linearIssues = [] as LinearIssueCreateManyInput[];
  for (const issue of issues) {
    const contribution = await govrn.contribution.create({
      data: {
        // activity type should be linear
        activity_type: { connect: { id: activity.id } },
        date_of_engagement: issue.completedAt,
        details: issue.description,
        name: issue.title,
        status: { connect: { id: contributionStatus?.id } },
        proof: issue.url,
        user: { connect: { id: user.id } },
      },
    });

    linearIssues.push({
      archivedAt: issue.archivedAt,
      autoArchivedAt: issue.autoArchivedAt,
      autoClosedAt: issue.autoClosedAt,
      boardOrder: issue.boardOrder,
      branchName: issue.branchName,
      canceledAt: issue.canceledAt,
      completedAt: issue.completedAt,
      createdAt: issue.createdAt,
      customerTickerCount: issue.customerTicketCount,
      description: issue.description,
      dueDate: issue.dueDate,
      estimate: issue.estimate,
      identifier: issue.identifier,
      linear_id: issue.id,
      priority: issue.priority,
      priorityLabel: issue.priorityLabel,
      snoozedUntilAt: issue.snoozedUntilAt,
      sortOrder: issue.sortOrder,
      startedAt: issue.startedAt,
      subIssueSortOrder: issue.subIssueSortOrder,
      title: issue.title,
      trashed: issue.trashed || false,
      updatedAt: issue.updatedAt,
      url: issue.url,
      contribution_id: contribution.id,
    });
  }
  await govrn.linear.issue.bulkCreate({
    data: linearIssues,
    skipDuplicates: true,
  });
};

const main = async () => {
  console.log(`Starting to process linear issues`);
  const govrn = new GovrnProtocol(protcolUrl, undefined, {
    Authorization: protocolApiToken,
  });
  // get users
  const users = govrn.linear.user.list({
    where: { active_token: { equals: true } },
  });

  const activity = await govrn.activity_type.upsert({
    create: { name: 'Linear Issue' },
    update: { name: { set: 'Linear Issue' } },
    where: { name: 'Linear Issue' },
  });
  for await (const result of users) {
    let wp = [];
    for (const user of result.result) {
      console.log(`Proccessing linear for user ${user.id}`);
      const linearClient = new LinearClient({ apiKey: user.access_token });
      const lastIssue = await govrn.linear.issue.list({
        first: 1,
        orderBy: [{ completedAt: SortOrder.Desc }],
      });
      const contributionStatus = await govrn.contribution.status.get('staging');

      const completedAtFilter =
        lastIssue.result.length > 0
          ? { gt: new Date(lastIssue.result[0].completedAt) }
          : { gt: new Date('1990-01-01T10:20:30Z') };

      const resp = await fetchLinearIssues(linearClient, completedAtFilter);
      if (resp.nodes.length == 0) {
        continue;
      }
      const workPromise = processIssue(
        resp.nodes,
        resp,
        govrn,
        activity,
        contributionStatus,
        user,
      );
      wp.push(workPromise);
      if (wp.length > MAIN_WORKER_COUNT) {
        await Promise.all(wp);
        wp = [];
      }
    }
    await Promise.all(wp);
  }
  console.log(`Finished processing linear issues`);
};

main();
