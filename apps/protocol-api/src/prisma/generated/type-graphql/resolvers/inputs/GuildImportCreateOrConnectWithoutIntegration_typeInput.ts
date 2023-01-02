import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateWithoutIntegration_typeInput } from "../inputs/GuildImportCreateWithoutIntegration_typeInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportCreateOrConnectWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportCreateOrConnectWithoutIntegration_typeInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportCreateWithoutIntegration_typeInput, {
    nullable: false
  })
  create!: GuildImportCreateWithoutIntegration_typeInput;
}
