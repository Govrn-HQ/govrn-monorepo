import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetWhereInput } from "../../../inputs/TwitterTweetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTwitterTweetArgs {
  @TypeGraphQL.Field(_type => TwitterTweetWhereInput, {
    nullable: true
  })
  where?: TwitterTweetWhereInput | undefined;
}
