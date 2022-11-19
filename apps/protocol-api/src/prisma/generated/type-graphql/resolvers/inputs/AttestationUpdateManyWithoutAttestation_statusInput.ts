import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyAttestation_statusInputEnvelope } from "../inputs/AttestationCreateManyAttestation_statusInputEnvelope";
import { AttestationCreateOrConnectWithoutAttestation_statusInput } from "../inputs/AttestationCreateOrConnectWithoutAttestation_statusInput";
import { AttestationCreateWithoutAttestation_statusInput } from "../inputs/AttestationCreateWithoutAttestation_statusInput";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyWithWhereWithoutAttestation_statusInput } from "../inputs/AttestationUpdateManyWithWhereWithoutAttestation_statusInput";
import { AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput } from "../inputs/AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput";
import { AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput } from "../inputs/AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithoutAttestation_statusInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithoutAttestation_statusInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutAttestation_statusInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutAttestation_statusInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput], {
    nullable: true
  })
  upsert?: AttestationUpsertWithWhereUniqueWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyAttestation_statusInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyAttestation_statusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  set?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  delete?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationWhereUniqueInput], {
    nullable: true
  })
  connect?: AttestationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput], {
    nullable: true
  })
  update?: AttestationUpdateWithWhereUniqueWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateManyWithWhereWithoutAttestation_statusInput], {
    nullable: true
  })
  updateMany?: AttestationUpdateManyWithWhereWithoutAttestation_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttestationScalarWhereInput[] | undefined;
}
