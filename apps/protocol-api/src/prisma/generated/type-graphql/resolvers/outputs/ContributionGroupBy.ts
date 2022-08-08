import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionAvgAggregate } from '../outputs/ContributionAvgAggregate';
import { ContributionCountAggregate } from '../outputs/ContributionCountAggregate';
import { ContributionMaxAggregate } from '../outputs/ContributionMaxAggregate';
import { ContributionMinAggregate } from '../outputs/ContributionMinAggregate';
import { ContributionSumAggregate } from '../outputs/ContributionSumAggregate';

@TypeGraphQL.ObjectType('ContributionGroupBy', {
  isAbstract: true,
})
export class ContributionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  status_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  activity_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  date_of_submission!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  date_of_engagement!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  proof!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  on_chain_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  tx_hash!: string | null;

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
