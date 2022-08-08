import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterUserAvgAggregate } from '../outputs/TwitterUserAvgAggregate';
import { TwitterUserCountAggregate } from '../outputs/TwitterUserCountAggregate';
import { TwitterUserMaxAggregate } from '../outputs/TwitterUserMaxAggregate';
import { TwitterUserMinAggregate } from '../outputs/TwitterUserMinAggregate';
import { TwitterUserSumAggregate } from '../outputs/TwitterUserSumAggregate';

@TypeGraphQL.ObjectType('AggregateTwitterUser', {
  isAbstract: true,
})
export class AggregateTwitterUser {
  @TypeGraphQL.Field(_type => TwitterUserCountAggregate, {
    nullable: true,
  })
  _count!: TwitterUserCountAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserAvgAggregate, {
    nullable: true,
  })
  _avg!: TwitterUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserSumAggregate, {
    nullable: true,
  })
  _sum!: TwitterUserSumAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMinAggregate, {
    nullable: true,
  })
  _min!: TwitterUserMinAggregate | null;

  @TypeGraphQL.Field(_type => TwitterUserMaxAggregate, {
    nullable: true,
  })
  _max!: TwitterUserMaxAggregate | null;
}
