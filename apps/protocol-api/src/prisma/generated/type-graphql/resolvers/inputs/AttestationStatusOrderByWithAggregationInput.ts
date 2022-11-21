import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusAvgOrderByAggregateInput } from "../inputs/AttestationStatusAvgOrderByAggregateInput";
import { AttestationStatusCountOrderByAggregateInput } from "../inputs/AttestationStatusCountOrderByAggregateInput";
import { AttestationStatusMaxOrderByAggregateInput } from "../inputs/AttestationStatusMaxOrderByAggregateInput";
import { AttestationStatusMinOrderByAggregateInput } from "../inputs/AttestationStatusMinOrderByAggregateInput";
import { AttestationStatusSumOrderByAggregateInput } from "../inputs/AttestationStatusSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AttestationStatusOrderByWithAggregationInput", {
  isAbstract: true
})
export class AttestationStatusOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AttestationStatusCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AttestationStatusCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AttestationStatusAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AttestationStatusMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AttestationStatusMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AttestationStatusSumOrderByAggregateInput | undefined;
}
