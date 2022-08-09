import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntNullableWithAggregatesFilter } from '../inputs/IntNullableWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringNullableWithAggregatesFilter } from '../inputs/StringNullableWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('TwitterUserScalarWhereWithAggregatesInput', {
  isAbstract: true,
})
export class TwitterUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: TwitterUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: TwitterUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: TwitterUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  twitter_user_id?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  username?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true,
  })
  user_id?: IntNullableWithAggregatesFilter | undefined;
}
