import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildImportStatusRelationFilter } from "../inputs/GuildImportStatusRelationFilter";
import { GuildRelationFilter } from "../inputs/GuildRelationFilter";
import { GuildUserListRelationFilter } from "../inputs/GuildUserListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntegrationTypeRelationFilter } from "../inputs/IntegrationTypeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GuildImportWhereInput", {
  isAbstract: true
})
export class GuildImportWhereInput {
  @TypeGraphQL.Field(_type => [GuildImportWhereInput], {
    nullable: true
  })
  AND?: GuildImportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereInput], {
    nullable: true
  })
  OR?: GuildImportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportWhereInput], {
    nullable: true
  })
  NOT?: GuildImportWhereInput[] | undefined;

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
  authentication_token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  guild_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildRelationFilter, {
    nullable: true
  })
  guild?: GuildRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  integration_type_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntegrationTypeRelationFilter, {
    nullable: true
  })
  integration_type?: IntegrationTypeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  import_status_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => GuildImportStatusRelationFilter, {
    nullable: true
  })
  import_status?: GuildImportStatusRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GuildUserListRelationFilter, {
    nullable: true
  })
  users?: GuildUserListRelationFilter | undefined;
}
