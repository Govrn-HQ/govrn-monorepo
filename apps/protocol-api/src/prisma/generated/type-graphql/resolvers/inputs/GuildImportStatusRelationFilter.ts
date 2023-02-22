import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GuildImportStatusWhereInput } from "../inputs/GuildImportStatusWhereInput";

@TypeGraphQL.InputType("GuildImportStatusRelationFilter", {
  isAbstract: true
})
export class GuildImportStatusRelationFilter {
  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  is?: GuildImportStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusWhereInput, {
    nullable: true
  })
  isNot?: GuildImportStatusWhereInput | undefined;
}
