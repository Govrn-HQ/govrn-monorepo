import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildContributionAvgOrderByAggregateInput } from "../inputs/GuildContributionAvgOrderByAggregateInput";
import { GuildContributionCountOrderByAggregateInput } from "../inputs/GuildContributionCountOrderByAggregateInput";
import { GuildContributionMaxOrderByAggregateInput } from "../inputs/GuildContributionMaxOrderByAggregateInput";
import { GuildContributionMinOrderByAggregateInput } from "../inputs/GuildContributionMinOrderByAggregateInput";
import { GuildContributionSumOrderByAggregateInput } from "../inputs/GuildContributionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildContributionOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildContributionOrderByWithAggregationInput {
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
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  threshold?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  verified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildContributionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildContributionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildContributionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildContributionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildContributionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildContributionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildContributionSumOrderByAggregateInput | undefined;
}
