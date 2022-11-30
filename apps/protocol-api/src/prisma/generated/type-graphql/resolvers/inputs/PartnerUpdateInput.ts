import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateOneRequiredWithoutPartnersNestedInput } from "../inputs/ContributionUpdateOneRequiredWithoutPartnersNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContributionPartnersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutContributionPartnersNestedInput";

@TypeGraphQL.InputType("PartnerUpdateInput", {
  isAbstract: true
})
export class PartnerUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutContributionPartnersNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutContributionPartnersNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutPartnersNestedInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutPartnersNestedInput | undefined;
}
