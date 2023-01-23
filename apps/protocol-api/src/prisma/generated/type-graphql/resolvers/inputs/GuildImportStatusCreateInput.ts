import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportCreateNestedManyWithoutImport_statusInput } from "../inputs/GuildImportCreateNestedManyWithoutImport_statusInput";

@TypeGraphQL.InputType("GuildImportStatusCreateInput", {
  isAbstract: true
})
export class GuildImportStatusCreateInput {
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

  @TypeGraphQL.Field(_type => GuildImportCreateNestedManyWithoutImport_statusInput, {
    nullable: true
  })
  guild_imports?: GuildImportCreateNestedManyWithoutImport_statusInput | undefined;
}
