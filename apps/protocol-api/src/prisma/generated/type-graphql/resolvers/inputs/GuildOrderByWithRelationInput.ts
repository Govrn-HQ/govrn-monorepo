import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeOrderByRelationAggregateInput } from "../inputs/GuildActivityTypeOrderByRelationAggregateInput";
import { GuildContributionOrderByRelationAggregateInput } from "../inputs/GuildContributionOrderByRelationAggregateInput";
import { GuildUserOrderByRelationAggregateInput } from "../inputs/GuildUserOrderByRelationAggregateInput";
import { TwitterAccountOrderByWithRelationInput } from "../inputs/TwitterAccountOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildOrderByWithRelationInput", {
  isAbstract: true
})
export class GuildOrderByWithRelationInput {
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
  discord_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  congrats_channel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  logo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildContributionOrderByRelationAggregateInput, {
    nullable: true
  })
  contributions?: GuildContributionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildUserOrderByRelationAggregateInput, {
    nullable: true
  })
  users?: GuildUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TwitterAccountOrderByWithRelationInput, {
    nullable: true
  })
  twitter_account?: TwitterAccountOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeOrderByRelationAggregateInput, {
    nullable: true
  })
  activity_type?: GuildActivityTypeOrderByRelationAggregateInput | undefined;
}
