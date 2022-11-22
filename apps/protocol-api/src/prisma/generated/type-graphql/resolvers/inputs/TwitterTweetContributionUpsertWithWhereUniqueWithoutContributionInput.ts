import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateWithoutContributionInput";
import { TwitterTweetContributionUpdateWithoutContributionInput } from "../inputs/TwitterTweetContributionUpdateWithoutContributionInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpsertWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateWithoutContributionInput, {
    nullable: false
  })
  update!: TwitterTweetContributionUpdateWithoutContributionInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateWithoutContributionInput, {
    nullable: false
  })
  create!: TwitterTweetContributionCreateWithoutContributionInput;
}
