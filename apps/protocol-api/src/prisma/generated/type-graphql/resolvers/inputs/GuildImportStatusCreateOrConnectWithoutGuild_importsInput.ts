import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusCreateWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateWithoutGuild_importsInput";
import { GuildImportStatusWhereUniqueInput } from "../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportStatusCreateOrConnectWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildImportStatusCreateOrConnectWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: GuildImportStatusCreateWithoutGuild_importsInput;
}
