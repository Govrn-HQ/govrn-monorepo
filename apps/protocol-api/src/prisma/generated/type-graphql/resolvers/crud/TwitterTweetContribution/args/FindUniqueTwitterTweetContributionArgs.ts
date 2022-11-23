import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionWhereUniqueInput } from "../../../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;
}
