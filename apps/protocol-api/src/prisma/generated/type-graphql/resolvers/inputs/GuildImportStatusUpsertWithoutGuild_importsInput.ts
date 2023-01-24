import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusCreateWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateWithoutGuild_importsInput";
import { GuildImportStatusUpdateWithoutGuild_importsInput } from "../inputs/GuildImportStatusUpdateWithoutGuild_importsInput";

@TypeGraphQL.InputType("GuildImportStatusUpsertWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildImportStatusUpsertWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildImportStatusUpdateWithoutGuild_importsInput, {
    nullable: false
  })
  update!: GuildImportStatusUpdateWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: GuildImportStatusCreateWithoutGuild_importsInput;
}
