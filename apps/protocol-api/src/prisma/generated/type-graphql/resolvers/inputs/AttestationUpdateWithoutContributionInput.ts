import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceUpdateOneWithoutAttestationsNestedInput } from "../inputs/AttestationConfidenceUpdateOneWithoutAttestationsNestedInput";
import { AttestationStatusUpdateOneWithoutAttestationNestedInput } from "../inputs/AttestationStatusUpdateOneWithoutAttestationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAttestationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAttestationsNestedInput";

@TypeGraphQL.InputType("AttestationUpdateWithoutContributionInput", {
  isAbstract: true
})
export class AttestationUpdateWithoutContributionInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttestationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAttestationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateOneWithoutAttestationNestedInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusUpdateOneWithoutAttestationNestedInput | undefined;
}
