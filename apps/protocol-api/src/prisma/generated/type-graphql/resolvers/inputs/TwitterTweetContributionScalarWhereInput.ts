import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TwitterTweetContributionScalarWhereInput", {
  isAbstract: true
})
export class TwitterTweetContributionScalarWhereInput {
  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereInput], {
    nullable: true
  })
  AND?: TwitterTweetContributionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereInput], {
    nullable: true
  })
  OR?: TwitterTweetContributionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TwitterTweetContributionScalarWhereInput], {
    nullable: true
  })
  NOT?: TwitterTweetContributionScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  contribution_id?: IntFilter | undefined;
}
