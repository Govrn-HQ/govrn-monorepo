import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationConfidenceCreateNestedOneWithoutAttestationsInput } from "../inputs/AttestationConfidenceCreateNestedOneWithoutAttestationsInput";
import { AttestationStatusCreateNestedOneWithoutAttestationInput } from "../inputs/AttestationStatusCreateNestedOneWithoutAttestationInput";
import { UserCreateNestedOneWithoutAttestationsInput } from "../inputs/UserCreateNestedOneWithoutAttestationsInput";

@TypeGraphQL.InputType("AttestationCreateWithoutContributionInput", {
  isAbstract: true
})
export class AttestationCreateWithoutContributionInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AttestationConfidenceCreateNestedOneWithoutAttestationsInput, {
    nullable: true
  })
  confidence?: AttestationConfidenceCreateNestedOneWithoutAttestationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => AttestationStatusCreateNestedOneWithoutAttestationInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusCreateNestedOneWithoutAttestationInput | undefined;
}
