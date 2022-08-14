import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DiscordUserAvgOrderByAggregateInput } from "../inputs/DiscordUserAvgOrderByAggregateInput";
import { DiscordUserCountOrderByAggregateInput } from "../inputs/DiscordUserCountOrderByAggregateInput";
import { DiscordUserMaxOrderByAggregateInput } from "../inputs/DiscordUserMaxOrderByAggregateInput";
import { DiscordUserMinOrderByAggregateInput } from "../inputs/DiscordUserMinOrderByAggregateInput";
import { DiscordUserSumOrderByAggregateInput } from "../inputs/DiscordUserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DiscordUserOrderByWithAggregationInput", {
  isAbstract: true
})
export class DiscordUserOrderByWithAggregationInput {
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
  display_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discord_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DiscordUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DiscordUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DiscordUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DiscordUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DiscordUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DiscordUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DiscordUserSumOrderByAggregateInput | undefined;
}
