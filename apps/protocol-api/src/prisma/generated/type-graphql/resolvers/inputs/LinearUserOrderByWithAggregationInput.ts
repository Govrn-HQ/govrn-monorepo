import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearUserAvgOrderByAggregateInput } from "../inputs/LinearUserAvgOrderByAggregateInput";
import { LinearUserCountOrderByAggregateInput } from "../inputs/LinearUserCountOrderByAggregateInput";
import { LinearUserMaxOrderByAggregateInput } from "../inputs/LinearUserMaxOrderByAggregateInput";
import { LinearUserMinOrderByAggregateInput } from "../inputs/LinearUserMinOrderByAggregateInput";
import { LinearUserSumOrderByAggregateInput } from "../inputs/LinearUserSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LinearUserOrderByWithAggregationInput", {
  isAbstract: true
})
export class LinearUserOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  displayName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  linear_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LinearUserCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LinearUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LinearUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LinearUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LinearUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearUserSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LinearUserSumOrderByAggregateInput | undefined;
}
