import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput";
import { TwitterTweetCreateNestedOneWithoutTwitter_tweet_contributionsInput } from "../inputs/TwitterTweetCreateNestedOneWithoutTwitter_tweet_contributionsInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetCreateNestedOneWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  twitter_tweet!: TwitterTweetCreateNestedOneWithoutTwitter_tweet_contributionsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput;
}
