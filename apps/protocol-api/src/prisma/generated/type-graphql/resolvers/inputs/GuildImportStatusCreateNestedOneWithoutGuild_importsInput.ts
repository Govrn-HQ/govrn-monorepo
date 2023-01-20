import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusCreateOrConnectWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateOrConnectWithoutGuild_importsInput";
import { GuildImportStatusCreateWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateWithoutGuild_importsInput";
import { GuildImportStatusWhereUniqueInput } from "../inputs/GuildImportStatusWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportStatusCreateNestedOneWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildImportStatusCreateNestedOneWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildImportStatusCreateWithoutGuild_importsInput, {
    nullable: true
  })
  create?: GuildImportStatusCreateWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateOrConnectWithoutGuild_importsInput, {
    nullable: true
  })
  connectOrCreate?: GuildImportStatusCreateOrConnectWithoutGuild_importsInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildImportStatusWhereUniqueInput | undefined;
}
