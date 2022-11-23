import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationUpdateWithoutAttestation_statusInput } from "../inputs/AttestationUpdateWithoutAttestation_statusInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => AttestationWhereUniqueInput, {
    nullable: false
  })
  where!: AttestationWhereUniqueInput;

  @TypeGraphQL.Field(_type => AttestationUpdateWithoutAttestation_statusInput, {
    nullable: false
  })
  data!: AttestationUpdateWithoutAttestation_statusInput;
}
