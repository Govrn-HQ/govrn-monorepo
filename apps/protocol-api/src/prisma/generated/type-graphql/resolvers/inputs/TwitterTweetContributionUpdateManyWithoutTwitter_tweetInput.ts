import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope } from "../inputs/TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope";
import { TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput";
import { TwitterTweetContributionCreateWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionCreateWithoutTwitter_tweetInput";
import { TwitterTweetContributionScalarWhereInput } from "../inputs/TwitterTweetContributionScalarWhereInput";
import { TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput";
import { TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput";
import { TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput } from "../inputs/TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateManyWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateWithoutTwitter_tweetInput], {
    nullable: true
  })
  create?: TwitterTweetContributionCreateWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput], {
    nullable: true
  })
  connectOrCreate?: TwitterTweetContributionCreateOrConnectWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput], {
    nullable: true
  })
  upsert?: TwitterTweetContributionUpsertWithWhereUniqueWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope, {
    nullable: true
  })
  createMany?: TwitterTweetContributionCreateManyTwitter_tweetInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  set?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  delete?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereUniqueInput], {
    nullable: true
  })
  connect?: TwitterTweetContributionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput], {
    nullable: true
  })
  update?: TwitterTweetContributionUpdateWithWhereUniqueWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput], {
    nullable: true
  })
  updateMany?: TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TwitterTweetContributionScalarWhereInput[] | undefined;
}
