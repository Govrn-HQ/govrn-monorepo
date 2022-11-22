import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyAttestation_statusInputEnvelope } from "../inputs/AttestationCreateManyAttestation_statusInputEnvelope";
import { AttestationCreateOrConnectWithoutAttestation_statusInput } from "../inputs/AttestationCreateOrConnectWithoutAttestation_statusInput";
import { AttestationCreateWithoutAttestation_statusInput } from "../inputs/AttestationCreateWithoutAttestation_statusInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationCreateNestedManyWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationCreateNestedManyWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutAttestation_statusInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutAttestation_statusInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyAttestation_statusInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyAttestation_statusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;
}
