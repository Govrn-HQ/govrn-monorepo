import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutAttestation_statusInput } from "../inputs/AttestationCreateWithoutAttestation_statusInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateOrConnectWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationCreateOrConnectWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutAttestation_statusInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutAttestation_statusInput;
}
