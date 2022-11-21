import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusCreateWithoutAttestationInput } from "../inputs/AttestationStatusCreateWithoutAttestationInput";
import { AttestationStatusUpdateWithoutAttestationInput } from "../inputs/AttestationStatusUpdateWithoutAttestationInput";

@TypeGraphQL.InputType("AttestationStatusUpsertWithoutAttestationInput", {
  isAbstract: true
})
export class AttestationStatusUpsertWithoutAttestationInput {
  @TypeGraphQL.Field(_type => AttestationStatusUpdateWithoutAttestationInput, {
    nullable: false
  })
  update!: AttestationStatusUpdateWithoutAttestationInput;

  @TypeGraphQL.Field(_type => AttestationStatusCreateWithoutAttestationInput, {
    nullable: false
  })
  create!: AttestationStatusCreateWithoutAttestationInput;
}
