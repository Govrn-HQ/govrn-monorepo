import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateWithoutTwitter_tweetInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateWithoutTwitter_tweetInput, {
    nullable: false
  })
  create!: TwitterTweetContributionCreateWithoutTwitter_tweetInput;
}
