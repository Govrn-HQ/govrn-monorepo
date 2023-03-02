import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GuildImportScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildImportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildImportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildImportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildImportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildImportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildImportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authentication_token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  integration_type_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  import_status_id?: IntWithAggregatesFilter | undefined;
}
