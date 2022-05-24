import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetCreateManyInput } from "../../../inputs/TwitterTweetCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTwitterTweetArgs {
  @TypeGraphQL.Field(_type => [TwitterTweetCreateManyInput], {
    nullable: false
  })
  data!: TwitterTweetCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
