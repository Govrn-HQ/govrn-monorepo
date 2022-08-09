import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserActivityAvgAggregate } from '../outputs/UserActivityAvgAggregate';
import { UserActivityCountAggregate } from '../outputs/UserActivityCountAggregate';
import { UserActivityMaxAggregate } from '../outputs/UserActivityMaxAggregate';
import { UserActivityMinAggregate } from '../outputs/UserActivityMinAggregate';
import { UserActivitySumAggregate } from '../outputs/UserActivitySumAggregate';

@TypeGraphQL.ObjectType('AggregateUserActivity', {
  isAbstract: true,
})
export class AggregateUserActivity {
  @TypeGraphQL.Field(_type => UserActivityCountAggregate, {
    nullable: true,
  })
  _count!: UserActivityCountAggregate | null;

  @TypeGraphQL.Field(_type => UserActivityAvgAggregate, {
    nullable: true,
  })
  _avg!: UserActivityAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserActivitySumAggregate, {
    nullable: true,
  })
  _sum!: UserActivitySumAggregate | null;

  @TypeGraphQL.Field(_type => UserActivityMinAggregate, {
    nullable: true,
  })
  _min!: UserActivityMinAggregate | null;

  @TypeGraphQL.Field(_type => UserActivityMaxAggregate, {
    nullable: true,
  })
  _max!: UserActivityMaxAggregate | null;
}
