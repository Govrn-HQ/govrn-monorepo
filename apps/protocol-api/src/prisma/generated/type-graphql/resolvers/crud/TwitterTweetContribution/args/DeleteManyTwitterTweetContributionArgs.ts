import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionWhereInput } from "../../../inputs/TwitterTweetContributionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  where?: TwitterTweetContributionWhereInput | undefined;
}
