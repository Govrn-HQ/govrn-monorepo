import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionUpdateInput } from "../../../inputs/TwitterTweetContributionUpdateInput";
import { TwitterTweetContributionWhereUniqueInput } from "../../../inputs/TwitterTweetContributionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateInput, {
    nullable: false
  })
  data!: TwitterTweetContributionUpdateInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetContributionWhereUniqueInput;
}
