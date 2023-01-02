import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyGuildInputEnvelope } from "../inputs/GuildImportCreateManyGuildInputEnvelope";
import { GuildImportCreateOrConnectWithoutGuildInput } from "../inputs/GuildImportCreateOrConnectWithoutGuildInput";
import { GuildImportCreateWithoutGuildInput } from "../inputs/GuildImportCreateWithoutGuildInput";
import { GuildImportScalarWhereInput } from "../inputs/GuildImportScalarWhereInput";
import { GuildImportUpdateManyWithWhereWithoutGuildInput } from "../inputs/GuildImportUpdateManyWithWhereWithoutGuildInput";
import { GuildImportUpdateWithWhereUniqueWithoutGuildInput } from "../inputs/GuildImportUpdateWithWhereUniqueWithoutGuildInput";
import { GuildImportUpsertWithWhereUniqueWithoutGuildInput } from "../inputs/GuildImportUpsertWithWhereUniqueWithoutGuildInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateManyWithoutGuildNestedInput", {
  isAbstract: true
})
export class GuildImportUpdateManyWithoutGuildNestedInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutGuildInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutGuildInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpsertWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  upsert?: GuildImportUpsertWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyGuildInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyGuildInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  set?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  delete?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpdateWithWhereUniqueWithoutGuildInput], {
    nullable: true
  })
  update?: GuildImportUpdateWithWhereUniqueWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpdateManyWithWhereWithoutGuildInput], {
    nullable: true
  })
  updateMany?: GuildImportUpdateManyWithWhereWithoutGuildInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildImportScalarWhereInput[] | undefined;
}
