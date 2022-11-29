import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateWithoutTwitter_tweet_contributionsInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: false
  })
  where!: ContributionWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContributionCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: false
  })
  create!: ContributionCreateWithoutTwitter_tweet_contributionsInput;
}
