import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildTwitterIntegrationAvgOrderByAggregateInput } from "../inputs/GuildTwitterIntegrationAvgOrderByAggregateInput";
import { GuildTwitterIntegrationCountOrderByAggregateInput } from "../inputs/GuildTwitterIntegrationCountOrderByAggregateInput";
import { GuildTwitterIntegrationMaxOrderByAggregateInput } from "../inputs/GuildTwitterIntegrationMaxOrderByAggregateInput";
import { GuildTwitterIntegrationMinOrderByAggregateInput } from "../inputs/GuildTwitterIntegrationMinOrderByAggregateInput";
import { GuildTwitterIntegrationSumOrderByAggregateInput } from "../inputs/GuildTwitterIntegrationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildTwitterIntegrationOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationOrderByWithAggregationInput {
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
  hashtag?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildTwitterIntegrationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildTwitterIntegrationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildTwitterIntegrationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildTwitterIntegrationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildTwitterIntegrationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildTwitterIntegrationSumOrderByAggregateInput | undefined;
}
