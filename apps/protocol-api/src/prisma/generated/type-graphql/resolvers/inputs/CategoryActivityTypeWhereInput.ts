import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ActivityTypeRelationFilter } from '../inputs/ActivityTypeRelationFilter';
import { CategoryActivityRelationFilter } from '../inputs/CategoryActivityRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('CategoryActivityTypeWhereInput', {
  isAbstract: true,
})
export class CategoryActivityTypeWhereInput {
  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereInput], {
    nullable: true,
  })
  AND?: CategoryActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereInput], {
    nullable: true,
  })
  OR?: CategoryActivityTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeWhereInput], {
    nullable: true,
  })
  NOT?: CategoryActivityTypeWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  category_activity_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityRelationFilter, {
    nullable: true,
  })
  category_activity?: CategoryActivityRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  activity_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeRelationFilter, {
    nullable: true,
  })
  activity_type?: ActivityTypeRelationFilter | undefined;
}
