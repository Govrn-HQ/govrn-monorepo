import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateManyTwitter_userInput } from '../inputs/TwitterTweetCreateManyTwitter_userInput';

@TypeGraphQL.InputType('TwitterTweetCreateManyTwitter_userInputEnvelope', {
  isAbstract: true,
})
export class TwitterTweetCreateManyTwitter_userInputEnvelope {
  @TypeGraphQL.Field(_type => [TwitterTweetCreateManyTwitter_userInput], {
    nullable: false,
  })
  data!: TwitterTweetCreateManyTwitter_userInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
