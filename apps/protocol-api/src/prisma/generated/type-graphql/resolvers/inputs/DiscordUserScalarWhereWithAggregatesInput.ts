import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DiscordUserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class DiscordUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DiscordUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DiscordUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DiscordUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DiscordUserScalarWhereWithAggregatesInput[] | undefined;

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
  display_name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  discord_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;
}
