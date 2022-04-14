import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Contribution } from "../models/Contribution";
import { LinearCycle } from "../models/LinearCycle";
import { LinearProject } from "../models/LinearProject";
import { LinearTeam } from "../models/LinearTeam";
import { LinearUser } from "../models/LinearUser";

@TypeGraphQL.ObjectType("LinearIssue", {
  isAbstract: true
})
export class LinearIssue {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoArchivedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  autoClosedAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  boardOrder?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  branchName?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  canceledAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  customerTickerCount?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dueDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimate?: number | null;

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
  priority?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pritorityLabel?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  snoozedUntilAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  sortOrder?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startedAt?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  subIssueSortOrder?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  trashed?: boolean | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  assignee_id?: number | null;

  assignee?: LinearUser | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creator_id!: number;

  creator?: LinearUser;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  cycle_id!: number;

  cycle?: LinearCycle;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  project_id!: number;

  project?: LinearProject;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  team_id!: number;

  team?: LinearTeam;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contribution_id!: number;

  contribution?: Contribution;
}
