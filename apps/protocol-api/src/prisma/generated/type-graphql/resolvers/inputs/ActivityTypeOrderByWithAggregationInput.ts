import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityTypeAvgOrderByAggregateInput } from "../inputs/ActivityTypeAvgOrderByAggregateInput";
import { ActivityTypeCountOrderByAggregateInput } from "../inputs/ActivityTypeCountOrderByAggregateInput";
import { ActivityTypeMaxOrderByAggregateInput } from "../inputs/ActivityTypeMaxOrderByAggregateInput";
import { ActivityTypeMinOrderByAggregateInput } from "../inputs/ActivityTypeMinOrderByAggregateInput";
import { ActivityTypeSumOrderByAggregateInput } from "../inputs/ActivityTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActivityTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class ActivityTypeOrderByWithAggregationInput {
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
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_activity_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ActivityTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ActivityTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ActivityTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ActivityTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ActivityTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ActivityTypeSumOrderByAggregateInput | undefined;
}
