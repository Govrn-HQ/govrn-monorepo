import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutGuild_importsInput } from "../inputs/GuildCreateNestedOneWithoutGuild_importsInput";
import { GuildImportStatusCreateNestedOneWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateNestedOneWithoutGuild_importsInput";
import { IntegrationTypeCreateNestedOneWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateNestedOneWithoutGuild_importsInput";

@TypeGraphQL.InputType("GuildImportCreateWithoutUsersInput", {
  isAbstract: true
})
export class GuildImportCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authentication_token!: string;

  @TypeGraphQL.Field(_type => GuildCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  guild!: GuildCreateNestedOneWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  integration_type!: IntegrationTypeCreateNestedOneWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  import_status!: GuildImportStatusCreateNestedOneWithoutGuild_importsInput;
}
