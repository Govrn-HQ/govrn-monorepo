import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetUpdateInput } from "../../../inputs/TwitterTweetUpdateInput";
import { TwitterTweetWhereUniqueInput } from "../../../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetUpdateInput, {
    nullable: false
  })
  data!: TwitterTweetUpdateInput;

  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetWhereUniqueInput;
}
