import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutGuildInput } from "../inputs/GuildImportCreateWithoutGuildInput";
import { GuildImportUpdateWithoutGuildInput } from "../inputs/GuildImportUpdateWithoutGuildInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpsertWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportUpsertWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutGuildInput, {
    nullable: false
  })
  update!: GuildImportUpdateWithoutGuildInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutGuildInput;
}
