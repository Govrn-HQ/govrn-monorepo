import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { LinearProjectWhereInput } from '../inputs/LinearProjectWhereInput';

@TypeGraphQL.InputType('LinearProjectRelationFilter', {
  isAbstract: true,
})
export class LinearProjectRelationFilter {
  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true,
  })
  is?: LinearProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => LinearProjectWhereInput, {
    nullable: true,
  })
  isNot?: LinearProjectWhereInput | undefined;
}
