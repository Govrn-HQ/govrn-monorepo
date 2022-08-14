import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumGuildStatusWithAggregatesFilter } from "../inputs/EnumGuildStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("GuildScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class GuildScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [GuildScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: GuildScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: GuildScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [GuildScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: GuildScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  discord_id?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  congrats_channel?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  logo?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  contribution_reporting_channel?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumGuildStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumGuildStatusWithAggregatesFilter | undefined;
}
