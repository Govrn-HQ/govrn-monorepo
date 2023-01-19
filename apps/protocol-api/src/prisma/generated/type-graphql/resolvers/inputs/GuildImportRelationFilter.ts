import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportWhereInput } from "../inputs/GuildImportWhereInput";

@TypeGraphQL.InputType("GuildImportRelationFilter", {
  isAbstract: true
})
export class GuildImportRelationFilter {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  is?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  isNot?: GuildImportWhereInput | undefined;
}
