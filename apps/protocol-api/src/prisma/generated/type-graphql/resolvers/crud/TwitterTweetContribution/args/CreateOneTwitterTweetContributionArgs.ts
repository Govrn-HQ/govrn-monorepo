import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionCreateInput } from "../../../inputs/TwitterTweetContributionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionCreateInput, {
    nullable: false
  })
  data!: TwitterTweetContributionCreateInput;
}
