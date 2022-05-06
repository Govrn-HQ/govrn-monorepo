import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityTypeAvgOrderByAggregateInput } from "../inputs/CategoryActivityTypeAvgOrderByAggregateInput";
import { CategoryActivityTypeCountOrderByAggregateInput } from "../inputs/CategoryActivityTypeCountOrderByAggregateInput";
import { CategoryActivityTypeMaxOrderByAggregateInput } from "../inputs/CategoryActivityTypeMaxOrderByAggregateInput";
import { CategoryActivityTypeMinOrderByAggregateInput } from "../inputs/CategoryActivityTypeMinOrderByAggregateInput";
import { CategoryActivityTypeSumOrderByAggregateInput } from "../inputs/CategoryActivityTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryActivityTypeOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoryActivityTypeOrderByWithAggregationInput {
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
  category_activity_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  activity_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoryActivityTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoryActivityTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoryActivityTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoryActivityTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoryActivityTypeSumOrderByAggregateInput | undefined;
}
