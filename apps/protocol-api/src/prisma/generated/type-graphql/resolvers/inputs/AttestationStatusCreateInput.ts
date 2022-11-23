import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateNestedManyWithoutAttestation_statusInput } from "../inputs/AttestationCreateNestedManyWithoutAttestation_statusInput";

@TypeGraphQL.InputType("AttestationStatusCreateInput", {
  isAbstract: true
})
export class AttestationStatusCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => AttestationCreateNestedManyWithoutAttestation_statusInput, {
    nullable: true
  })
  attestation?: AttestationCreateNestedManyWithoutAttestation_statusInput | undefined;
}
