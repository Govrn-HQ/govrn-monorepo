import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChainOrderByWithRelationInput } from "../inputs/ChainOrderByWithRelationInput";
import { SplitPaymentOrderByRelationAggregateInput } from "../inputs/SplitPaymentOrderByRelationAggregateInput";
import { UserSplitContractOrderByWithRelationInput } from "../inputs/UserSplitContractOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SplitContractOrderByWithRelationInput", {
  isAbstract: true
})
export class SplitContractOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ChainOrderByWithRelationInput, {
    nullable: true
  })
  chain?: ChainOrderByWithRelationInput | undefined;

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

  @TypeGraphQL.Field(_type => SplitPaymentOrderByRelationAggregateInput, {
    nullable: true
  })
  split_payments?: SplitPaymentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_split_contract_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserSplitContractOrderByWithRelationInput, {
    nullable: true
  })
  user_split_contract?: UserSplitContractOrderByWithRelationInput | undefined;
}
