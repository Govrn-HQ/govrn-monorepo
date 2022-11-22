import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TwitterTweetContributionCreateManyInput } from "../../../inputs/TwitterTweetContributionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTwitterTweetContributionArgs {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionCreateManyInput], {
    nullable: false
  })
  data!: TwitterTweetContributionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
