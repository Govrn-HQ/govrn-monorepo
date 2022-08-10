import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetCreateInput } from "../../../inputs/TwitterTweetCreateInput";
import { TwitterTweetUpdateInput } from "../../../inputs/TwitterTweetUpdateInput";
import { TwitterTweetWhereUniqueInput } from "../../../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetWhereUniqueInput;

  @TypeGraphQL.Field(_type => TwitterTweetCreateInput, {
    nullable: false
  })
  create!: TwitterTweetCreateInput;

  @TypeGraphQL.Field(_type => TwitterTweetUpdateInput, {
    nullable: false
  })
  update!: TwitterTweetUpdateInput;
}
