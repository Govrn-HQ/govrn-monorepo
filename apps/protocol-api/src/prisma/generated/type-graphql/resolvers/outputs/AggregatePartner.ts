import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PartnerAvgAggregate } from '../outputs/PartnerAvgAggregate';
import { PartnerCountAggregate } from '../outputs/PartnerCountAggregate';
import { PartnerMaxAggregate } from '../outputs/PartnerMaxAggregate';
import { PartnerMinAggregate } from '../outputs/PartnerMinAggregate';
import { PartnerSumAggregate } from '../outputs/PartnerSumAggregate';

@TypeGraphQL.ObjectType('AggregatePartner', {
  isAbstract: true,
})
export class AggregatePartner {
  @TypeGraphQL.Field(_type => PartnerCountAggregate, {
    nullable: true,
  })
  _count!: PartnerCountAggregate | null;

  @TypeGraphQL.Field(_type => PartnerAvgAggregate, {
    nullable: true,
  })
  _avg!: PartnerAvgAggregate | null;

  @TypeGraphQL.Field(_type => PartnerSumAggregate, {
    nullable: true,
  })
  _sum!: PartnerSumAggregate | null;

  @TypeGraphQL.Field(_type => PartnerMinAggregate, {
    nullable: true,
  })
  _min!: PartnerMinAggregate | null;

  @TypeGraphQL.Field(_type => PartnerMaxAggregate, {
    nullable: true,
  })
  _max!: PartnerMaxAggregate | null;
}
