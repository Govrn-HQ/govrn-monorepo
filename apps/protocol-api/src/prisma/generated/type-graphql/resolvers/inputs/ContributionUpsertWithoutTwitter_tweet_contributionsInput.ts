import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateWithoutTwitter_tweet_contributionsInput";
import { ContributionUpdateWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionUpdateWithoutTwitter_tweet_contributionsInput";

@TypeGraphQL.InputType("ContributionUpsertWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class ContributionUpsertWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => ContributionUpdateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  update!: ContributionUpdateWithoutTwitter_tweet_contributionsInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutTwitter_tweet_contributionsInput;
}
