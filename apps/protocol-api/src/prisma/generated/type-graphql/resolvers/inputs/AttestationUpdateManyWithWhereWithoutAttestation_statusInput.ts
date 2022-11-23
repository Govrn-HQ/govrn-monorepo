import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyMutationInput } from "../inputs/AttestationUpdateManyMutationInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithWhereWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithWhereWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => AttestationScalarWhereInput, {
    nullable: false
  })
  where!: AttestationScalarWhereInput;

  @TypeGraphQL.Field(_type => AttestationUpdateManyMutationInput, {
    nullable: false
  })
  data!: AttestationUpdateManyMutationInput;
}
