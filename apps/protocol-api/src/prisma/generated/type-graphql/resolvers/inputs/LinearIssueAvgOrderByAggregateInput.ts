import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('LinearIssueAvgOrderByAggregateInput', {
  isAbstract: true,
})
export class LinearIssueAvgOrderByAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  boardOrder?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  customerTickerCount?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  estimate?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  priority?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  sortOrder?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  subIssueSortOrder?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  assignee_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  creator_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  cycle_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  project_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  team_id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  contribution_id?: 'asc' | 'desc' | undefined;
}
