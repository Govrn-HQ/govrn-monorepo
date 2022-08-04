import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CategoryActivityTypeListRelationFilter } from '../inputs/CategoryActivityTypeListRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('CategoryActivityWhereInput', {
  isAbstract: true,
})
export class CategoryActivityWhereInput {
  @TypeGraphQL.Field(_type => [CategoryActivityWhereInput], {
    nullable: true,
  })
  AND?: CategoryActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityWhereInput], {
    nullable: true,
  })
  OR?: CategoryActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityWhereInput], {
    nullable: true,
  })
  NOT?: CategoryActivityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeListRelationFilter, {
    nullable: true,
  })
  activityTypes?: CategoryActivityTypeListRelationFilter | undefined;
}
