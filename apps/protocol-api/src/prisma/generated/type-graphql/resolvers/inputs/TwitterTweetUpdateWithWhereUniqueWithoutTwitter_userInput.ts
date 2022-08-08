import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetUpdateWithoutTwitter_userInput } from '../inputs/TwitterTweetUpdateWithoutTwitter_userInput';
import { TwitterTweetWhereUniqueInput } from '../inputs/TwitterTweetWhereUniqueInput';

@TypeGraphQL.InputType(
  'TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput',
  {
    isAbstract: true,
  },
)
export class TwitterTweetUpdateWithWhereUniqueWithoutTwitter_userInput {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterTweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutTwitter_userInput, {
    nullable: false,
  })
  data!: TwitterTweetUpdateWithoutTwitter_userInput;
}
