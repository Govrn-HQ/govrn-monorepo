import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput } from "../inputs/AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAttestationsInput } from "../inputs/UserUpdateOneRequiredWithoutAttestationsInput";

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

  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  confidence?: AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_attestation?: DateTimeFieldUpdateOperationsInput | undefined;
}
