import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateManyVerification_settingInputEnvelope } from "../inputs/GuildCreateManyVerification_settingInputEnvelope";
import { GuildCreateOrConnectWithoutVerification_settingInput } from "../inputs/GuildCreateOrConnectWithoutVerification_settingInput";
import { GuildCreateWithoutVerification_settingInput } from "../inputs/GuildCreateWithoutVerification_settingInput";
import { GuildScalarWhereInput } from "../inputs/GuildScalarWhereInput";
import { GuildUpdateManyWithWhereWithoutVerification_settingInput } from "../inputs/GuildUpdateManyWithWhereWithoutVerification_settingInput";
import { GuildUpdateWithWhereUniqueWithoutVerification_settingInput } from "../inputs/GuildUpdateWithWhereUniqueWithoutVerification_settingInput";
import { GuildUpsertWithWhereUniqueWithoutVerification_settingInput } from "../inputs/GuildUpsertWithWhereUniqueWithoutVerification_settingInput";
import { GuildWhereUniqueInput } from "../inputs/GuildWhereUniqueInput";

@TypeGraphQL.InputType("GuildUpdateManyWithoutVerification_settingNestedInput", {
  isAbstract: true
})
export class GuildUpdateManyWithoutVerification_settingNestedInput {
  @TypeGraphQL.Field(_type => [GuildCreateWithoutVerification_settingInput], {
    nullable: true
  })
  create?: GuildCreateWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildCreateOrConnectWithoutVerification_settingInput], {
    nullable: true
  })
  connectOrCreate?: GuildCreateOrConnectWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpsertWithWhereUniqueWithoutVerification_settingInput], {
    nullable: true
  })
  upsert?: GuildUpsertWithWhereUniqueWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildCreateManyVerification_settingInputEnvelope, {
    nullable: true
  })
  createMany?: GuildCreateManyVerification_settingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  set?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpdateWithWhereUniqueWithoutVerification_settingInput], {
    nullable: true
  })
  update?: GuildUpdateWithWhereUniqueWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildUpdateManyWithWhereWithoutVerification_settingInput], {
    nullable: true
  })
  updateMany?: GuildUpdateManyWithWhereWithoutVerification_settingInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildScalarWhereInput[] | undefined;
}
