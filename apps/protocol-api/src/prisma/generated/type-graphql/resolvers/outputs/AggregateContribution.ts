import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionAvgAggregate } from '../outputs/ContributionAvgAggregate';
import { ContributionCountAggregate } from '../outputs/ContributionCountAggregate';
import { ContributionMaxAggregate } from '../outputs/ContributionMaxAggregate';
import { ContributionMinAggregate } from '../outputs/ContributionMinAggregate';
import { ContributionSumAggregate } from '../outputs/ContributionSumAggregate';

@TypeGraphQL.ObjectType('AggregateContribution', {
  isAbstract: true,
})
export class AggregateContribution {
  @TypeGraphQL.Field(_type => ContributionCountAggregate, {
    nullable: true,
  })
  _count!: ContributionCountAggregate | null;

  @TypeGraphQL.Field(_type => ContributionAvgAggregate, {
    nullable: true,
  })
  _avg!: ContributionAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContributionSumAggregate, {
    nullable: true,
  })
  _sum!: ContributionSumAggregate | null;

  @TypeGraphQL.Field(_type => ContributionMinAggregate, {
    nullable: true,
  })
  _min!: ContributionMinAggregate | null;

  @TypeGraphQL.Field(_type => ContributionMaxAggregate, {
    nullable: true,
  })
  _max!: ContributionMaxAggregate | null;
}
