import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AttestationCreateManyUserInputEnvelope } from "../inputs/AttestationCreateManyUserInputEnvelope";
import { AttestationCreateOrConnectWithoutUserInput } from "../inputs/AttestationCreateOrConnectWithoutUserInput";
import { AttestationCreateWithoutUserInput } from "../inputs/AttestationCreateWithoutUserInput";
import { AttestationScalarWhereInput } from "../inputs/AttestationScalarWhereInput";
import { AttestationUpdateManyWithWhereWithoutUserInput } from "../inputs/AttestationUpdateManyWithWhereWithoutUserInput";
import { AttestationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/AttestationUpdateWithWhereUniqueWithoutUserInput";
import { AttestationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/AttestationUpsertWithWhereUniqueWithoutUserInput";
import { AttestationWhereUniqueInput } from "../inputs/AttestationWhereUniqueInput";

@TypeGraphQL.InputType("AttestationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class AttestationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [AttestationCreateWithoutUserInput], {
    nullable: true
  })
  create?: AttestationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: AttestationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: AttestationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => AttestationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: AttestationCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AttestationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: AttestationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: AttestationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [AttestationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AttestationScalarWhereInput[] | undefined;
}
