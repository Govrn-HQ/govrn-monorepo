import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateWithoutTwitter_userInput } from '../inputs/TwitterTweetCreateWithoutTwitter_userInput';
import { TwitterTweetUpdateWithoutTwitter_userInput } from '../inputs/TwitterTweetUpdateWithoutTwitter_userInput';
import { TwitterTweetWhereUniqueInput } from '../inputs/TwitterTweetWhereUniqueInput';

@TypeGraphQL.InputType(
  'TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput',
  {
    isAbstract: true,
  },
)
export class TwitterTweetUpsertWithWhereUniqueWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterTweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutTwitter_userInput, {
    nullable: false,
  })
  update!: TwitterTweetUpdateWithoutTwitter_userInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutTwitter_userInput, {
    nullable: false,
  })
  create!: TwitterTweetCreateWithoutTwitter_userInput;
}
