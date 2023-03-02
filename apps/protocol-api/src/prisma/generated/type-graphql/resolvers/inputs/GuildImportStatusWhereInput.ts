import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildImportListRelationFilter } from "../inputs/GuildImportListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildImportStatusWhereInput", {
  isAbstract: true
})
export class GuildImportStatusWhereInput {
  @TypeGraphQL.Field(_type => [GuildImportStatusWhereInput], {
    nullable: true
  })
  AND?: GuildImportStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusWhereInput], {
    nullable: true
  })
  OR?: GuildImportStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportStatusWhereInput], {
    nullable: true
  })
  NOT?: GuildImportStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => GuildImportListRelationFilter, {
    nullable: true
  })
  guild_imports?: GuildImportListRelationFilter | undefined;
}
