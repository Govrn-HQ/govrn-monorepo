import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinearJobRunAvgOrderByAggregateInput } from "../inputs/LinearJobRunAvgOrderByAggregateInput";
import { LinearJobRunCountOrderByAggregateInput } from "../inputs/LinearJobRunCountOrderByAggregateInput";
import { LinearJobRunMaxOrderByAggregateInput } from "../inputs/LinearJobRunMaxOrderByAggregateInput";
import { LinearJobRunMinOrderByAggregateInput } from "../inputs/LinearJobRunMinOrderByAggregateInput";
import { LinearJobRunSumOrderByAggregateInput } from "../inputs/LinearJobRunSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LinearJobRunOrderByWithAggregationInput", {
  isAbstract: true
})
export class LinearJobRunOrderByWithAggregationInput {
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
  completedDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LinearJobRunCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LinearJobRunAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LinearJobRunMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LinearJobRunMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LinearJobRunSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LinearJobRunSumOrderByAggregateInput | undefined;
}
