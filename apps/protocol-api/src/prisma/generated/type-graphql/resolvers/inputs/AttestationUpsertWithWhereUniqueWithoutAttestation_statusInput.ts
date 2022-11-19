import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateWithoutAttestation_statusInput } from "../inputs/AttestationCreateWithoutAttestation_statusInput";
import { AttestationUpdateWithoutAttestation_statusInput } from "../inputs/AttestationUpdateWithoutAttestation_statusInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutAttestation_statusInput, {
    nullable: false
  })
  update!: AttestationUpdateWithoutAttestation_statusInput;

  @TypeGraphQL.Field(_type => AttestationCreateWithoutAttestation_statusInput, {
    nullable: false
  })
  create!: AttestationCreateWithoutAttestation_statusInput;
}
