import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LinearCycleRelationFilter } from "../inputs/LinearCycleRelationFilter";
import { LinearProjectRelationFilter } from "../inputs/LinearProjectRelationFilter";
import { LinearTeamRelationFilter } from "../inputs/LinearTeamRelationFilter";
import { LinearUserRelationFilter } from "../inputs/LinearUserRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("LinearIssueWhereInput", {
  isAbstract: true
})
export class LinearIssueWhereInput {
  @TypeGraphQL.Field(_type => [LinearIssueWhereInput], {
    nullable: true
  })
  AND?: LinearIssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereInput], {
    nullable: true
  })
  OR?: LinearIssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LinearIssueWhereInput], {
    nullable: true
  })
  NOT?: LinearIssueWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  autoArchivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  autoClosedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  boardOrder?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  branchName?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  canceledAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  customerTickerCount?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  dueDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  estimate?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  linear_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  priority?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  pritorityLabel?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  snoozedUntilAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  sortOrder?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  startedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  subIssueSortOrder?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  trashed?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  assignee_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LinearUserRelationFilter, {
    nullable: true
  })
  assignee?: LinearUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  creator_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LinearUserRelationFilter, {
    nullable: true
  })
  creator?: LinearUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  cycle_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LinearCycleRelationFilter, {
    nullable: true
  })
  cycle?: LinearCycleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  project_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LinearProjectRelationFilter, {
    nullable: true
  })
  project?: LinearProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  team_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LinearTeamRelationFilter, {
    nullable: true
  })
  team?: LinearTeamRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;
}
