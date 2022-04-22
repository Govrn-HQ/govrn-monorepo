import * as TypeGraphQL from "type-graphql";

export enum LinearIssueScalarFieldEnum {
  id = "id",
  archivedAt = "archivedAt",
  autoArchivedAt = "autoArchivedAt",
  autoClosedAt = "autoClosedAt",
  boardOrder = "boardOrder",
  branchName = "branchName",
  canceledAt = "canceledAt",
  completedAt = "completedAt",
  createdAt = "createdAt",
  customerTickerCount = "customerTickerCount",
  description = "description",
  dueDate = "dueDate",
  estimate = "estimate",
  linear_id = "linear_id",
  identifier = "identifier",
  priority = "priority",
  pritorityLabel = "pritorityLabel",
  snoozedUntilAt = "snoozedUntilAt",
  sortOrder = "sortOrder",
  startedAt = "startedAt",
  subIssueSortOrder = "subIssueSortOrder",
  title = "title",
  trashed = "trashed",
  updatedAt = "updatedAt",
  url = "url",
  assignee_id = "assignee_id",
  creator_id = "creator_id",
  cycle_id = "cycle_id",
  project_id = "project_id",
  team_id = "team_id",
  contribution_id = "contribution_id"
}
TypeGraphQL.registerEnumType(LinearIssueScalarFieldEnum, {
  name: "LinearIssueScalarFieldEnum",
  description: undefined,
});
