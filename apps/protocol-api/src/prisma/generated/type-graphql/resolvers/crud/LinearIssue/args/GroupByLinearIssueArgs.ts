import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LinearIssueOrderByWithAggregationInput } from "../../../inputs/LinearIssueOrderByWithAggregationInput";
import { LinearIssueScalarWhereWithAggregatesInput } from "../../../inputs/LinearIssueScalarWhereWithAggregatesInput";
import { LinearIssueWhereInput } from "../../../inputs/LinearIssueWhereInput";
import { LinearIssueScalarFieldEnum } from "../../../../enums/LinearIssueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLinearIssueArgs {
  @TypeGraphQL.Field(_type => LinearIssueWhereInput, {
    nullable: true
  })
  where?: LinearIssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LinearIssueOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "archivedAt" | "autoArchivedAt" | "autoClosedAt" | "boardOrder" | "branchName" | "canceledAt" | "completedAt" | "createdAt" | "customerTickerCount" | "description" | "dueDate" | "estimate" | "linear_id" | "identifier" | "priority" | "pritorityLabel" | "snoozedUntilAt" | "sortOrder" | "startedAt" | "subIssueSortOrder" | "title" | "trashed" | "updatedAt" | "url" | "assignee_id" | "creator_id" | "cycle_id" | "project_id" | "team_id" | "contribution_id">;

  @TypeGraphQL.Field(_type => LinearIssueScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LinearIssueScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
