import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TwitterTweetContributionListRelationFilter } from "../inputs/TwitterTweetContributionListRelationFilter";
import { TwitterUserRelationFilter } from "../inputs/TwitterUserRelationFilter";

@TypeGraphQL.InputType("TwitterTweetWhereInput", {
  isAbstract: true
})
export class TwitterTweetWhereInput {
  @TypeGraphQL.Field(_type => [TwitterTweetWhereInput], {
    nullable: true
  })
  AND?: TwitterTweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereInput], {
    nullable: true
  })
  OR?: TwitterTweetWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetWhereInput], {
    nullable: true
  })
  NOT?: TwitterTweetWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  twitter_user_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterUserRelationFilter, {
    nullable: true
  })
  twitter_user?: TwitterUserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetContributionListRelationFilter, {
    nullable: true
  })
  twitter_tweet_contributions?: TwitterTweetContributionListRelationFilter | undefined;
}
