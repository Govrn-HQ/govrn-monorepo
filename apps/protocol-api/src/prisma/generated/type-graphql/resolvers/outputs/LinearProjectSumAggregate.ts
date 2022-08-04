import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('LinearProjectSumAggregate', {
  isAbstract: true,
})
export class LinearProjectSumAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  id!: number | null;
}
