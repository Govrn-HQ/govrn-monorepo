import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionUpdateWithoutContributionInput } from "../inputs/TwitterTweetContributionUpdateWithoutContributionInput";
import { TwitterTweetContributionWhereUniqueInput } from "../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateWithWhereUniqueWithoutContributionInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateWithoutContributionInput, {
    nullable: false
  })
  data!: TwitterTweetContributionUpdateWithoutContributionInput;
}
