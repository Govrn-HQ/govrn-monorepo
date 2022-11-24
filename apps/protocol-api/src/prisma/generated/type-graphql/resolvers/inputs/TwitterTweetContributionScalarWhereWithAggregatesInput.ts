import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TwitterTweetContributionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TwitterTweetContributionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TwitterTweetContributionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TwitterTweetContributionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TwitterTweetContributionScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  contribution_id?: IntWithAggregatesFilter | undefined;
}
