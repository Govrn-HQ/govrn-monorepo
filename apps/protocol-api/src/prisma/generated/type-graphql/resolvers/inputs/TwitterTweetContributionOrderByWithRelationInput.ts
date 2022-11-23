import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionOrderByWithRelationInput } from "../inputs/ContributionOrderByWithRelationInput";
import { TwitterTweetOrderByWithRelationInput } from "../inputs/TwitterTweetOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TwitterTweetContributionOrderByWithRelationInput", {
  isAbstract: true
})
export class TwitterTweetContributionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter_tweet_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TwitterTweetOrderByWithRelationInput, {
    nullable: true
  })
  twitter_tweet?: TwitterTweetOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContributionOrderByWithRelationInput, {
    nullable: true
  })
  contribution?: ContributionOrderByWithRelationInput | undefined;
}
