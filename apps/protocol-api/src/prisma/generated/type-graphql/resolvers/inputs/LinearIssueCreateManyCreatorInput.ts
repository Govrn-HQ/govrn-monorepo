import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.InputType('LinearIssueCreateManyCreatorInput', {
  isAbstract: true,
})
export class LinearIssueCreateManyCreatorInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  archivedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  autoArchivedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  autoClosedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  boardOrder?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  branchName?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  canceledAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  customerTickerCount?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  estimate?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  linear_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  priority?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  priorityLabel?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  snoozedUntilAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  sortOrder?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  startedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  subIssueSortOrder?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  trashed?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  assignee_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  cycle_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  project_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  team_id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  contribution_id?: number | undefined;
}
