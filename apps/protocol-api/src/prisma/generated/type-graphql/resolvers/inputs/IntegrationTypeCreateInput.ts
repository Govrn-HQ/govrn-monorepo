import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateNestedManyWithoutIntegration_typeInput } from "../inputs/GuildImportCreateNestedManyWithoutIntegration_typeInput";

@TypeGraphQL.InputType("IntegrationTypeCreateInput", {
  isAbstract: true
})
export class IntegrationTypeCreateInput {
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
  name!: string;

  @TypeGraphQL.Field(_type => GuildImportCreateNestedManyWithoutIntegration_typeInput, {
    nullable: true
  })
  guild_imports?: GuildImportCreateNestedManyWithoutIntegration_typeInput | undefined;
}
