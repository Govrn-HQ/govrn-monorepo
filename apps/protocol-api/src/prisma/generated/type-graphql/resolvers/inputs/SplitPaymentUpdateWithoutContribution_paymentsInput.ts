import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput } from "../inputs/SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutSent_split_paymentsNestedInput } from "../inputs/UserUpdateOneWithoutSent_split_paymentsNestedInput";

@TypeGraphQL.InputType("SplitPaymentUpdateWithoutContribution_paymentsInput", {
  isAbstract: true
})
export class SplitPaymentUpdateWithoutContribution_paymentsInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutSent_split_paymentsNestedInput, {
    nullable: true
  })
  sender_user?: UserUpdateOneWithoutSent_split_paymentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput, {
    nullable: true
  })
  split_contract?: SplitContractUpdateOneRequiredWithoutSplit_paymentsNestedInput | undefined;
}
