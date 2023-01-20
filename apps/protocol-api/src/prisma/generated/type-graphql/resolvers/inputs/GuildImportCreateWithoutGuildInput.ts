import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusCreateNestedOneWithoutGuild_importsInput } from "../inputs/GuildImportStatusCreateNestedOneWithoutGuild_importsInput";
import { GuildUserCreateNestedManyWithoutGuild_importInput } from "../inputs/GuildUserCreateNestedManyWithoutGuild_importInput";
import { IntegrationTypeCreateNestedOneWithoutGuild_importsInput } from "../inputs/IntegrationTypeCreateNestedOneWithoutGuild_importsInput";

@TypeGraphQL.InputType("GuildImportCreateWithoutGuildInput", {
  isAbstract: true
})
export class GuildImportCreateWithoutGuildInput {
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

  @TypeGraphQL.Field(_type => IntegrationTypeCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  integration_type!: IntegrationTypeCreateNestedOneWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => GuildImportStatusCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  import_status!: GuildImportStatusCreateNestedOneWithoutGuild_importsInput;

  @TypeGraphQL.Field(_type => GuildUserCreateNestedManyWithoutGuild_importInput, {
    nullable: true
  })
  users?: GuildUserCreateNestedManyWithoutGuild_importInput | undefined;
}
