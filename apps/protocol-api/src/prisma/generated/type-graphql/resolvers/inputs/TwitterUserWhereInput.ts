import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { IntNullableFilter } from '../inputs/IntNullableFilter';
import { StringFilter } from '../inputs/StringFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';
import { TwitterTweetListRelationFilter } from '../inputs/TwitterTweetListRelationFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('TwitterUserWhereInput', {
  isAbstract: true,
})
export class TwitterUserWhereInput {
  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true,
  })
  AND?: TwitterUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true,
  })
  OR?: TwitterUserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterUserWhereInput], {
    nullable: true,
  })
  NOT?: TwitterUserWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  twitter_user_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true,
  })
  user_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetListRelationFilter, {
    nullable: true,
  })
  tweets?: TwitterTweetListRelationFilter | undefined;
}
