import { LinearClient, User, Cycle, Project, Team } from '@linear/sdk';
import {
  GovrnProtocol,
  SortOrder,
  LinearIssueCreateManyInput,
} from '@govrn/protocol-client';
import 'tslib';

const apiKey = process.env.API_KEY;
const protcolUrl = process.env.PROTOCOL_URL;
const jobName = 'linear-sync-job';

const upsertUser = (govrn: GovrnProtocol, user: User) => {
  const linearAssignee = {
    active: user.active,
    displayName: user.displayName,
    email: user.email,
    linear_id: user.id,
    name: user.name,
    url: user.url,
  };
  const assingneePromise = govrn.linear.user.upsert({
    create: linearAssignee,
    update: { name: { set: user.name } },
    where: { linear_id: user.id },
  });
  return assingneePromise;
};

const upsertCycle = (govrn: GovrnProtocol, cycle: Cycle) => {
  const linearCycle = {
    endsAt: cycle.endsAt,
    linear_id: cycle.id,
    number: cycle.number,
    startsAt: cycle.startsAt,
  };
  const cyclePromise = govrn.linear.cycle.upsert({
    create: linearCycle,
    update: { linear_id: { set: cycle.id } },
    where: { linear_id: cycle.id },
  });
  return cyclePromise;
};

const upsertProject = (govrn: GovrnProtocol, project: Project) => {
  const linearProject = {
    linear_id: project.id,
    name: project.name,
  };
  const projectPromise = govrn.linear.project.upsert({
    create: linearProject,
    update: { linear_id: { set: project.id } },
    where: { linear_id: project.id },
  });
  return projectPromise;
};

const upsertTeam = (govrn: GovrnProtocol, team: Team) => {
  const linearTeam = {
    linear_id: team.id,
    name: team.name,
    key: team.key,
  };
  const teamPromise = govrn.linear.team.upsert({
    create: linearTeam,
    update: { linear_id: { set: team.id } },
    where: { linear_id: team.id },
  });
  return teamPromise;
};

const createJobRun = async (
  govrn: GovrnProtocol,
  job: { startDate: Date; completedDate: Date }
) => {
  const teamPromise = await govrn.jobRun.create({
    data: {
      startDate: job.startDate,
      completedDate: job.completedDate,
      name: jobName,
    },
  });
  return teamPromise;
};

// Fetch access_token
// After getting access token
// Get latest Linear issue to pick later
//
// convert to contribution
const main = async () => {
  console.log(`Starting to process linear issues`);
  const linearClient = new LinearClient({ apiKey });
  const govrn = new GovrnProtocol(protcolUrl);
  const lastRun = await govrn.jobRun.list({
    first: 1,
    orderBy: { completedDate: SortOrder.Desc },
    where: { name: { equals: jobName } },
  });
  const startDate =
    lastRun.length > 0 ? new Date(lastRun[0].startDate) : new Date();
  const completedAtFilter =
    lastRun.length > 0 ? { gt: startDate } : { lt: startDate };

  let issues = [];
  let page = 1;
  do {
    const resp = await linearClient.issues({
      filter: { completedAt: completedAtFilter },
      first: 100,
    });
    issues = resp.nodes;
    console.log(`Processing ${issues.length} issues`);
    const linearIssues = [] as LinearIssueCreateManyInput[];
    for (const issue of issues) {
      console.log(`Processing ${issue.title}`);
      const [issueAssignee, issueCreator, issueCycle, issueProject, issueTeam] =
        await Promise.all([
          issue.assignee,
          issue.creator,
          issue.cycle,
          issue.project,
          issue.team,
        ]);

      let assingneePromise;
      if (issueAssignee) {
        assingneePromise = upsertUser(govrn, issueAssignee);
      }
      let creatorPromise;
      if (issueCreator) {
        creatorPromise = upsertUser(govrn, issueCreator);
      }
      let cyclePromise;
      if (issueCycle) {
        cyclePromise = upsertCycle(govrn, issueCycle);
      }
      let projectPromise;
      if (issueProject) {
        projectPromise = upsertProject(govrn, issueProject);
      }
      const teamPromise = upsertTeam(govrn, issueTeam);

      const [assignee, creator, cycle, project, team] = await Promise.all([
        assingneePromise,
        creatorPromise,
        cyclePromise,
        projectPromise,
        teamPromise,
      ]);
      linearIssues.push({
        archivedAt: issue.archivedAt,
        assignee_id: assignee?.id,
        autoArchivedAt: issue.autoArchivedAt,
        autoClosedAt: issue.autoClosedAt,
        boardOrder: issue.boardOrder,
        branchName: issue.branchName,
        canceledAt: issue.canceledAt,
        completedAt: issue.completedAt,
        createdAt: issue.createdAt,
        creator_id: creator?.id,
        customerTickerCount: issue.customerTicketCount,
        cycle_id: cycle?.id,
        description: issue.description,
        dueDate: issue.dueDate,
        estimate: issue.estimate,
        identifier: issue.identifier,
        linear_id: issue.id,
        priority: issue.priority,
        priorityLabel: issue.priorityLabel,
        project_id: project?.id,
        snoozedUntilAt: issue.snoozedUntilAt,
        sortOrder: issue.sortOrder,
        startedAt: issue.startedAt,
        subIssueSortOrder: issue.subIssueSortOrder,
        team_id: team.id,
        title: issue.title,
        trashed: issue.trashed || false,
        updatedAt: issue.updatedAt,
        url: issue.url,
      });
    }
    await govrn.linear.issue.bulkCreate({
      data: linearIssues,
      skipDuplicates: true,
    });
    if (linearIssues.length < 100) {
      break;
    }
    const next = await resp.fetchNext();
    issues = next.nodes.slice(page * 100 + 1);
    page = page + 1;
  } while (issues.length > 0);
  await createJobRun(govrn, { startDate, completedDate: new Date() });

  console.log(`Finished processing linear issues`);
};

main();
