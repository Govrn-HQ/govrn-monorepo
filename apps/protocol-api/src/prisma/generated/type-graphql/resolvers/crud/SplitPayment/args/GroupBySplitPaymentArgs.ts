import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentOrderByWithAggregationInput } from "../../../inputs/SplitPaymentOrderByWithAggregationInput";
import { SplitPaymentScalarWhereWithAggregatesInput } from "../../../inputs/SplitPaymentScalarWhereWithAggregatesInput";
import { SplitPaymentWhereInput } from "../../../inputs/SplitPaymentWhereInput";
import { SplitPaymentScalarFieldEnum } from "../../../../enums/SplitPaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySplitPaymentArgs {
  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  where?: SplitPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SplitPaymentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "token_address" | "amount" | "tx_hash" | "sender_address" | "recipient_address" | "sender_user_id" | "split_contract_id">;

  @TypeGraphQL.Field(_type => SplitPaymentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SplitPaymentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
