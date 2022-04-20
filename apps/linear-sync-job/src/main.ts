import { LinearClient } from '@linear/sdk';
import { GovrnProtocol } from '@govrn/protocol-client';
console.log('Hello World!');

// 1. Call api fetch last run date from last run
//    if no run do not set
// 2. Fetch all issues and create contributions
// 3. Store last issue and run info
const apiKey = process.env.API_KEY;
const protcolUrl = process.env.PROTOCOL_URL;

const main = async () => {
  const linearClient = new LinearClient({ apiKey });
  const govrn = new GovrnProtocol(protcolUrl);
  // TODO remove the hardcoded date
	const lastRun = 
  const completedAt = { gt: new Date('03/01/2022') };
  const issues = await linearClient.issues({ filter: { completedAt } });
  console.log(issues.nodes.length);
  console.log(issues.nodes[0]);
  console.log(issues.pageInfo);
  const user = await issues.nodes[0].assignee;
  console.log(user);
  const project = await issues.nodes[0].project;
  console.log(project);
  const cycle = await issues.nodes[0].cycle;
  console.log(cycle);
  const team = await issues.nodes[0].team;
  console.log(team);
};

main();

//    archivedAt?: Date;
//    /** The time at which the issue was automatically archived by the auto pruning process. */
//    autoArchivedAt?: Date;
//    /** The time at which the issue was automatically closed by the auto pruning process. */
//    autoClosedAt?: Date;
//    /** The order of the item in its column on the board. */
//    boardOrder: number;
//    /** Suggested branch name for the issue. */
//    branchName: string;
//    /** The time at which the issue was moved into canceled state. */
//    canceledAt?: Date;
//    /** The time at which the issue was moved into completed state. */
//    completedAt?: Date;
//    /** The time at which the entity was created. */
//    createdAt: Date;
//    /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
//    customerTicketCount: number;
//    /** The issue's description in markdown format. */
//    description?: string;
//    /** The date at which the issue is due. */
//    dueDate?: L.Scalars["TimelessDate"];
//    /** The estimate of the complexity of the issue.. */
//    estimate?: number;
//    /** The unique identifier of the entity. */
//    id: string;
//    /** Issue's human readable identifier (e.g. ENG-123). */
//    identifier: string;
//    /** The issue's unique number. */
//    number: number;
//    /** Previous identifiers of the issue if it has been moved between teams. */
//    previousIdentifiers: string[];
//    /** The priority of the issue. */
//    priority: number;
//    /** Label for the priority. */
//    priorityLabel: string;
//    /** The time until an issue will be snoozed in Triage view. */
//    snoozedUntilAt?: Date;
//    /** The order of the item in relation to other items in the organization. */
//    sortOrder: number;
//    /** The time at which the issue was moved into started state. */
//    startedAt?: Date;
//    /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
//    subIssueSortOrder?: number;
//    /** The issue's title. */
//    title: string;
//    /** A flag that indicates whether the issue is in the trash bin. */
//    trashed?: boolean;
//    /**
//     * The last time at which the entity was updated. This is the same as the creation time if the
//     *     entity hasn't been update after creation.
//     */
//    updatedAt: Date;
//    /** Issue URL. */
//    url: string;
//
