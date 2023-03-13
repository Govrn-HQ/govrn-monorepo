import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationSettingsCreateManyGuildInputEnvelope } from "../inputs/VerificationSettingsCreateManyGuildInputEnvelope";
import { VerificationSettingsCreateOrConnectWithoutGuildInput } from "../inputs/VerificationSettingsCreateOrConnectWithoutGuildInput";
import { VerificationSettingsCreateWithoutGuildInput } from "../inputs/VerificationSettingsCreateWithoutGuildInput";
import { VerificationSettingsScalarWhereInput } from "../inputs/VerificationSettingsScalarWhereInput";
import { VerificationSettingsUpdateManyWithWhereWithoutGuildInput } from "../inputs/VerificationSettingsUpdateManyWithWhereWithoutGuildInput";
import { VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput";
import { VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput";
import { VerificationSettingsWhereUniqueInput } from "../inputs/VerificationSettingsWhereUniqueInput";

@TypeGraphQL.InputType("VerificationSettingsUpdateManyWithoutGuildNestedInput", {
  isAbstract: true
})
export class VerificationSettingsUpdateManyWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => [VerificationSettingsCreateWithoutGuildInput], {
    nullable: true
  })
  create?: VerificationSettingsCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: VerificationSettingsCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: VerificationSettingsUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationSettingsCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: VerificationSettingsCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsWhereUniqueInput], {
    nullable: true
  })
  set?: VerificationSettingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VerificationSettingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsWhereUniqueInput], {
    nullable: true
  })
  delete?: VerificationSettingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsWhereUniqueInput], {
    nullable: true
  })
  connect?: VerificationSettingsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: VerificationSettingsUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: VerificationSettingsUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationSettingsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VerificationSettingsScalarWhereInput[] | undefined;
}
