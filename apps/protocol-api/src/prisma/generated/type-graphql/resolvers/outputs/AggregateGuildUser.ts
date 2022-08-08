import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { GuildUserAvgAggregate } from '../outputs/GuildUserAvgAggregate';
import { GuildUserCountAggregate } from '../outputs/GuildUserCountAggregate';
import { GuildUserMaxAggregate } from '../outputs/GuildUserMaxAggregate';
import { GuildUserMinAggregate } from '../outputs/GuildUserMinAggregate';
import { GuildUserSumAggregate } from '../outputs/GuildUserSumAggregate';

@TypeGraphQL.ObjectType('AggregateGuildUser', {
  isAbstract: true,
})
export class AggregateGuildUser {
  @TypeGraphQL.Field(_type => GuildUserCountAggregate, {
    nullable: true,
  })
  _count!: GuildUserCountAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserAvgAggregate, {
    nullable: true,
  })
  _avg!: GuildUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserSumAggregate, {
    nullable: true,
  })
  _sum!: GuildUserSumAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserMinAggregate, {
    nullable: true,
  })
  _min!: GuildUserMinAggregate | null;

  @TypeGraphQL.Field(_type => GuildUserMaxAggregate, {
    nullable: true,
  })
  _max!: GuildUserMaxAggregate | null;
}
