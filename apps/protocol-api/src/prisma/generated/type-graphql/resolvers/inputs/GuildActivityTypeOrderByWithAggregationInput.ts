import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildActivityTypeAvgOrderByAggregateInput } from "../inputs/GuildActivityTypeAvgOrderByAggregateInput";
import { GuildActivityTypeCountOrderByAggregateInput } from "../inputs/GuildActivityTypeCountOrderByAggregateInput";
import { GuildActivityTypeMaxOrderByAggregateInput } from "../inputs/GuildActivityTypeMaxOrderByAggregateInput";
import { GuildActivityTypeMinOrderByAggregateInput } from "../inputs/GuildActivityTypeMinOrderByAggregateInput";
import { GuildActivityTypeSumOrderByAggregateInput } from "../inputs/GuildActivityTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GuildActivityTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class GuildActivityTypeOrderByWithAggregationInput {
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
  activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  migrated_from_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GuildActivityTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GuildActivityTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GuildActivityTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GuildActivityTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GuildActivityTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GuildActivityTypeSumOrderByAggregateInput | undefined;
}
