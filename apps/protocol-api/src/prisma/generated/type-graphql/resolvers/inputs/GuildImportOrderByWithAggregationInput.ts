import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportAvgOrderByAggregateInput } from "../inputs/GuildImportAvgOrderByAggregateInput";
import { GuildImportCountOrderByAggregateInput } from "../inputs/GuildImportCountOrderByAggregateInput";
import { GuildImportMaxOrderByAggregateInput } from "../inputs/GuildImportMaxOrderByAggregateInput";
import { GuildImportMinOrderByAggregateInput } from "../inputs/GuildImportMinOrderByAggregateInput";
import { GuildImportSumOrderByAggregateInput } from "../inputs/GuildImportSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildImportOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildImportOrderByWithAggregationInput {
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
  authentication_token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildImportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildImportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildImportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildImportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildImportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildImportSumOrderByAggregateInput | undefined;
}
