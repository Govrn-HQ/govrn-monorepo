import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildCreateNestedOneWithoutGuild_importsInput } from "../inputs/GuildCreateNestedOneWithoutGuild_importsInput";

@TypeGraphQL.InputType("GuildImportCreateWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportCreateWithoutIntegration_typeInput {
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
}
