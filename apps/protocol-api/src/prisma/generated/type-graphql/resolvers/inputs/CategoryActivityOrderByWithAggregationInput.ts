import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryActivityAvgOrderByAggregateInput } from "../inputs/CategoryActivityAvgOrderByAggregateInput";
import { CategoryActivityCountOrderByAggregateInput } from "../inputs/CategoryActivityCountOrderByAggregateInput";
import { CategoryActivityMaxOrderByAggregateInput } from "../inputs/CategoryActivityMaxOrderByAggregateInput";
import { CategoryActivityMinOrderByAggregateInput } from "../inputs/CategoryActivityMinOrderByAggregateInput";
import { CategoryActivitySumOrderByAggregateInput } from "../inputs/CategoryActivitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryActivityOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoryActivityOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => CategoryActivityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoryActivityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoryActivityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoryActivityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoryActivityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryActivitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoryActivitySumOrderByAggregateInput | undefined;
}
