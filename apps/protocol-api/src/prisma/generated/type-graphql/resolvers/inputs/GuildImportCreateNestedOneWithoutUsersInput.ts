import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateOrConnectWithoutUsersInput } from "../inputs/GuildImportCreateOrConnectWithoutUsersInput";
import { GuildImportCreateWithoutUsersInput } from "../inputs/GuildImportCreateWithoutUsersInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateNestedOneWithoutUsersInput", {
  isAbstract: true
})
export class GuildImportCreateNestedOneWithoutUsersInput {
  @TypeGraphQL.Field(_type => GuildImportCreateWithoutUsersInput, {
    nullable: true
  })
  create?: GuildImportCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: GuildImportCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: true
  })
  connect?: GuildImportWhereUniqueInput | undefined;
}
