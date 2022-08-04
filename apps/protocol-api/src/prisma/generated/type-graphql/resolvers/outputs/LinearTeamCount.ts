import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';

@TypeGraphQL.ObjectType('LinearTeamCount', {
  isAbstract: true,
})
export class LinearTeamCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  issues!: number;
}
