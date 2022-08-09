import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearTeamWhereInput } from '../inputs/LinearTeamWhereInput';

@TypeGraphQL.InputType('LinearTeamRelationFilter', {
  isAbstract: true,
})
export class LinearTeamRelationFilter {
  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true,
  })
  is?: LinearTeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearTeamWhereInput, {
    nullable: true,
  })
  isNot?: LinearTeamWhereInput | undefined;
}
