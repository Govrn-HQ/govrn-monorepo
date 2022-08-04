import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityWhereInput } from '../inputs/CategoryActivityWhereInput';

@TypeGraphQL.InputType('CategoryActivityRelationFilter', {
  isAbstract: true,
})
export class CategoryActivityRelationFilter {
  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true,
  })
  is?: CategoryActivityWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityWhereInput, {
    nullable: true,
  })
  isNot?: CategoryActivityWhereInput | undefined;
}
