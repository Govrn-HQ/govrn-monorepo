import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetWhereUniqueInput } from "../../../inputs/TwitterTweetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereUniqueInput, {
    nullable: false
  })
  where!: TwitterTweetWhereUniqueInput;
}
