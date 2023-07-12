import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput } from "../inputs/ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput } from "../inputs/SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SplitPaymentUpdateWithoutSender_userInput", {
  isAbstract: true
})
export class SplitPaymentUpdateWithoutSender_userInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  token_address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tx_hash?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sender_address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  recipient_address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput, {
    nullable: true
  })
  split_contract?: SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput, {
    nullable: true
  })
  contribution_payments?: ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput | undefined;
}
