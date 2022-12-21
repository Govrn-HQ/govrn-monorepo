import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyConfidenceInputEnvelope } from "../inputs/AttestationCreateManyConfidenceInputEnvelope";
import { AttestationCreateOrConnectWithoutConfidenceInput } from "../inputs/AttestationCreateOrConnectWithoutConfidenceInput";
import { AttestationCreateWithoutConfidenceInput } from "../inputs/AttestationCreateWithoutConfidenceInput";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyWithWhereWithoutConfidenceInput } from "../inputs/AttestationUpdateManyWithWhereWithoutConfidenceInput";
import { AttestationUpdateWithWhereUniqueWithoutConfidenceInput } from "../inputs/AttestationUpdateWithWhereUniqueWithoutConfidenceInput";
import { AttestationUpsertWithWhereUniqueWithoutConfidenceInput } from "../inputs/AttestationUpsertWithWhereUniqueWithoutConfidenceInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithoutConfidenceNestedInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithoutConfidenceNestedInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutConfidenceInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutConfidenceInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpsertWithWhereUniqueWithoutConfidenceInput], {
    nullable: true
  })
  upsert?: AttestationUpsertWithWhereUniqueWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyConfidenceInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyConfidenceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttestationUpdateWithWhereUniqueWithoutConfidenceInput], {
    nullable: true
  })
  update?: AttestationUpdateWithWhereUniqueWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateManyWithWhereWithoutConfidenceInput], {
    nullable: true
  })
  updateMany?: AttestationUpdateManyWithWhereWithoutConfidenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttestationScalarWhereInput[] | undefined;
}
