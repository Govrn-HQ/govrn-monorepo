import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionRelationFilter } from "../inputs/ContributionRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  contribution_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ContributionRelationFilter, {
    nullable: true
  })
  contribution?: ContributionRelationFilter | undefined;
}
