import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserSplitContractAvgOrderByAggregateInput } from "../inputs/UserSplitContractAvgOrderByAggregateInput";
import { UserSplitContractCountOrderByAggregateInput } from "../inputs/UserSplitContractCountOrderByAggregateInput";
import { UserSplitContractMaxOrderByAggregateInput } from "../inputs/UserSplitContractMaxOrderByAggregateInput";
import { UserSplitContractMinOrderByAggregateInput } from "../inputs/UserSplitContractMinOrderByAggregateInput";
import { UserSplitContractSumOrderByAggregateInput } from "../inputs/UserSplitContractSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserSplitContractOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserSplitContractOrderByWithAggregationInput {
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
  user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserSplitContractCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UserSplitContractAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserSplitContractMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserSplitContractMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UserSplitContractSumOrderByAggregateInput | undefined;
}
