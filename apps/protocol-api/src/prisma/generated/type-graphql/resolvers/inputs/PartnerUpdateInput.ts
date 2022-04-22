import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContributionUpdateOneRequiredWithoutPartnersInput } from "../inputs/ContributionUpdateOneRequiredWithoutPartnersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutContributionPartnersInput } from "../inputs/UserUpdateOneRequiredWithoutContributionPartnersInput";

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutContributionPartnersInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutContributionPartnersInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutPartnersInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutPartnersInput | undefined;
}
