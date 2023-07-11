import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumContributionPaymentTypeFieldUpdateOperationsInput } from "../inputs/EnumContributionPaymentTypeFieldUpdateOperationsInput";
import { SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput } from "../inputs/SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateWithoutContributionInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateWithoutContributionInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput, {
    nullable: true
  })
  split_payment?: SplitPaymentUpdateOneRequiredWithoutContribution_paymentsNestedInput | undefined;

  @TypeGraphQL.Field(_type => EnumContributionPaymentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumContributionPaymentTypeFieldUpdateOperationsInput | undefined;
}
