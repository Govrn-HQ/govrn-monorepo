import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutImport_statusInput } from "../inputs/GuildImportCreateWithoutImport_statusInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateOrConnectWithoutImport_statusInput", {
  isAbstract: true
})
export class GuildImportCreateOrConnectWithoutImport_statusInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutImport_statusInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutImport_statusInput;
}
