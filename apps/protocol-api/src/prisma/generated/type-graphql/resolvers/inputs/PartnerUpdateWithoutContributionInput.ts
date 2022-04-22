import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContributionPartnersInput } from "../inputs/UserUpdateOneRequiredWithoutContributionPartnersInput";

@TypeGraphQL.InputType("PartnerUpdateWithoutContributionInput", {
  isAbstract: true
})
export class PartnerUpdateWithoutContributionInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutContributionPartnersInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutContributionPartnersInput | undefined;
}
