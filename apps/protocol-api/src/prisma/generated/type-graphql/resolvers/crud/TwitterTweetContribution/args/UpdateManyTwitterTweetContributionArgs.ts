import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionUpdateManyMutationInput } from "../../../inputs/TwitterTweetContributionUpdateManyMutationInput";
import { TwitterTweetContributionWhereInput } from "../../../inputs/TwitterTweetContributionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterTweetContributionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionWhereInput, {
    nullable: true
  })
  where?: TwitterTweetContributionWhereInput | undefined;
}
