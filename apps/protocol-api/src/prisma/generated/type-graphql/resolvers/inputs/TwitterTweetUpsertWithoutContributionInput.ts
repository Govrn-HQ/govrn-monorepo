import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { TwitterTweetCreateWithoutContributionInput } from '../inputs/TwitterTweetCreateWithoutContributionInput';
import { TwitterTweetUpdateWithoutContributionInput } from '../inputs/TwitterTweetUpdateWithoutContributionInput';

@TypeGraphQL.InputType('TwitterTweetUpsertWithoutContributionInput', {
  isAbstract: true,
})
export class TwitterTweetUpsertWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetUpdateWithoutContributionInput, {
    nullable: false,
  })
  update!: TwitterTweetUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateWithoutContributionInput, {
    nullable: false,
  })
  create!: TwitterTweetCreateWithoutContributionInput;
}
