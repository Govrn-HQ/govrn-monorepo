import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionCreateWithoutContributionInput } from "../inputs/TwitterTweetContributionCreateWithoutContributionInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionCreateOrConnectWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetContributionCreateOrConnectWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateWithoutContributionInput, {
    nullable: false
  })
  create!: TwitterTweetContributionCreateWithoutContributionInput;
}
