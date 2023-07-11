import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionPaymentCreateNestedManyWithoutSplit_paymentInput } from "../inputs/ContributionPaymentCreateNestedManyWithoutSplit_paymentInput";
import { SplitContractCreateNestedOneWithoutSplit_paymentsInput } from "../inputs/SplitContractCreateNestedOneWithoutSplit_paymentsInput";

@TypeGraphQL.InputType("SplitPaymentCreateWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentCreateWithoutSender_userInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token_address!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  amount!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tx_hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sender_address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  recipient_address!: string;

  @TypeGraphQL.Field(_type => SplitContractCreateNestedOneWithoutSplit_paymentsInput, {
    nullable: false
  })
  split_contract!: SplitContractCreateNestedOneWithoutSplit_paymentsInput;

  @TypeGraphQL.Field(_type => ContributionPaymentCreateNestedManyWithoutSplit_paymentInput, {
    nullable: true
  })
  contribution_payments?: ContributionPaymentCreateNestedManyWithoutSplit_paymentInput | undefined;
}
