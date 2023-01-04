import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportWhereInput } from "../inputs/GuildImportWhereInput";

@TypeGraphQL.InputType("GuildImportListRelationFilter", {
  isAbstract: true
})
export class GuildImportListRelationFilter {
  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  every?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  some?: GuildImportWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportWhereInput, {
    nullable: true
  })
  none?: GuildImportWhereInput | undefined;
}
