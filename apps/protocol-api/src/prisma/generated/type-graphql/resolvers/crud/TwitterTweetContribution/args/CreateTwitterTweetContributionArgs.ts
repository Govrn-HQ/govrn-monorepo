import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionCreateInput } from "../../../inputs/TwitterTweetContributionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateInput, {
    nullable: false
  })
  data!: TwitterTweetContributionCreateInput;
}
