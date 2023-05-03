import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CanonicalGuildActivityTypeAvgOrderByAggregateInput } from "../inputs/CanonicalGuildActivityTypeAvgOrderByAggregateInput";
import { CanonicalGuildActivityTypeCountOrderByAggregateInput } from "../inputs/CanonicalGuildActivityTypeCountOrderByAggregateInput";
import { CanonicalGuildActivityTypeMaxOrderByAggregateInput } from "../inputs/CanonicalGuildActivityTypeMaxOrderByAggregateInput";
import { CanonicalGuildActivityTypeMinOrderByAggregateInput } from "../inputs/CanonicalGuildActivityTypeMinOrderByAggregateInput";
import { CanonicalGuildActivityTypeSumOrderByAggregateInput } from "../inputs/CanonicalGuildActivityTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CanonicalGuildActivityTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class CanonicalGuildActivityTypeOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guild_activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CanonicalGuildActivityTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CanonicalGuildActivityTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CanonicalGuildActivityTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CanonicalGuildActivityTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CanonicalGuildActivityTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CanonicalGuildActivityTypeSumOrderByAggregateInput | undefined;
}
