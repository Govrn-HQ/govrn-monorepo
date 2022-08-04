import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('LinearIssueSumAggregate', {
  isAbstract: true,
})
export class LinearIssueSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  boardOrder!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  customerTickerCount!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  estimate!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  priority!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  sortOrder!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  subIssueSortOrder!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  assignee_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  creator_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  cycle_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  project_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  team_id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  contribution_id!: number | null;
}
