import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput } from "../inputs/AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput";
import { ContributionUpdateOneRequiredWithoutAttestationsInput } from "../inputs/ContributionUpdateOneRequiredWithoutAttestationsInput";
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

  @TypeGraphQL.Field(_type => AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  confidence?: AttestationConfidenceUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => ContributionUpdateOneRequiredWithoutAttestationsInput, {
    nullable: true
  })
  contribution?: ContributionUpdateOneRequiredWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  date_of_attestation?: DateTimeFieldUpdateOperationsInput | undefined;
}
