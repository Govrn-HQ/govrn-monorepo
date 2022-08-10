import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChainTypeAvgAggregate } from '../outputs/ChainTypeAvgAggregate';
import { ChainTypeCountAggregate } from '../outputs/ChainTypeCountAggregate';
import { ChainTypeMaxAggregate } from '../outputs/ChainTypeMaxAggregate';
import { ChainTypeMinAggregate } from '../outputs/ChainTypeMinAggregate';
import { ChainTypeSumAggregate } from '../outputs/ChainTypeSumAggregate';

@TypeGraphQL.ObjectType('ChainTypeGroupBy', {
  isAbstract: true,
})
export class ChainTypeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => ChainTypeCountAggregate, {
    nullable: true,
  })
  _count!: ChainTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeAvgAggregate, {
    nullable: true,
  })
  _avg!: ChainTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeSumAggregate, {
    nullable: true,
  })
  _sum!: ChainTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeMinAggregate, {
    nullable: true,
  })
  _min!: ChainTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => ChainTypeMaxAggregate, {
    nullable: true,
  })
  _max!: ChainTypeMaxAggregate | null;
}
