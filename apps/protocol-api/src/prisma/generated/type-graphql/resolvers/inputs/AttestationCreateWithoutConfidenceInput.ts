import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusCreateNestedOneWithoutAttestationInput } from "../inputs/AttestationStatusCreateNestedOneWithoutAttestationInput";
import { ContributionCreateNestedOneWithoutAttestationsInput } from "../inputs/ContributionCreateNestedOneWithoutAttestationsInput";
import { UserCreateNestedOneWithoutAttestationsInput } from "../inputs/UserCreateNestedOneWithoutAttestationsInput";

@TypeGraphQL.InputType("AttestationCreateWithoutConfidenceInput", {
  isAbstract: true
})
export class AttestationCreateWithoutConfidenceInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => ContributionCreateNestedOneWithoutAttestationsInput, {
    nullable: false
  })
  contribution!: ContributionCreateNestedOneWithoutAttestationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_of_attestation?: Date | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusCreateNestedOneWithoutAttestationInput, {
    nullable: true
  })
  attestation_status?: AttestationStatusCreateNestedOneWithoutAttestationInput | undefined;
}
