import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusAvgOrderByAggregateInput } from "../inputs/GuildImportStatusAvgOrderByAggregateInput";
import { GuildImportStatusCountOrderByAggregateInput } from "../inputs/GuildImportStatusCountOrderByAggregateInput";
import { GuildImportStatusMaxOrderByAggregateInput } from "../inputs/GuildImportStatusMaxOrderByAggregateInput";
import { GuildImportStatusMinOrderByAggregateInput } from "../inputs/GuildImportStatusMinOrderByAggregateInput";
import { GuildImportStatusSumOrderByAggregateInput } from "../inputs/GuildImportStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildImportStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildImportStatusOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildImportStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildImportStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildImportStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildImportStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildImportStatusSumOrderByAggregateInput | undefined;
}
