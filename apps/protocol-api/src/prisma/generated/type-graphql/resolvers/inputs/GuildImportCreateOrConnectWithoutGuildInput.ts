import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutGuildInput } from "../inputs/GuildImportCreateWithoutGuildInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateOrConnectWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportCreateOrConnectWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutGuildInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutGuildInput;
}
