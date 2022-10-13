import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainAvgOrderByAggregateInput } from "../inputs/ChainAvgOrderByAggregateInput";
import { ChainCountOrderByAggregateInput } from "../inputs/ChainCountOrderByAggregateInput";
import { ChainMaxOrderByAggregateInput } from "../inputs/ChainMaxOrderByAggregateInput";
import { ChainMinOrderByAggregateInput } from "../inputs/ChainMinOrderByAggregateInput";
import { ChainSumOrderByAggregateInput } from "../inputs/ChainSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ChainOrderByWithAggregationInput", {
  isAbstract: true
})
export class ChainOrderByWithAggregationInput {
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
  chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ChainCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ChainCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ChainAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ChainMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ChainMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChainSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ChainSumOrderByAggregateInput | undefined;
}
