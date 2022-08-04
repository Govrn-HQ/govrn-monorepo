import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('UserAvgAggregate', {
  isAbstract: true,
})
export class UserAvgAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true,
  })
  chain_type_id!: number | null;
}
