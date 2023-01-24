import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportUpdateWithoutImport_statusInput } from "../inputs/GuildImportUpdateWithoutImport_statusInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateWithWhereUniqueWithoutImport_statusInput", {
  isAbstract: true
})
export class GuildImportUpdateWithWhereUniqueWithoutImport_statusInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutImport_statusInput, {
    nullable: false
  })
  data!: GuildImportUpdateWithoutImport_statusInput;
}
