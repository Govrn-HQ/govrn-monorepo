import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyImport_statusInputEnvelope } from "../inputs/GuildImportCreateManyImport_statusInputEnvelope";
import { GuildImportCreateOrConnectWithoutImport_statusInput } from "../inputs/GuildImportCreateOrConnectWithoutImport_statusInput";
import { GuildImportCreateWithoutImport_statusInput } from "../inputs/GuildImportCreateWithoutImport_statusInput";
import { GuildImportScalarWhereInput } from "../inputs/GuildImportScalarWhereInput";
import { GuildImportUpdateManyWithWhereWithoutImport_statusInput } from "../inputs/GuildImportUpdateManyWithWhereWithoutImport_statusInput";
import { GuildImportUpdateWithWhereUniqueWithoutImport_statusInput } from "../inputs/GuildImportUpdateWithWhereUniqueWithoutImport_statusInput";
import { GuildImportUpsertWithWhereUniqueWithoutImport_statusInput } from "../inputs/GuildImportUpsertWithWhereUniqueWithoutImport_statusInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateManyWithoutImport_statusNestedInput", {
  isAbstract: true
})
export class GuildImportUpdateManyWithoutImport_statusNestedInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutImport_statusInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutImport_statusInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpsertWithWhereUniqueWithoutImport_statusInput], {
    nullable: true
  })
  upsert?: GuildImportUpsertWithWhereUniqueWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyImport_statusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyImport_statusInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [GuildImportUpdateWithWhereUniqueWithoutImport_statusInput], {
    nullable: true
  })
  update?: GuildImportUpdateWithWhereUniqueWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportUpdateManyWithWhereWithoutImport_statusInput], {
    nullable: true
  })
  updateMany?: GuildImportUpdateManyWithWhereWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GuildImportScalarWhereInput[] | undefined;
}
