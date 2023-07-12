import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput } from "../inputs/ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutSent_split_paymentsNestedInput } from "../inputs/UserUpdateOneWithoutSent_split_paymentsNestedInput";

@TypeGraphQL.InputType("SplitPaymentUpdateWithoutSplit_contractInput", {
  isAbstract: true
})
export class SplitPaymentUpdateWithoutSplit_contractInput {
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

  @TypeGraphQL.Field(_type => ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput, {
    nullable: true
  })
  contribution_payments?: ContributionPaymentUpdateManyWithoutSplit_paymentNestedInput | undefined;
}
