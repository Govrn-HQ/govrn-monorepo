import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumContributionPaymentTypeFieldUpdateOperationsInput } from "../inputs/EnumContributionPaymentTypeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ContributionPaymentUpdateManyMutationInput", {
  isAbstract: true
})
export class ContributionPaymentUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumContributionPaymentTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumContributionPaymentTypeFieldUpdateOperationsInput | undefined;
}
