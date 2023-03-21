import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingCreateManyGuildInputEnvelope } from "../inputs/VerificationSettingCreateManyGuildInputEnvelope";
import { VerificationSettingCreateOrConnectWithoutGuildInput } from "../inputs/VerificationSettingCreateOrConnectWithoutGuildInput";
import { VerificationSettingCreateWithoutGuildInput } from "../inputs/VerificationSettingCreateWithoutGuildInput";
import { VerificationSettingScalarWhereInput } from "../inputs/VerificationSettingScalarWhereInput";
import { VerificationSettingUpdateManyWithWhereWithoutGuildInput } from "../inputs/VerificationSettingUpdateManyWithWhereWithoutGuildInput";
import { VerificationSettingUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/VerificationSettingUpdateWithWhereUniqueWithoutGuildInput";
import { VerificationSettingUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/VerificationSettingUpsertWithWhereUniqueWithoutGuildInput";
import { VerificationSettingWhereUniqueInput } from "../inputs/VerificationSettingWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingUpdateManyWithoutGuildNestedInput", {
  isAbstract: true
})
export class VerificationSettingUpdateManyWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => [VerificationSettingCreateWithoutGuildInput], {
    nullable: true
  })
  create?: VerificationSettingCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: VerificationSettingCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: VerificationSettingUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: VerificationSettingCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereUniqueInput], {
    nullable: true
  })
  set?: VerificationSettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VerificationSettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereUniqueInput], {
    nullable: true
  })
  delete?: VerificationSettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingWhereUniqueInput], {
    nullable: true
  })
  connect?: VerificationSettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: VerificationSettingUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: VerificationSettingUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VerificationSettingScalarWhereInput[] | undefined;
}
