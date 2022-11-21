import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusUpdateOneWithoutAttestationInput } from "../inputs/AttestationStatusUpdateOneWithoutAttestationInput";
import { ContributionUpdateOneRequiredWithoutAttestationsInput } from "../inputs/ContributionUpdateOneRequiredWithoutAttestationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAttestationsInput } from "../inputs/UserUpdateOneRequiredWithoutAttestationsInput";

@TypeGraphQL.InputType("AttestationUpdateWithoutConfidenceInput", {
  isAbstract: true
})
export class AttestationUpdateWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_attestation?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateOneWithoutAttestationInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusUpdateOneWithoutAttestationInput | undefined;
}
