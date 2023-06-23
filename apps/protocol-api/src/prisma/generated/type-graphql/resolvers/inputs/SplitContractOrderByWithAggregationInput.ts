import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitContractAvgOrderByAggregateInput } from "../inputs/SplitContractAvgOrderByAggregateInput";
import { SplitContractCountOrderByAggregateInput } from "../inputs/SplitContractCountOrderByAggregateInput";
import { SplitContractMaxOrderByAggregateInput } from "../inputs/SplitContractMaxOrderByAggregateInput";
import { SplitContractMinOrderByAggregateInput } from "../inputs/SplitContractMinOrderByAggregateInput";
import { SplitContractSumOrderByAggregateInput } from "../inputs/SplitContractSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SplitContractOrderByWithAggregationInput", {
  isAbstract: true
})
export class SplitContractOrderByWithAggregationInput {
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
  chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tx_hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_split_contract_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SplitContractCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SplitContractCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SplitContractAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SplitContractMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SplitContractMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SplitContractSumOrderByAggregateInput | undefined;
}
