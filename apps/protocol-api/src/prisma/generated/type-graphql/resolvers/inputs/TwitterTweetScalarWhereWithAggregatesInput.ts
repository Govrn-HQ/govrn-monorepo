import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TwitterTweetScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TwitterTweetScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TwitterTweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TwitterTweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TwitterTweetScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  twitter_tweet_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  text?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  twitter_user_id?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  twitter_tweet_contribution_ids?: IntNullableListFilter | undefined;
}
