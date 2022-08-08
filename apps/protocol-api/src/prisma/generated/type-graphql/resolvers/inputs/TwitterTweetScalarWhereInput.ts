import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { IntNullableFilter } from '../inputs/IntNullableFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('TwitterTweetScalarWhereInput', {
  isAbstract: true,
})
export class TwitterTweetScalarWhereInput {
  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereInput], {
    nullable: true,
  })
  AND?: TwitterTweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereInput], {
    nullable: true,
  })
  OR?: TwitterTweetScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereInput], {
    nullable: true,
  })
  NOT?: TwitterTweetScalarWhereInput[] | undefined;

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
  twitter_tweet_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true,
  })
  twitter_user_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true,
  })
  contribution_id?: IntNullableFilter | undefined;
}
