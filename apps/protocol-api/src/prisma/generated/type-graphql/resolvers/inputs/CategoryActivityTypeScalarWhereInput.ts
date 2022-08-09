import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('CategoryActivityTypeScalarWhereInput', {
  isAbstract: true,
})
export class CategoryActivityTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarWhereInput], {
    nullable: true,
  })
  AND?: CategoryActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarWhereInput], {
    nullable: true,
  })
  OR?: CategoryActivityTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryActivityTypeScalarWhereInput], {
    nullable: true,
  })
  NOT?: CategoryActivityTypeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true,
  })
  activity_type_id?: IntFilter | undefined;
}
