import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetCreatetwitter_tweet_contribution_idsInput } from "../inputs/TwitterTweetCreatetwitter_tweet_contribution_idsInput";
import { TwitterUserCreateNestedOneWithoutTweetsInput } from "../inputs/TwitterUserCreateNestedOneWithoutTweetsInput";

@TypeGraphQL.InputType("TwitterTweetCreateWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class TwitterTweetCreateWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  twitter_tweet_id!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => TwitterUserCreateNestedOneWithoutTweetsInput, {
    nullable: true
  })
  twitter_user?: TwitterUserCreateNestedOneWithoutTweetsInput | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreatetwitter_tweet_contribution_idsInput, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: TwitterTweetCreatetwitter_tweet_contribution_idsInput | undefined;
}
