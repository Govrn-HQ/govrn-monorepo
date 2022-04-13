import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionStatusAvgOrderByAggregateInput } from "../inputs/ContributionStatusAvgOrderByAggregateInput";
import { ContributionStatusCountOrderByAggregateInput } from "../inputs/ContributionStatusCountOrderByAggregateInput";
import { ContributionStatusMaxOrderByAggregateInput } from "../inputs/ContributionStatusMaxOrderByAggregateInput";
import { ContributionStatusMinOrderByAggregateInput } from "../inputs/ContributionStatusMinOrderByAggregateInput";
import { ContributionStatusSumOrderByAggregateInput } from "../inputs/ContributionStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContributionStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class ContributionStatusOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ContributionStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContributionStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContributionStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContributionStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContributionStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContributionStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContributionStatusSumOrderByAggregateInput | undefined;
}
