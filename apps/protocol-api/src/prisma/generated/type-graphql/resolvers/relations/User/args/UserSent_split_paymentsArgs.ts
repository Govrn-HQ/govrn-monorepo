import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SplitPaymentOrderByWithRelationInput } from "../../../inputs/SplitPaymentOrderByWithRelationInput";
import { SplitPaymentWhereInput } from "../../../inputs/SplitPaymentWhereInput";
import { SplitPaymentWhereUniqueInput } from "../../../inputs/SplitPaymentWhereUniqueInput";
import { SplitPaymentScalarFieldEnum } from "../../../../enums/SplitPaymentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserSent_split_paymentsArgs {
  @TypeGraphQL.Field(_type => SplitPaymentWhereInput, {
    nullable: true
  })
  where?: SplitPaymentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SplitPaymentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentWhereUniqueInput, {
    nullable: true
  })
  cursor?: SplitPaymentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SplitPaymentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "token_address" | "amount" | "tx_hash" | "sender_address" | "recipient_address" | "sender_user_id" | "split_contract_id"> | undefined;
}
