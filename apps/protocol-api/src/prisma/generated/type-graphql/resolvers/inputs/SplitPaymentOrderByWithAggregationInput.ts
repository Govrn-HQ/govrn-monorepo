import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SplitPaymentAvgOrderByAggregateInput } from "../inputs/SplitPaymentAvgOrderByAggregateInput";
import { SplitPaymentCountOrderByAggregateInput } from "../inputs/SplitPaymentCountOrderByAggregateInput";
import { SplitPaymentMaxOrderByAggregateInput } from "../inputs/SplitPaymentMaxOrderByAggregateInput";
import { SplitPaymentMinOrderByAggregateInput } from "../inputs/SplitPaymentMinOrderByAggregateInput";
import { SplitPaymentSumOrderByAggregateInput } from "../inputs/SplitPaymentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SplitPaymentOrderByWithAggregationInput", {
  isAbstract: true
})
export class SplitPaymentOrderByWithAggregationInput {
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
  token_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tx_hash?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sender_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recipient_address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sender_user_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  split_contract_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SplitPaymentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SplitPaymentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SplitPaymentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SplitPaymentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SplitPaymentSumOrderByAggregateInput | undefined;
}
