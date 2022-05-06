import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearIssueAvgAggregate } from "../outputs/LinearIssueAvgAggregate";
import { LinearIssueCountAggregate } from "../outputs/LinearIssueCountAggregate";
import { LinearIssueMaxAggregate } from "../outputs/LinearIssueMaxAggregate";
import { LinearIssueMinAggregate } from "../outputs/LinearIssueMinAggregate";
import { LinearIssueSumAggregate } from "../outputs/LinearIssueSumAggregate";

@TypeGraphQL.ObjectType("LinearIssueGroupBy", {
  isAbstract: true
})
export class LinearIssueGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoArchivedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoClosedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  boardOrder!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  branchName!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  canceledAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerTickerCount!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimate!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  linear_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  priority!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priorityLabel!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  snoozedUntilAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  sortOrder!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startedAt!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  subIssueSortOrder!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  trashed!: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  assignee_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creator_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  cycle_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  project_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  team_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  contribution_id!: number | null;

  @TypeGraphQL.Field(_type => LinearIssueCountAggregate, {
    nullable: true
  })
  _count!: LinearIssueCountAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueAvgAggregate, {
    nullable: true
  })
  _avg!: LinearIssueAvgAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueSumAggregate, {
    nullable: true
  })
  _sum!: LinearIssueSumAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueMinAggregate, {
    nullable: true
  })
  _min!: LinearIssueMinAggregate | null;

  @TypeGraphQL.Field(_type => LinearIssueMaxAggregate, {
    nullable: true
  })
  _max!: LinearIssueMaxAggregate | null;
}
