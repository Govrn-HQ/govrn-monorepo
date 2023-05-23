import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildAvgOrderByAggregateInput } from "../inputs/GuildAvgOrderByAggregateInput";
import { GuildCountOrderByAggregateInput } from "../inputs/GuildCountOrderByAggregateInput";
import { GuildMaxOrderByAggregateInput } from "../inputs/GuildMaxOrderByAggregateInput";
import { GuildMinOrderByAggregateInput } from "../inputs/GuildMinOrderByAggregateInput";
import { GuildSumOrderByAggregateInput } from "../inputs/GuildSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_reporting_channel?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  verification_setting_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  twitter_integration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildSumOrderByAggregateInput | undefined;
}
