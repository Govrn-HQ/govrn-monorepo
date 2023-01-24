import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateManyImport_statusInputEnvelope } from "../inputs/GuildImportCreateManyImport_statusInputEnvelope";
import { GuildImportCreateOrConnectWithoutImport_statusInput } from "../inputs/GuildImportCreateOrConnectWithoutImport_statusInput";
import { GuildImportCreateWithoutImport_statusInput } from "../inputs/GuildImportCreateWithoutImport_statusInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateNestedManyWithoutImport_statusInput", {
  isAbstract: true
})
export class GuildImportCreateNestedManyWithoutImport_statusInput {
  @TypeGraphQL.Field(_type => [GuildImportCreateWithoutImport_statusInput], {
    nullable: true
  })
  create?: GuildImportCreateWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportCreateOrConnectWithoutImport_statusInput], {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutImport_statusInput[] | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateManyImport_statusInputEnvelope, {
    nullable: true
  })
  createMany?: GuildImportCreateManyImport_statusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereUniqueInput], {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput[] | undefined;
}
