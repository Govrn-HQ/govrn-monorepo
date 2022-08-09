import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeWhereInput } from '../inputs/CategoryActivityTypeWhereInput';

@TypeGraphQL.InputType('CategoryActivityTypeListRelationFilter', {
  isAbstract: true,
})
export class CategoryActivityTypeListRelationFilter {
  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true,
  })
  every?: CategoryActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true,
  })
  some?: CategoryActivityTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeWhereInput, {
    nullable: true,
  })
  none?: CategoryActivityTypeWhereInput | undefined;
}
