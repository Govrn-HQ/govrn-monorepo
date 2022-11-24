import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateWithoutTwitter_tweetInput";
import { TwitterTweetContributionUpdateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpdateWithoutTwitter_tweetInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateWithoutTwitter_tweetInput, {
    nullable: false
  })
  update!: TwitterTweetContributionUpdateWithoutTwitter_tweetInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateWithoutTwitter_tweetInput, {
    nullable: false
  })
  create!: TwitterTweetContributionCreateWithoutTwitter_tweetInput;
}
