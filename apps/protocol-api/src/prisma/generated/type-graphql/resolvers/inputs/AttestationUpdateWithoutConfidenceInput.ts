import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusUpdateOneWithoutAttestationNestedInput } from "../inputs/AttestationStatusUpdateOneWithoutAttestationNestedInput";
import { ContributionUpdateOneRequiredWithoutAttestationsNestedInput } from "../inputs/ContributionUpdateOneRequiredWithoutAttestationsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAttestationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAttestationsNestedInput";

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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttestationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAttestationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutAttestationsNestedInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutAttestationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusUpdateOneWithoutAttestationNestedInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusUpdateOneWithoutAttestationNestedInput | undefined;
}
