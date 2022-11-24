import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TwitterTweetRelationFilter } from "../inputs/TwitterTweetRelationFilter";

@TypeGraphQL.InputType("TwitterTweetContributionWhereInput", {
  isAbstract: true
})
export class TwitterTweetContributionWhereInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereInput], {
    nullable: true
  })
  AND?: TwitterTweetContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereInput], {
    nullable: true
  })
  OR?: TwitterTweetContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionWhereInput], {
    nullable: true
  })
  NOT?: TwitterTweetContributionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  twitter_tweet_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetRelationFilter, {
    nullable: true
  })
  twitter_tweet?: TwitterTweetRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;
}
