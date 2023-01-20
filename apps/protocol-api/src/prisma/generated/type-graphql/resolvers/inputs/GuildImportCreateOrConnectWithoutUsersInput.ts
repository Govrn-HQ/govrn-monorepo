import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutUsersInput } from "../inputs/GuildImportCreateWithoutUsersInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateOrConnectWithoutUsersInput", {
  isAbstract: true
})
export class GuildImportCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutUsersInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutUsersInput;
}
