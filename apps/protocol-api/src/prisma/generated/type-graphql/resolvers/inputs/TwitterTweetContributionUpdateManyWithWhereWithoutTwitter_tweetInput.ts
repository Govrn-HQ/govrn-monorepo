import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TwitterTweetContributionScalarWhereInput } from "../inputs/TwitterTweetContributionScalarWhereInput";
import { TwitterTweetContributionUpdateManyMutationInput } from "../inputs/TwitterTweetContributionUpdateManyMutationInput";

@TypeGraphQL.InputType("TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput", {
  isAbstract: true
})
export class TwitterTweetContributionUpdateManyWithWhereWithoutTwitter_tweetInput {
  @TypeGraphQL.Field(_type => TwitterTweetContributionScalarWhereInput, {
    nullable: false
  })
  where!: TwitterTweetContributionScalarWhereInput;

  @TypeGraphQL.Field(_type => TwitterTweetContributionUpdateManyMutationInput, {
    nullable: false
  })
  data!: TwitterTweetContributionUpdateManyMutationInput;
}
