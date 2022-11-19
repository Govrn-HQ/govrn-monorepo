import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusCreateWithoutAttestationInput } from "../inputs/AttestationStatusCreateWithoutAttestationInput";
import { AttestationStatusWhereUniqueInput } from "../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.InputType("AttestationStatusCreateOrConnectWithoutAttestationInput", {
  isAbstract: true
})
export class AttestationStatusCreateOrConnectWithoutAttestationInput {
  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationStatusCreateWithoutAttestationInput, {
    nullable: false
  })
  create!: AttestationStatusCreateWithoutAttestationInput;
}
