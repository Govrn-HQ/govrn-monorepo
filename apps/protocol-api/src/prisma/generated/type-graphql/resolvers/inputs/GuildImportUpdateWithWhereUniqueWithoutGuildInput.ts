import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportUpdateWithoutGuildInput } from "../inputs/GuildImportUpdateWithoutGuildInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateWithWhereUniqueWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportUpdateWithWhereUniqueWithoutGuildInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutGuildInput, {
    nullable: false
  })
  data!: GuildImportUpdateWithoutGuildInput;
}
