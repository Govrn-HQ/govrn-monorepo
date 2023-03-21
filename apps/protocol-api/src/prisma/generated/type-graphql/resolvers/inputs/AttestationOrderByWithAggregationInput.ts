import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationAvgOrderByAggregateInput } from "../inputs/AttestationAvgOrderByAggregateInput";
import { AttestationCountOrderByAggregateInput } from "../inputs/AttestationCountOrderByAggregateInput";
import { AttestationMaxOrderByAggregateInput } from "../inputs/AttestationMaxOrderByAggregateInput";
import { AttestationMinOrderByAggregateInput } from "../inputs/AttestationMinOrderByAggregateInput";
import { AttestationSumOrderByAggregateInput } from "../inputs/AttestationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AttestationOrderByWithAggregationInput", {
  isAbstract: true
})
export class AttestationOrderByWithAggregationInput {
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
  confidence_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contribution_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attestation_status_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AttestationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AttestationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AttestationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AttestationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AttestationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AttestationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AttestationSumOrderByAggregateInput | undefined;
}
