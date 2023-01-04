import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceUpdateOneWithoutAttestationsNestedInput } from "../inputs/AttestationConfidenceUpdateOneWithoutAttestationsNestedInput";
import { AttestationStatusUpdateOneWithoutAttestationNestedInput } from "../inputs/AttestationStatusUpdateOneWithoutAttestationNestedInput";
import { ContributionUpdateOneRequiredWithoutAttestationsNestedInput } from "../inputs/ContributionUpdateOneRequiredWithoutAttestationsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AttestationUpdateWithoutUserInput", {
  isAbstract: true
})
export class AttestationUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateOneWithoutAttestationsNestedInput, {
    nullable: true
  })
  confidence?: AttestationConfidenceUpdateOneWithoutAttestationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutAttestationsNestedInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutAttestationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_attestation?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateOneWithoutAttestationNestedInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusUpdateOneWithoutAttestationNestedInput | undefined;
}
