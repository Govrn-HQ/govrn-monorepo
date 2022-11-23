import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope } from "../inputs/TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope";
import { TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput";
import { TwitterTweetContributionCreateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateWithoutTwitter_tweetInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateNestedManyWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateWithoutTwitter_tweetInput], {
    nullable: true
  })
  create?: TwitterTweetContributionCreateWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput], {
    nullable: true
  })
  connectOrCreate?: TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterTweetContributionWhereUniqueInput[] | undefined;
}
