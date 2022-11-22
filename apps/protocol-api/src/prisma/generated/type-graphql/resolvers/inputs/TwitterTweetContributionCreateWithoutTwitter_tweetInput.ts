import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutTwitter_tweet_contributionsInput;
}
