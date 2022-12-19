import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authentication_token!: number;

  @TypeGraphQL.Field(_type => IntegrationTypeCreateNestedOneWithoutGuild_importsInput, {
    nullable: false
  })
  integration_type!: IntegrationTypeCreateNestedOneWithoutGuild_importsInput;
}
