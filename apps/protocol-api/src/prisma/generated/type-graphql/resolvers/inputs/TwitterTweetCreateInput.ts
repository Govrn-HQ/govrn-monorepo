import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ContributionCreateNestedOneWithoutTweetInput } from '../inputs/ContributionCreateNestedOneWithoutTweetInput';
import { TwitterUserCreateNestedOneWithoutTweetsInput } from '../inputs/TwitterUserCreateNestedOneWithoutTweetsInput';

@TypeGraphQL.InputType('TwitterTweetCreateInput', {
  isAbstract: true,
})
export class TwitterTweetCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  twitter_tweet_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  text!: string;

  @TypeGraphQL.Field(_type => TwitterUserCreateNestedOneWithoutTweetsInput, {
    nullable: true,
  })
  twitter_user?: TwitterUserCreateNestedOneWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutTweetInput, {
    nullable: true,
  })
  contribution?: ContributionCreateNestedOneWithoutTweetInput | undefined;
}
