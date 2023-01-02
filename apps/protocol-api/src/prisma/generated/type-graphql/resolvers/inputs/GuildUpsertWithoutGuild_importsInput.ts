import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateWithoutGuild_importsInput } from "../inputs/GuildCreateWithoutGuild_importsInput";
import { GuildUpdateWithoutGuild_importsInput } from "../inputs/GuildUpdateWithoutGuild_importsInput";

@TypeGraphQL.InputType("GuildUpsertWithoutGuild_importsInput", {
  isAbstract: true
})
export class GuildUpsertWithoutGuild_importsInput {
  @TypeGraphQL.Field(_type => GuildUpdateWithoutGuild_importsInput, {
    nullable: false
  })
  update!: GuildUpdateWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => GuildCreateWithoutGuild_importsInput, {
    nullable: false
  })
  create!: GuildCreateWithoutGuild_importsInput;
}
