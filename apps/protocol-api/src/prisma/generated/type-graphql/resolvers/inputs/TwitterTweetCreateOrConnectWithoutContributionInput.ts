import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateWithoutContributionInput } from '../inputs/TwitterTweetCreateWithoutContributionInput';
import { TwitterTweetWhereUniqueInput } from '../inputs/TwitterTweetWhereUniqueInput';

@TypeGraphQL.InputType('TwitterTweetCreateOrConnectWithoutContributionInput', {
  isAbstract: true,
})
export class TwitterTweetCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false,
  })
  where!: TwitterTweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutContributionInput, {
    nullable: false,
  })
  create!: TwitterTweetCreateWithoutContributionInput;
}
