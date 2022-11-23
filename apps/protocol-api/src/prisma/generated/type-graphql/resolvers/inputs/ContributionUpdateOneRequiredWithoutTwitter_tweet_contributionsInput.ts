import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput";
import { ContributionCreateWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionCreateWithoutTwitter_tweet_contributionsInput";
import { ContributionUpdateWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionUpdateWithoutTwitter_tweet_contributionsInput";
import { ContributionUpsertWithoutTwitter_tweet_contributionsInput } from "../inputs/ContributionUpsertWithoutTwitter_tweet_contributionsInput";
import { ContributionWhereUniqueInput } from "../inputs/ContributionWhereUniqueInput";

@TypeGraphQL.InputType("ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput", {
  isAbstract: true
})
export class ContributionUpdateOneRequiredWithoutTwitter_tweet_contributionsInput {
  @TypeGraphQL.Field(_type => ContributionCreateWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  create?: ContributionCreateWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  connectOrCreate?: ContributionCreateOrConnectWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpsertWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  upsert?: ContributionUpsertWithoutTwitter_tweet_contributionsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionWhereUniqueInput, {
    nullable: true
  })
  connect?: ContributionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateWithoutTwitter_tweet_contributionsInput, {
    nullable: true
  })
  update?: ContributionUpdateWithoutTwitter_tweet_contributionsInput | undefined;
}
