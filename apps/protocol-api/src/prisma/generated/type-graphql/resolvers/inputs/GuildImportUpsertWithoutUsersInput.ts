import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutUsersInput } from "../inputs/GuildImportCreateWithoutUsersInput";
import { GuildImportUpdateWithoutUsersInput } from "../inputs/GuildImportUpdateWithoutUsersInput";

@TypeGraphQL.InputType("GuildImportUpsertWithoutUsersInput", {
  isAbstract: true
})
export class GuildImportUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: GuildImportUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutUsersInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutUsersInput;
}
