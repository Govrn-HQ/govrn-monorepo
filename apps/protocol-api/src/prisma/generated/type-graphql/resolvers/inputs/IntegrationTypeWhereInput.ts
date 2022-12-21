import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { GuildImportListRelationFilter } from "../inputs/GuildImportListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IntegrationTypeWhereInput", {
  isAbstract: true
})
export class IntegrationTypeWhereInput {
  @TypeGraphQL.Field(_type => [IntegrationTypeWhereInput], {
    nullable: true
  })
  AND?: IntegrationTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeWhereInput], {
    nullable: true
  })
  OR?: IntegrationTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IntegrationTypeWhereInput], {
    nullable: true
  })
  NOT?: IntegrationTypeWhereInput[] | undefined;

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
