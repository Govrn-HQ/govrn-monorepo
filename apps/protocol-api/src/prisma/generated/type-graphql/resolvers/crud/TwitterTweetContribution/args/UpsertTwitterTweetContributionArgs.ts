import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionCreateInput } from "../../../inputs/TwitterTweetContributionCreateInput";
import { TwitterTweetContributionUpdateInput } from "../../../inputs/TwitterTweetContributionUpdateInput";
import { TwitterTweetContributionWhereUniqueInput } from "../../../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateInput, {
    nullable: false
  })
  create!: TwitterTweetContributionCreateInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateInput, {
    nullable: false
  })
  update!: TwitterTweetContributionUpdateInput;
}
