import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("GuildTwitterIntegrationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildTwitterIntegrationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildTwitterIntegrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildTwitterIntegrationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildTwitterIntegrationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildTwitterIntegrationScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  guild_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  hashtag?: StringWithAggregatesFilter | undefined;
}
