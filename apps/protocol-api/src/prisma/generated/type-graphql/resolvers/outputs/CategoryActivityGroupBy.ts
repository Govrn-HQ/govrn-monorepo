import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityAvgAggregate } from '../outputs/CategoryActivityAvgAggregate';
import { CategoryActivityCountAggregate } from '../outputs/CategoryActivityCountAggregate';
import { CategoryActivityMaxAggregate } from '../outputs/CategoryActivityMaxAggregate';
import { CategoryActivityMinAggregate } from '../outputs/CategoryActivityMinAggregate';
import { CategoryActivitySumAggregate } from '../outputs/CategoryActivitySumAggregate';

@TypeGraphQL.ObjectType('CategoryActivityGroupBy', {
  isAbstract: true,
})
export class CategoryActivityGroupBy {
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

  @TypeGraphQL.Field(_type => CategoryActivityCountAggregate, {
    nullable: true,
  })
  _count!: CategoryActivityCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityAvgAggregate, {
    nullable: true,
  })
  _avg!: CategoryActivityAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivitySumAggregate, {
    nullable: true,
  })
  _sum!: CategoryActivitySumAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityMinAggregate, {
    nullable: true,
  })
  _min!: CategoryActivityMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoryActivityMaxAggregate, {
    nullable: true,
  })
  _max!: CategoryActivityMaxAggregate | null;
}
