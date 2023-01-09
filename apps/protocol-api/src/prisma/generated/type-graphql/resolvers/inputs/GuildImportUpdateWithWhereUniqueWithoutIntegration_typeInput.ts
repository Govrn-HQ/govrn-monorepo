import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportUpdateWithoutIntegration_typeInput } from "../inputs/GuildImportUpdateWithoutIntegration_typeInput";
import { GuildImportWhereUniqueInput } from "../inputs/GuildImportWhereUniqueInput";

@TypeGraphQL.InputType("GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput", {
  isAbstract: true
})
export class GuildImportUpdateWithWhereUniqueWithoutIntegration_typeInput {
  @TypeGraphQL.Field(_type => GuildImportWhereUniqueInput, {
    nullable: false
  })
  where!: GuildImportWhereUniqueInput;

  @TypeGraphQL.Field(_type => GuildImportUpdateWithoutIntegration_typeInput, {
    nullable: false
  })
  data!: GuildImportUpdateWithoutIntegration_typeInput;
}
