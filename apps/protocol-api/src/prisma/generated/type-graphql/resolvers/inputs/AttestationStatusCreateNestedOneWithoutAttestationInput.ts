import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationStatusCreateOrConnectWithoutAttestationInput } from "../inputs/AttestationStatusCreateOrConnectWithoutAttestationInput";
import { AttestationStatusCreateWithoutAttestationInput } from "../inputs/AttestationStatusCreateWithoutAttestationInput";
import { AttestationStatusWhereUniqueInput } from "../inputs/AttestationStatusWhereUniqueInput";

@TypeGraphQL.InputType("AttestationStatusCreateNestedOneWithoutAttestationInput", {
  isAbstract: true
})
export class AttestationStatusCreateNestedOneWithoutAttestationInput {
  @TypeGraphQL.Field(_type => AttestationStatusCreateWithoutAttestationInput, {
    nullable: true
  })
  create?: AttestationStatusCreateWithoutAttestationInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusCreateOrConnectWithoutAttestationInput, {
    nullable: true
  })
  connectOrCreate?: AttestationStatusCreateOrConnectWithoutAttestationInput | undefined;

  @TypeGraphQL.Field(_type => AttestationStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: AttestationStatusWhereUniqueInput | undefined;
}
