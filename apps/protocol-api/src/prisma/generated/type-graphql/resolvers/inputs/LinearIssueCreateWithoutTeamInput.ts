import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutLinear_issueInput } from "../inputs/ContributionCreateNestedOneWithoutLinear_issueInput";
import { LinearCycleCreateNestedOneWithoutIssuesInput } from "../inputs/LinearCycleCreateNestedOneWithoutIssuesInput";
import { LinearProjectCreateNestedOneWithoutIssuesInput } from "../inputs/LinearProjectCreateNestedOneWithoutIssuesInput";
import { LinearUserCreateNestedOneWithoutAssingned_issuesInput } from "../inputs/LinearUserCreateNestedOneWithoutAssingned_issuesInput";
import { LinearUserCreateNestedOneWithoutCreated_issuesInput } from "../inputs/LinearUserCreateNestedOneWithoutCreated_issuesInput";

@TypeGraphQL.InputType("LinearIssueCreateWithoutTeamInput", {
  isAbstract: true
})
export class LinearIssueCreateWithoutTeamInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoArchivedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoClosedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  boardOrder?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  branchName?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  canceledAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerTickerCount?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dueDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimate?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pritorityLabel?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  snoozedUntilAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  sortOrder?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  subIssueSortOrder?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  trashed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateNestedOneWithoutAssingned_issuesInput, {
    nullable: true
  })
  assignee?: LinearUserCreateNestedOneWithoutAssingned_issuesInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserCreateNestedOneWithoutCreated_issuesInput, {
    nullable: false
  })
  creator!: LinearUserCreateNestedOneWithoutCreated_issuesInput;

  @TypeGraphQL.Field(_type => LinearCycleCreateNestedOneWithoutIssuesInput, {
    nullable: false
  })
  cycle!: LinearCycleCreateNestedOneWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LinearProjectCreateNestedOneWithoutIssuesInput, {
    nullable: false
  })
  project!: LinearProjectCreateNestedOneWithoutIssuesInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutLinear_issueInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutLinear_issueInput;
}
